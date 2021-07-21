/* eslint-disable import/no-cycle */
import { Expandable } from '@sap-cloud-sdk/core/dist';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';
import { buildQuery } from '../buildQuery';
import { getField } from '../helpers';
import { Expand, RequestTypeWithoutCount } from '../types';

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
          const subfield = buildQuery(
            // eslint-disable-next-line no-underscore-dangle
            field as any,
            exp[key as keyof typeof exp] as any,
          );
          expands.push(subfield as any);
        }
      }
    }

    return req.expand(...expands);
  }
  return req;
};
