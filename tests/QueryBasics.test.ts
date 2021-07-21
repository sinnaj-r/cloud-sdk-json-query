/* eslint-disable max-lines */
import { expect } from 'chai';
import { createRequest } from '../src/createRequest';
import { ExampleItem1 } from './mocks/ExampleItem1/ExampleItem1';

import { getQueryForRequest } from './helper';

describe('JSON Query Basics', () => {
  it('can use select', () => {
    // TODO Fix Types
    const select = ['num1' as const, 'num2' as const];
    const result = '$select=num1,num2';

    expect(getQueryForRequest({ select })).to.include(result);
  });
  it('can use order by', () => {
    const orderBy: [['num1', 'desc'], 'num2'] = [['num1', 'desc'], 'num2'];
    const result = '$orderby=num1 desc,num2';

    expect(getQueryForRequest({ orderBy })).to.include(result);
  });
  it('can use skip & top', () => {
    const skip = 5;
    const top = 10;
    const result = '$top=10&$skip=5';

    expect(getQueryForRequest({ skip, top })).to.include(result);
  });
  it('can use key', () => {
    const result = "ExampleItem1(id='10')";
    expect(
      createRequest<ExampleItem1>(ExampleItem1, { key: '10' })
        .build()
        .relativeUrl(),
    ).to.include(result);
  });
  it('can use simple count', () => {
    const result = 'ExampleItem1/$count';
    expect(
      createRequest<ExampleItem1>(ExampleItem1, { count: true })
        .build()
        .relativeUrl(),
    ).to.include(result);
  });
  // TODOs
  it('can use search');
  it('can use count');
  it('can use key');
});
