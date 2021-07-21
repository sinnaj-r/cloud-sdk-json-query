import {
  CountRequestBuilder,
  GetAllRequestBuilderV4,
} from '@sap-cloud-sdk/core/dist';
import { Selectable } from '@sap-cloud-sdk/core/dist/odata-common';

import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';
import type {
  QueryOptions,
  RequestType,
  QueryOptionsGetAll,
  RequestTypeWithoutCount,
  QueryOptionsCount,
} from './types';

// eslint-disable-next-line import/no-cycle
import { buildQueryCount } from './buildQueryOptions/buildCount';
import { buildExpand } from './buildQueryOptions/buildExpand';
import { buildFilter } from './buildQueryOptions/buildFilter';
import { buildOrderBy } from './buildQueryOptions/buildOrderBy';
import { buildSkip } from './buildQueryOptions/buildSkip';
import { buildTop } from './buildQueryOptions/buildTop';
import { getField } from './helpers';
/**
 * Parses the query and applies it's attributes to the RequestBuild
 *
 * @template T The SDK Entity
 * @param {RequestType<T>} requestBuilder
 * @param {QueryOptions<T>} query
 * @returns a SDK Request
 */
export const buildQuery = <T extends Entity>(
  requestBuilder: RequestType<T>,
  query: QueryOptions<T>,
) => {
  let req = requestBuilder;
  // Check if Request is a Get All Request
  if (req instanceof GetAllRequestBuilderV4) {
    req = buildQueryGetAll<T>(req as GetAllRequestBuilderV4<T>, query);
    return buildQueryCommon<T>(req as GetAllRequestBuilderV4<T>, query);
  }
  // Check if Request is a Count Request
  if (req instanceof CountRequestBuilder) {
    return buildQueryCount<T>(
      req as CountRequestBuilder<T>,
      query as QueryOptionsCount<T>,
    );
  }
  return buildQueryCommon<T>(req as RequestTypeWithoutCount<T>, query);
};
/**
 * A Function to apply the common Query Arguments to the RequestBuilder.
 * These Arguments are: select and expand
 *
 * @template T
 * @param {RequestTypeWithoutCount<T>} requestBuilder
 * @param {QueryOptionsGetAll<T>} query
 * @returns {RequestType<T>}
 */
const buildQueryCommon = <T extends Entity>(
  requestBuilder: RequestTypeWithoutCount<T>,
  query: QueryOptionsGetAll<T>,
): RequestType<T> => {
  let req = requestBuilder;
  const { select, expand } = query;

  if (select) {
    req = req.select(
      ...select.map(
        (field) => getField(requestBuilder, field) as Selectable<T>,
      ),
    );
  }
  // TODO Fix Types
  req = buildExpand<T>(expand as any, requestBuilder, req);

  return req;
};
/**
 * Applies the Query Arguments specific to a GetAll Request.
 * These Arguments are: top, skip, orderBy, filter
 *
 * @template T
 * @param {GetAllRequestBuilderV4<T>} requestBuilderGetAll
 * @param {QueryOptionsGetAll<T>} { top, skip, orderBy, filter }
 * @returns
 */
const buildQueryGetAll = <T extends Entity>(
  requestBuilderGetAll: GetAllRequestBuilderV4<T>,
  { top, skip, orderBy, filter }: QueryOptionsGetAll<T>,
) => {
  let req = requestBuilderGetAll;
  // Top $top
  req = buildTop<T>(top, req);

  // Skip $skip
  req = buildSkip<T>(skip, req);

  // Order By $orderby
  req = buildOrderBy<T>(orderBy, req);

  req = buildFilter<T, typeof req>(filter, req);

  return req;
};
