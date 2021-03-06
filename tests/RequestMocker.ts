/* eslint-disable max-lines */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
import nock from 'nock';
import {
  basicHeader,
  Constructable,
  Destination,
  GetAllRequestBuilderV2,
  GetAllRequestBuilderV4,
  oDataUri,
  ODataCreateRequestConfig,
  ODataDeleteRequestConfig,
  ODataGetAllRequestConfig,
  ODataRequest,
  ODataUpdateRequestConfig,
  oDataUriV4,
} from '@sap-cloud-sdk/core';

export const defaultHost = 'http://localhost';
const defaultCsrfToken = 'mocked-x-csrf-token';

const mockedBuildHeaderResponse = {
  'x-csrf-token': defaultCsrfToken,
  'set-cookie': ['mocked-cookie-0;mocked-cookie-1', 'mocked-cookie-2'],
};

export const defaultBasicCredentials = 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=';

export const defaultRequestHeaders = {
  authorization: defaultBasicCredentials,
  cookie: 'mocked-cookie-0;mocked-cookie-2',
  'content-type': 'application/json',
  accept: 'application/json',
  'sap-client': '123',
};

export const defaultDestinationName = 'Testination';

export const defaultDestination: Destination = {
  name: defaultDestinationName,
  url: '/testination',
  username: 'username',
  password: 'password',
  sapClient: '123',
  authTokens: [],
  originalProperties: {},
};

export function mockDestinationsEnv(...destinations) {
  process.env.destinations = JSON.stringify([...destinations]);
}

export function unmockDestinationsEnv() {
  delete process.env.destinations;
}

interface MockRequestParams {
  host?: string;
  destination?: Destination;
  path?: string;
  statusCode?: number;
  additionalHeaders?: Record<string, any>;
  body?: Record<string, any>;
  responseBody?: Record<string, any>;
  responseHeaders?: Record<string, any>;
  query?: Record<string, any> | true;
  method?: string;
  delay?: number;
}

export function mockCreateRequest(
  params: MockRequestParams,
  entityConstructor,
) {
  const requestConfig = new ODataCreateRequestConfig(
    entityConstructor,
    oDataUri,
  );
  return mockRequest(requestConfig, {
    ...params,
    statusCode: params.statusCode || 200,
    method: params.method || 'post',
    responseBody: { d: params.responseBody || params.body },
  });
}

export function mockCreateRequestV4(
  params: MockRequestParams,
  entityConstructor,
) {
  const requestConfig = new ODataCreateRequestConfig(
    entityConstructor,
    oDataUriV4,
  );
  return mockRequest(requestConfig, {
    ...params,
    statusCode: params.statusCode || 200,
    method: params.method || 'post',
    responseBody: params.responseBody,
  });
}

export function mockDeleteRequest(
  params: MockRequestParams,
  entityConstructor,
) {
  const requestConfig = new ODataDeleteRequestConfig(
    entityConstructor,
    oDataUri,
  );
  return mockRequest(requestConfig, {
    ...params,
    statusCode: params.statusCode || 202,
    method: params.method || 'delete',
  });
}

export function mockUpdateRequest(
  params: MockRequestParams,
  entityConstructor: Constructable<any>,
) {
  const requestConfig = new ODataUpdateRequestConfig(
    entityConstructor,
    oDataUri,
  );
  return mockRequest(requestConfig, {
    ...params,
    statusCode: params.statusCode || 204,
    method: params.method || 'patch',
  });
}

export function mockGetRequest(
  params: MockRequestParams,
  entityConstructor: Constructable<any>,
) {
  const requestConfig = new ODataGetAllRequestConfig(
    entityConstructor,
    oDataUri,
  );
  return mockRequest(requestConfig, {
    ...params,
    statusCode: params.statusCode || 200,
    method: params.method || 'get',
    query:
      typeof params.query === 'object'
        ? { $format: 'json', ...params.query }
        : undefined,
  });
}

export function mockCountRequest(
  destination: Destination,
  count: number,
  getAllRequest: GetAllRequestBuilderV2<any> | GetAllRequestBuilderV4<any>,
) {
  const servicePath = getAllRequest._entityConstructor._defaultServicePath;
  const entityName = getAllRequest._entityConstructor._entityName;
  return nock(defaultHost)
    .get(`${destination.url}${servicePath}/${entityName}/$count`)
    .reply(200, count.toString());
}

interface MockHeaderRequestParams {
  request;
  host?: string;
  responseHeaders?: Record<string, any>;
  path?: string;
}

export function mockHeaderRequest({
  request,
  host = defaultHost,
  responseHeaders = mockedBuildHeaderResponse,
  path,
}: MockHeaderRequestParams) {
  return nock(host)
    .head(path ? `${request.serviceUrl()}/${path}` : request.serviceUrl())
    .reply(200, undefined, responseHeaders);
}

export function mockRequest(
  requestConfig,
  {
    host = defaultHost,
    destination = defaultDestination,
    path = '',
    statusCode = 200,
    additionalHeaders,
    method = 'get',
    body,
    query = true,
    responseBody,
    responseHeaders,
    delay = 0,
  }: MockRequestParams,
) {
  const request = new ODataRequest(requestConfig, destination);

  mockHeaderRequest({ request, path });

  return nock(host, getRequestHeaders(method, additionalHeaders))
    [method](
      path ? `${request.serviceUrl()}/${path}` : request.resourceUrl(),
      body,
    )
    .query(query)
    .delay(delay)
    .reply(statusCode, responseBody, responseHeaders);
}

function getRequestHeaders(
  method: string,
  additionalHeaders?: Record<string, any>,
) {
  if (additionalHeaders) {
    const initialHeaders =
      method === 'get'
        ? defaultRequestHeaders
        : { ...defaultRequestHeaders, 'x-csrf-token': defaultCsrfToken };
    return { reqheaders: { ...initialHeaders, ...additionalHeaders } };
  }
  return {};
}

export function mockCsrfTokenRequest(
  host: string,
  sapClient: string,
  servicePath = '/sap/opu/odata/sap/API_TEST_SRV',
  username = 'username',
  password = 'password',
  csrfToken = 'CSRFTOKEN',
) {
  nock(host, {
    reqheaders: {
      authorization: basicHeader(username, password),
      'x-csrf-token': 'Fetch',
      'sap-client': sapClient,
    },
  })
    .get(servicePath)
    .reply(200, '', {
      'x-csrf-token': csrfToken,
      'Set-Cookie': ['key1=val1', 'key2=val2', 'key3=val3'],
    });
}
