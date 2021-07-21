/* eslint-disable max-lines */
import { expect } from 'chai';
import { createRequest } from '../src/createRequest';
import { QueryOptions } from '../src/types';

import { getQueryForRequest } from './helper';
import { GlAccountLineItem } from './mocks/GlAccountLineItem';

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
