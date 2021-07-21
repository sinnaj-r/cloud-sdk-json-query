/* eslint-disable max-lines */
import op from 'object-path';
import {
  GetAllRequestBuilderV4,
  Filter as SDKFilter,
  and,
  or,
  not,
} from '@sap-cloud-sdk/core/dist';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';
import { last } from '../helpers';
import { Filter } from '../types/FilterTypes';
import { COMPARISON_OPERATORS } from '../types/OperatorTypes';
import { parseStringFunction, isUnaryExpression } from './parseStringFunction';

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

  // primitive filter
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
