import { GetAllRequestBuilderV4 } from '@sap-cloud-sdk/core/dist';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';

export const buildSkip = <T extends Entity>(
  skip: number | undefined,
  req: GetAllRequestBuilderV4<T>,
) => {
  if (skip) {
    return req.skip(skip);
  }
  return req;
};
