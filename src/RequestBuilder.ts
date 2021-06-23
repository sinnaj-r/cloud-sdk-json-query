import {
  Constructable,
  GetAllRequestBuilderV4,
  GetByKeyRequestBuilderV4,
} from '@sap-cloud-sdk/core/dist';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';

export const getByKey = <T extends Entity>(
  e: Constructable<T>,
  id: string,
): GetByKeyRequestBuilderV4<T> => new GetByKeyRequestBuilderV4<T>(e, { id });

export const getAll = <T extends Entity>(
  e: Constructable<T>,
): GetAllRequestBuilderV4<T> => new GetAllRequestBuilderV4<T>(e);
