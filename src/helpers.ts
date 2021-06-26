/* eslint-disable no-underscore-dangle */
import { AllFields, RequestBuilder } from '@sap-cloud-sdk/core/dist';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';
import { camelCase } from '@sap-cloud-sdk/util/dist';

export const getField = <T extends Entity>(
  requestBuilder: RequestBuilder<T>,
  field: keyof T | '*',
) => {
  if (field === '*') {
    return new AllFields('*', requestBuilder._entityConstructor);
  }
  return requestBuilder._entityConstructor._allFields.find(
    (f) => f && camelCase(f._fieldName) === (field as string),
  )!;
};
export const last = <T>(arr: T[]): T | null =>
  arr.length > 0 ? arr[arr.length - 1] : null;
