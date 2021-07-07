/* eslint-disable no-underscore-dangle */
import { AllFields, Link, RequestBuilder } from '@sap-cloud-sdk/core/dist';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';
import { camelCase } from '@sap-cloud-sdk/util/dist';

export const getField = <T extends Entity>(
  source: RequestBuilder<T> | Link<T>,
  field: keyof T | '*',
) => {
  // TODO Type
  let constructor: any;
  if (source instanceof Link) {
    constructor = source._linkedEntity;
  } else {
    constructor = source._entityConstructor;
  }
  if (field === '*') {
    return new AllFields('*', constructor);
  }

  return constructor._allFields.find(
    (f) => f && camelCase(f._fieldName) === (field as string),
  )!;
};
export const last = <T>(arr: T[]): T | null =>
  arr.length > 0 ? arr[arr.length - 1] : null;

export const getFieldName = <T extends Entity, B extends RequestBuilder<T>>(
  fieldName: keyof T,
  req: B,
) => {
  const field = getField(req, fieldName);
  return field?._fieldName ?? fieldName;
};
