/* eslint-disable max-lines */
import { expect } from 'chai';
import { createRequest } from '../src/createRequest';
import { QueryOptions } from '../src/types';
import { Filter } from '../src/types/FilterTypes';
import { ExampleItem1 } from './ExampleItem1/ExampleItem1';
import { GlAccountLineItem } from './GlAccountLineItem';

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
  // TODO Test OR
  // TODO Test Collection Operators
  // TODO Test Types
});

describe('JSON Query Expand', () => {
  describe('expand', () => {
    it('should support basic expansion', () => {
      const expand: ['items'] = ['items'];
      const result = '$expand=items';
      expect(getQueryForRequest({ expand })).to.include(result);
    });

    it('should support multiple expands as an array', () => {
      const expand: ['items', 'items2'] = ['items', 'items2'];
      const result = '$expand=items,items2';
      expect(getQueryForRequest({ expand })).to.include(result);
    });
    it('should use correct field Names for non camel-case apis', () => {
      const query = {
        select: ['soldProduct', 'amountInCompanyCodeCurrency'],
      } as QueryOptions<GlAccountLineItem>;
      const queryStr = createRequest<GlAccountLineItem>(
        GlAccountLineItem,
        query,
      )
        .build()
        .query();

      expect(queryStr).to.include(
        '$select=SoldProduct,AmountInCompanyCodeCurrency',
      );
    });
    it('should use correct case for filters', () => {
      const query = {
        filter: [
          { glAccount: '0000800104' },
          { amountInCompanyCodeCurrency: { lt: 0 as any } },
        ],
      } as QueryOptions<GlAccountLineItem>;
      const queryStr = createRequest<GlAccountLineItem>(
        GlAccountLineItem,
        query,
      )
        .build()
        .query();

      expect(decodeURIComponent(queryStr)).to.include(
        "$filter=((GLAccount eq '0000800104' and AmountInCompanyCodeCurrency lt 0))",
      );
    });

    it('should allow nested expands with object', () => {
      // TODO Fix Type
      const expand = [{ items: { expand: ['parent'] } }];
      const result = '$expand=items($expand=parent)';
      expect(getQueryForRequest({ expand })).to.include(result);
    });

    // TODO Advanced Expands
    /*
    it('should allow multiple expands with objects', () => {
      const expand = { items: {}, items2: { orderBy: 'num1' } } as any;
      const result = '$expand=items,items2($orderby=num1)';
      expect(getQueryForRequest({ expand })).to.include(result);
    });

    it('should allow multiple nested expands with objects', () => {
      const expand = [
        { Friends: { expand: 'Photos' } },
        { One: { expand: 'Two' } },
      ] as any;
      const result = '$expand=Friends($expand=Photos),One($expand=Two)';
      expect(getQueryForRequest({ expand })).to.include(result);
    });

    it('should allow multiple expands mixing objects and strings', () => {
      const expand = [{ Friends: { expand: 'Photos' } }, 'Foo'] as any;
      const result = '$expand=Friends($expand=Photos),Foo)';
      expect(getQueryForRequest({ expand })).to.include(result);
    });

    it('should allow expand with select', () => {
      const expand = { Friends: { select: 'Name' } } as any;
      const result = '$expand=Friends($select=Name)';
      expect(getQueryForRequest({ expand })).to.include(result);
    });

    it('should allow expand with top', () => {
      const expand = { Friends: { top: 10 } } as any;
      const result = '$expand=Friends($top=10)';
      expect(getQueryForRequest({ expand })).to.include(result);
    });

    it('should allow expand with count', () => {
      const expand = { Friends: { count: true } } as any;
      const result = '$expand=Friends($count=true)';
      expect(getQueryForRequest({ expand })).to.include(result);
    });

    it('should allow expand with select and top', () => {
      const expand = { Friends: { select: 'Name', top: 10 } } as any;
      const result = '$expand=Friends($select=Name;$top=10)';
      expect(getQueryForRequest({ expand })).to.include(result);
    });

    it('should allow expand with select as array and top', () => {
      const expand = { Friends: { select: ['Name', 'Age'], top: 10 } } as any;
      const result = '$expand=Friends($select=Name,Age;$top=10)';
      expect(getQueryForRequest({ expand })).to.include(result);
    });

    it('should allow expand with filter', () => {
      const expand = { Trips: { filter: { Name: 'Trip in US' } } } as any;
      const result = "?$expand=Trips($filter=Name eq 'Trip in US')";
      expect(getQueryForRequest({ expand })).to.include(result);
    });

    it('should allow expand with orderby', () => {
      const expand = { Products: { orderBy: 'ReleaseDate asc' } } as any;
      const result = '$expand=Products($orderby=ReleaseDate asc)';
      expect(getQueryForRequest({ expand })).to.include(result);
    });
    */
  });
});

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
  // TODOs
  it('can use search');
  it('can use count');
});
