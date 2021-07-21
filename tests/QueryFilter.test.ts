/* eslint-disable max-lines */
import { expect } from 'chai';
import { Filter } from '../src/types/FilterTypes';
import { ExampleItem1 } from './mocks/ExampleItem1/ExampleItem1';

import { getQueryForRequest } from './helper';

describe('JSON Query Filter', () => {
  it('can use simple eq filters', () => {
    const filter = { num1: 1 };
    const result = '$filter=(num1 eq 1)';

    expect(getQueryForRequest({ filter })).to.include(result);
  });
  it('can use simple eq filters on strings', () => {
    const filter = { description: 'test' };
    const result = "$filter=(description eq 'test')";

    expect(getQueryForRequest({ filter })).to.include(result);
  });
  it('can use simple gt filters', () => {
    const filter = { num1: { gt: 5 } };
    const result = '$filter=(num1 gt 5)';
    expect(getQueryForRequest({ filter })).to.include(result);
  });
  it('can use simple "in" filters', () => {
    const filter = { num1: { in: [1, 2, 3] } };
    const result = '$filter=(num1 in (1,2,3))';
    expect(() => getQueryForRequest({ filter })).to.throw(
      'In is not supported by the SDK',
    );
    // TODO Implement 'in'
    // .to.include(result);
  });
  it('can use simple implicit "and" for multiple props filters', () => {
    const filter: Filter<ExampleItem1> = [
      { num1: 1 },
      { num2: 2 },
      'startswith("description", "foo")',
    ];
    const result =
      "$filter=((num1 eq 1 and num2 eq 2 and startswith('description', 'foo')))";
    expect(getQueryForRequest({ filter })).to.include(result);
  });
  it('can use all string functions', () => {
    // TODO Why are there no quotes around the strings ?
    const filter: Filter<ExampleItem1> = [
      {
        'toupper("description")': 'FOO',
        'trim("description")': 'foo',
        'substring("descripion", 2)': 'foo',
        'concat("description","description")': 'foofoo',
      },
      'contains("description", "foo")',
      'endswith("description", "foo")',
      'startswith("description", "foo")',
    ];
    const result =
      "?$format=json&$filter=((toupper('description') eq FOO and trim('description') eq foo and substring('descripion', 2) eq foo and concat('description', 'description') eq foofoo and contains('description', 'foo') and endswith('description', 'foo') and startswith('description', 'foo')))";
    expect(getQueryForRequest({ filter })).to.include(result);
  });
  it('can use implict "and" filters for one prop', () => {
    const filter = [{ num1: { ge: 1, le: 5 } }];
    const result = '$filter=((num1 ge 1 and num1 le 5))';
    expect(getQueryForRequest({ filter })).to.include(result);
  });
  it('can use explicit "and" filters', () => {
    // TODO Fix this type!
    const filter = {
      and: [
        { num1: 1 },
        { num2: 2 },
        'startswith("description", "foo")' as const,
      ],
    };
    const result =
      "$filter=((num1 eq 1 and num2 eq 2 and startswith('description', 'foo')))";
    expect(getQueryForRequest({ filter })).to.include(result);
  });
  it('can use explicit "or" filters', () => {
    const filter = {
      or: [
        { num1: 1 },
        { num2: 2 },
        'startswith("description", "foo")' as const,
      ],
    };
    const result =
      "$filter=((num1 eq 1 or num2 eq 2 or startswith('description', 'foo')))";
    expect(getQueryForRequest({ filter })).to.include(result);
  });
  it('can use "not" filters', () => {
    const filter = {
      not: {
        num1: 1,
      },
    };
    const result = '$filter=((not (num1 eq 1)))';
    expect(getQueryForRequest({ filter })).to.include(result);
  });
  it('supports nested properties', () => {
    // TODO Add Nested Type to EDMX
    const filter = { SomeProp: { Value: 1 } } as any;
    const result = '$filter=(SomeProp/Value eq 1)';
    expect(getQueryForRequest({ filter })).to.include(result);
  });
  // TODO Test Collection Operators
  // TODO Test Types
});
