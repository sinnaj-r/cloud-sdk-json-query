/* eslint-disable no-underscore-dangle */
import {
  AllFields,
  Link,
  RequestBuilder,
  Constructable,
} from '@sap-cloud-sdk/core/dist';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';
import { camelCase } from '@sap-cloud-sdk/util/dist';
/**
 * Searches for the a field in the source
 *
 * @template T
 * @param {(RequestBuilder<T> | Link<T>)} source
 * @param {(keyof T | '*')} field
 * @returns A SDK Field
 */
export const getField = <T extends Entity>(
  source: RequestBuilder<T> | Link<T>,
  field: keyof T | '*',
) => {
  let constructor: Constructable<T>;
  if (source instanceof Link) {
    constructor = source._linkedEntity as Constructable<T>;
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

/**
 * Returns the last Element of an array
 *
 * @template T
 * @param {T[]} arr
 * @returns {(T | null)}
 */
export const last = <T>(arr: T[]): T | null =>
  arr.length > 0 ? arr[arr.length - 1] : null;

/**
 * Get the 'real' name of the field on the backend
 *
 * @param {keyof T} fieldName
 * @param {B} req
 * @returns
 */
export const getFieldName = <T extends Entity, B extends RequestBuilder<T>>(
  fieldName: keyof T,
  req: B,
) => {
  const field = getField(req, fieldName);
  return field?._fieldName ?? fieldName;
};
