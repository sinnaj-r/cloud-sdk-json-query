# Cloud Sdk Json Query

[![codecov](https://codecov.io/gh/sinnaj-r/cloud-sdk-json-query/branch/master/graph/badge.svg?token=DIY8WNR1J6)](https://codecov.io/gh/sinnaj-r/cloud-sdk-json-query)

Use MongoDB-esque JSON Queries to query create ODATA Requests (via the SAP Cloud SDK).

## Install

Install from the NPM repository using yarn or npm:

```shell
yarn add cloud-sdk-json-query
```

```shell
npm install cloud-sdk-json-query
```

## Usage

```ts
import { createRequest } from 'cloud-sdk-json-query';
import { ExampleItem1 } from './client/generated/by/sdk/...';

const query = {
  filter: { num1: 42 },
  top: 10,
};

// Create Request
const request = createRequest(ExampleItem1, query);

// Execute Request (with SAP Cloud SDK for Javascript)
const result = await request.execute({ url: 'https://...' });
```

For more examples take a look at the tests.
