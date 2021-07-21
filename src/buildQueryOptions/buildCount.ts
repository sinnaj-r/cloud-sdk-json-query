import { CountRequestBuilder } from '@sap-cloud-sdk/core/dist';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';
import { QueryOptionsCount } from '../types';

export const buildQueryCount = <T extends Entity>(
  requestBuilderCount: CountRequestBuilder<T>,
  _: QueryOptionsCount<T>,
) => {
  const req = requestBuilderCount;

  // TODO: Filter is not supported ?
  // req = buildFilter<T, typeof req>(filter, req);
  return req;
};
