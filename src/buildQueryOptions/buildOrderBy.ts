import {
  GetAllRequestBuilderV4,
  asc,
  desc,
  OrderableInput,
} from '@sap-cloud-sdk/core/dist';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';
import { getField } from '../helpers';
import { OrderBy } from '../types';

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
