import {
  GetAllRequestBuilderV4,
  toLower,
  toUpper,
  substring,
  concat,
  endsWith,
  startsWith,
  StringFilterFunction,
  trim,
} from '@sap-cloud-sdk/core/dist';
import { contains, Entity } from '@sap-cloud-sdk/core/dist/odata-v4';
import { getFieldName } from '../helpers';

export const isUnaryExpression = (str: string) =>
  str.match(/(^contains)|(^endswith)|(^startswith)/);
const isBinaryExpression = (str: string) =>
  str.match(/(^tolower)|(^toupper)|(^trim)|(^substring)|(^concat)/);

export const parseStringFunction = <
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
