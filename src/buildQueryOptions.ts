/* eslint-disable max-lines */
import op from 'object-path';
import {
  GetAllRequestBuilderV4,
  asc,
  desc,
  OrderableInput,
  Expandable,
  Filter as SDKFilter,
  and,
  toLower,
  toUpper,
  substring,
  concat,
  endsWith,
  startsWith,
  StringFilterFunction,
  or,
  not,
  trim,
  CountRequestBuilder,
} from '@sap-cloud-sdk/core/dist';
import { contains, Entity } from '@sap-cloud-sdk/core/dist/odata-v4';

// eslint-disable-next-line import/no-cycle
import { buildQuery } from './buildQuery';
import { getField, getFieldName, last } from './helpers';
import type {
  OrderBy,
  Expand,
  RequestTypeWithoutCount,
  QueryOptionsCount,
} from './types';
import type { Filter } from './types/FilterTypes';
import { COMPARISON_OPERATORS } from './types/OperatorTypes';

export const buildTop = <T extends Entity>(
  top: number | undefined,
  req: GetAllRequestBuilderV4<T>,
) => {
  if (top) {
    return req.top(top);
  }
  return req;
};

export const buildSkip = <T extends Entity>(
  skip: number | undefined,
  req: GetAllRequestBuilderV4<T>,
) => {
  if (skip) {
    return req.skip(skip);
  }
  return req;
};

export const buildOrderBy = <T extends Entity>(
  orderBy: OrderBy<T> | undefined,
  req: GetAllRequestBuilderV4<T>,
) => {
  if (orderBy) {
    return req.orderBy(
      ...orderBy.map((orderItem) => {
        let order: typeof asc | typeof desc;
        let field: keyof T;

        // [key, 'asc']
        if (Array.isArray(orderItem)) {
          order = orderItem[1] === 'desc' ? desc : asc;
          [field] = orderItem;
        } else {
          order = asc;
          field = orderItem;
        }
        return order<T>(getField(req, field) as OrderableInput<T>);
      }),
    );
  }
  return req;
};

const isUnaryExpression = (str: string) =>
  str.match(/(^contains)|(^endswith)|(^startswith)/);

const isBinaryExpression = (str: string) =>
  str.match(/(^tolower)|(^toupper)|(^trim)|(^substring)|(^concat)/);

const parseStringFunction = <
  T extends Entity,
  B extends GetAllRequestBuilderV4<T>,
>(
  str: string | number,
  req: B,
) => {
  // String Filter Stmnt
  if (typeof str !== 'string') {
    return str;
  }
  const match = isUnaryExpression(str) || isBinaryExpression(str);
  // Just a Field Name
  if (!match || !match?.[0]) {
    return getFieldName(str as keyof T, req);
  }
  const operator = match[0];
  const args: (string | StringFilterFunction<T>)[] = str
    .replace(`${operator}(`, '')
    .replace(')', '')
    .split(',')
    .map((elm) => JSON.parse(elm))
    .map(
      (elm) =>
        parseStringFunction(elm, req) as StringFilterFunction<T> | string,
    );

  switch (operator) {
    case 'tolower':
      return toLower<T>(args[0]);
    case 'toupper':
      return toUpper<T>(args[0]);
    case 'trim':
      return trim(args[0] as string);
    case 'substring':
      return substring<T>(args[0], parseInt(args[1] as string, 10));
    case 'concat':
      return concat<T>(args[0], args[1]);
    case 'contains':
      return contains<T>(args[0], args[1]);
    case 'endswith':
      return endsWith<T>(args[0], args[1]);
    case 'startswith':
      return startsWith<T>(args[0], args[1]);
    default:
      return str;
  }
};

const createFilter = <T extends Entity, B extends GetAllRequestBuilderV4<T>>(
  path: (string | number)[] = [],
  operator: typeof COMPARISON_OPERATORS[number],
  value: any,
  ignoreNKeys: number[] = [],
  req: B,
) =>
  new SDKFilter<T, string>(
    path
      .filter((_, i) => !ignoreNKeys.includes(i))
      .map((str) => parseStringFunction(str, req))
      .join('/'),
    operator,
    parseStringFunction(value, req) as any,
  );

const parseFilterValue = <
  T extends Entity,
  B extends GetAllRequestBuilderV4<T>,
>(
  filter: Filter<T>,
  path: (string | number)[],
  ignoreNKeys: number[] = [],
  req: B,
): SDKFilter<T, any>[] => {
  const lastKey = last(path);
  const value = op.get(filter as any, path);

  if (Array.isArray(value)) {
    // Implicit Root-Level And
    if (path.length === 0 || ['and', 'or'].includes(lastKey as any)) {
      const filters: SDKFilter<T, any>[] = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < value.length; i++) {
        filters.push(
          ...parseFilterValue(
            filter,
            [...path, i],
            [...ignoreNKeys, path.length - 1, path.length],
            req,
          ),
        );
      }
      switch (lastKey) {
        default:
        case 'and':
          return [and(...filters) as any];
        case 'or':
          return [or(...filters) as any];
      }
    }

    // Explicit or implicit 'in'
    if (lastKey === 'in') {
      throw new Error('In is not supported by the SDK');
    }
  }

  if (lastKey === 'not') {
    // TODO Reduce Duplication
    const filters: SDKFilter<T, any>[] = [];
    for (const key of Object.keys(value)) {
      filters.push(
        ...parseFilterValue(
          filter,
          [...path, key],
          [...ignoreNKeys, path.length - 1],
          req,
        ),
      );
    }
    return [and(...filters.map((f) => not(f))) as any];
  }

  // Complex Query (logic, in, gte, any, ...)
  if (typeof value === 'object') {
    const filters: SDKFilter<T, any>[] = [];
    for (const key of Object.keys(value)) {
      filters.push(
        ...parseFilterValue(filter, [...path, key], ignoreNKeys, req),
      );
    }
    return filters;
  }

  // primitive filter filter
  if (['string', 'number'].includes(typeof value)) {
    // Comparision
    if (COMPARISON_OPERATORS.includes(lastKey as any)) {
      return [
        createFilter(
          path.slice(0, -1),
          lastKey as typeof COMPARISON_OPERATORS[number],
          value,
          ignoreNKeys,
          req,
        ),
      ];
    }
  }
  // String Expr
  if (typeof value === 'string' && isUnaryExpression(value)) {
    return [parseStringFunction(value, req) as any];
  }

  return [createFilter(path, 'eq', value, ignoreNKeys, req)];
};

// | FilterStatements<T, Extract<keyof T, string>>
// | (NormalFilter<T> & StringFilter<T> & LogicFilter<T>);
const parseFilterKey = <T extends Entity, B extends GetAllRequestBuilderV4<T>>(
  filter: Filter<any>,
  req: B,
) => {
  const generatedFilters: any[] = [];
  generatedFilters.push(...parseFilterValue(filter, [], undefined, req));

  return generatedFilters;
};

export const buildFilter = <
  T extends Entity,
  B extends GetAllRequestBuilderV4<T>,
>(
  filter: Filter<T> | undefined,
  req: B,
): B => {
  if (filter) {
    const filterArr = parseFilterKey(filter, req);
    return req.filter(...filterArr);
  }
  return req;
};

export const buildExpand = <T extends Entity>(
  expand: Expand<T>,
  requestBuilder: RequestTypeWithoutCount<T>,
  req: RequestTypeWithoutCount<T>,
) => {
  if (expand) {
    const expands: Expandable<T>[] = [];

    // TODO Fix Dep Cycle for Expand
    // TODO Add support for expand without array
    for (const exp of expand) {
      if (typeof exp !== 'object') {
        expands.push(getField(requestBuilder, exp) as Expandable<T>);
      } else {
        for (const key of Object.keys(exp)) {
          const field = getField(requestBuilder, key as keyof typeof exp);
          const result = buildQuery(
            field as any,
            exp[key as keyof typeof exp] as any,
          );
          expands.push(result as any);
        }
      }
    }

    return req.expand(...expands);
  }
  return req;
};

export const buildQueryCount = <T extends Entity>(
  requestBuilderCount: CountRequestBuilder<T>,
  _: QueryOptionsCount<T>,
) => {
  const req = requestBuilderCount;

  // TODO: Filter is not supported ?
  // req = buildFilter<T, typeof req>(filter, req);

  return req;
};
