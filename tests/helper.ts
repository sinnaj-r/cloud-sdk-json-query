import { createRequest } from '../src/createRequest';
import { QueryOptions } from '../src/types';
import { ExampleItem1 } from './mocks/ExampleItem1/ExampleItem1';

export const getQueryForRequest = (query: QueryOptions<ExampleItem1>) =>
  decodeURIComponent(
    createRequest<ExampleItem1>(ExampleItem1, query).build().query(),
  );
