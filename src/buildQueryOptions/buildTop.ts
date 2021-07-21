import { GetAllRequestBuilderV4 } from '@sap-cloud-sdk/core/dist';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';

export const buildTop = <T extends Entity>(
  top: number | undefined,
  req: GetAllRequestBuilderV4<T>,
) => {
  if (top) {
    return req.top(top);
  }
  return req;
};
