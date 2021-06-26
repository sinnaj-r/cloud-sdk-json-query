/* eslint-disable max-len */
/* eslint-disable max-lines */
/* eslint-disable import/export */
/* eslint-disable import/no-cycle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

import {
  AllFields,
  BooleanField,
  CustomFieldV4,
  DateField,
  EntityBuilderType,
  EntityV4,
  Field,
  RequestBuilder,
  StringField,
} from '@sap-cloud-sdk/core';

export interface GlAccountLineItemType {
  id: string;
  sourceLedger?: string;
  companyCode?: string;
  fiscalYear?: string;
  accountingDocument?: string;
  ledgerGlLineItem?: string;
  ledger?: string;
  ledgerFiscalYear?: string;
  glRecordType?: string;
  controllingArea?: string;
  chartOfAccounts?: string;
  glAccount?: string;
  financialTransactionType?: string;
  businessTransactionType?: string;
  controllingBusTransacType?: string;
  referenceDocumentType?: string;
  logicalSystem?: string;
  referenceDocumentContext?: string;
  referenceDocument?: string;
  referenceDocumentItem?: string;
  referenceDocumentItemGroup?: string;
  transactionSubitem?: string;
  isReversal?: boolean;
  isReversed?: boolean;
  reversalReferenceDocumentCntxt?: string;
  reversalReferenceDocument?: string;
  isSettlement?: boolean;
  isSettled?: boolean;
  predecessorReferenceDocType?: string;
  predecessorReferenceDocCntxt?: string;
  predecessorReferenceDocument?: string;
  predecessorReferenceDocItem?: string;
  prdcssrJournalEntryCompanyCode?: string;
  prdcssrJournalEntryFiscalYear?: string;
  predecessorJournalEntry?: string;
  predecessorJournalEntryItem?: string;
  sourceReferenceDocumentType?: string;
  sourceLogicalSystem?: string;
  sourceReferenceDocumentCntxt?: string;
  sourceReferenceDocument?: string;
  sourceReferenceDocumentItem?: string;
  sourceReferenceDocSubitem?: string;
  isCommitment?: boolean;
  jrnlEntryItemObsoleteReason?: string;
  jrnlPeriodEndClosingRunLogUuid?: string;
  costCenter?: string;
  profitCenter?: string;
  functionalArea?: string;
  businessArea?: string;
  segment?: string;
  partnerCostCenter?: string;
  partnerProfitCenter?: string;
  partnerFunctionalArea?: string;
  partnerBusinessArea?: string;
  partnerCompany?: string;
  partnerSegment?: string;
  balanceTransactionCurrency?: string;
  amountInBalanceTransacCrcy?: string;
  transactionCurrency?: string;
  amountInTransactionCurrency?: string;
  companyCodeCurrency?: string;
  amountInCompanyCodeCurrency?: string;
  globalCurrency?: string;
  amountInGlobalCurrency?: string;
  freeDefinedCurrency1?: string;
  amountInFreeDefinedCurrency1?: string;
  freeDefinedCurrency2?: string;
  amountInFreeDefinedCurrency2?: string;
  freeDefinedCurrency3?: string;
  amountInFreeDefinedCurrency3?: string;
  freeDefinedCurrency4?: string;
  amountInFreeDefinedCurrency4?: string;
  freeDefinedCurrency5?: string;
  amountInFreeDefinedCurrency5?: string;
  freeDefinedCurrency6?: string;
  amountInFreeDefinedCurrency6?: string;
  freeDefinedCurrency7?: string;
  amountInFreeDefinedCurrency7?: string;
  freeDefinedCurrency8?: string;
  amountInFreeDefinedCurrency8?: string;
  fixedAmountInGlobalCrcy?: string;
  grpValnFixedAmtInGlobCrcy?: string;
  prftCtrValnFxdAmtInGlobCrcy?: string;
  totalPriceVarcInGlobalCrcy?: string;
  grpValnTotPrcVarcInGlobCrcy?: string;
  prftCtrValnTotPrcVarcInGlbCrcy?: string;
  fixedPriceVarcInGlobalCrcy?: string;
  grpValnFixedPrcVarcInGlobCrcy?: string;
  prftCtrValnFxdPrcVarcInGlbCrcy?: string;
  fixedAmountInCoCodeCrcy?: string;
  controllingObjectCurrency?: string;
  amountInObjectCurrency?: string;
  baseUnit?: string;
  quantity?: string;
  fixedQuantity?: string;
  costSourceUnit?: string;
  valuationQuantity?: string;
  valuationFixedQuantity?: string;
  additionalQuantity1Unit?: string;
  additionalQuantity1?: string;
  additionalQuantity2Unit?: string;
  additionalQuantity2?: string;
  additionalQuantity3Unit?: string;
  additionalQuantity3?: string;
  debitCreditCode?: string;
  fiscalPeriod?: string;
  fiscalYearVariant?: string;
  fiscalYearPeriod?: string;
  postingDate?: string;
  documentDate?: string;
  accountingDocumentType?: string;
  accountingDocumentItem?: string;
  assignmentReference?: string;
  accountingDocumentCategory?: string;
  postingKey?: string;
  transactionTypeDetermination?: string;
  subLedgerAcctLineItemType?: string;
  accountingDocCreatedByUser?: string;
  lastChangeDateTime?: string;
  creationDateTime?: string;
  creationDate?: string;
  eliminationProfitCenter?: string;
  originObjectType?: string;
  glAccountType?: string;
  alternativeGlAccount?: string;
  countryChartOfAccounts?: string;
  itemIsSplit?: boolean;
  invoiceReference?: string;
  invoiceReferenceFiscalYear?: string;
  followOnDocumentType?: string;
  invoiceItemReference?: string;
  referencePurchaseOrderCategory?: string;
  purchasingDocument?: string;
  purchasingDocumentItem?: string;
  accountAssignmentNumber?: string;
  documentItemText?: string;
  salesDocument?: string;
  salesDocumentItem?: string;
  product?: string;
  plant?: string;
  supplier?: string;
  customer?: string;
  servicesRenderedDate?: string;
  conditionContract?: string;
  financialAccountType?: string;
  specialGlCode?: string;
  taxCode?: string;
  houseBank?: string;
  houseBankAccount?: string;
  isOpenItemManaged?: string;
  clearingDate?: string;
  clearingAccountingDocument?: string;
  clearingDocFiscalYear?: string;
  valueDate?: string;
  assetDepreciationArea?: string;
  masterFixedAsset?: string;
  fixedAsset?: string;
  assetValueDate?: string;
  assetTransactionType?: string;
  assetAcctTransClassfctn?: string;
  depreciationFiscalPeriod?: string;
  groupMasterFixedAsset?: string;
  groupFixedAsset?: string;
  assetClass?: string;
  costEstimate?: string;
  inventorySpecialStockValnType?: string;
  inventorySpecialStockType?: string;
  inventorySpclStkSalesDocument?: string;
  inventorySpclStkSalesDocItm?: string;
  invtrySpclStockWbsElmntIntId?: string;
  inventorySpecialStockSupplier?: string;
  inventoryValuationType?: string;
  valuationArea?: string;
  costOriginGroup?: string;
  originSenderObject?: string;
  controllingObjectDebitType?: string;
  quantityIsIncomplete?: string;
  offsettingAccount?: string;
  offsettingAccountType?: string;
  offsettingChartOfAccounts?: string;
  lineItemIsCompleted?: boolean;
  personnelNumber?: string;
  controllingObjectClass?: string;
  partnerCompanyCode?: string;
  partnerControllingObjectClass?: string;
  originCostCenter?: string;
  originProfitCenter?: string;
  originCostCtrActivityType?: string;
  accountAssignment?: string;
  accountAssignmentType?: string;
  costCtrActivityType?: string;
  orderId?: string;
  orderCategory?: string;
  wbsElementInternalId?: string;
  partnerWbsElementInternalId?: string;
  projectInternalId?: string;
  partnerProjectInternalId?: string;
  operatingConcern?: string;
  projectNetwork?: string;
  businessProcess?: string;
  costObject?: string;
  billableControl?: string;
  costAnalysisResource?: string;
  customerServiceNotification?: string;
  serviceDocumentType?: string;
  serviceDocument?: string;
  serviceDocumentItem?: string;
  partnerServiceDocumentType?: string;
  partnerServiceDocument?: string;
  partnerServiceDocumentItem?: string;
  serviceContractType?: string;
  serviceContract?: string;
  serviceContractItem?: string;
  timeSheetOvertimeCategory?: string;
  partnerAccountAssignment?: string;
  partnerAccountAssignmentType?: string;
  partnerCostCtrActivityType?: string;
  partnerOrder?: string;
  partnerOrderCategory?: string;
  partnerSalesDocument?: string;
  partnerSalesDocumentItem?: string;
  partnerProjectNetwork?: string;
  partnerBusinessProcess?: string;
  partnerCostObject?: string;
  controllingDocumentItem?: string;
  billingDocumentType?: string;
  salesOrganization?: string;
  distributionChannel?: string;
  organizationDivision?: string;
  soldProduct?: string;
  soldProductGroup?: string;
  customerGroup?: string;
  customerSupplierCountry?: string;
  customerSupplierIndustry?: string;
  salesDistrict?: string;
  billToParty?: string;
  shipToParty?: string;
  customerSupplierCorporateGroup?: string;
}

/**
 * This class represents the entity "GLAccountLineItem" of service "sap.odm".
 */
export class GlAccountLineItem
  extends EntityV4
  implements GlAccountLineItemType
{
  /**
   * Technical entity name for GlAccountLineItem.
   */
  static readonly _entityName = 'GLAccountLineItem';

  /**
   * Default url path for the according service.
   */
  static readonly _defaultServicePath = 'bp2020.s4.generalLedger';

  /**
   * Id.
   */
  id!: string;

  /**
   * Source Ledger.
   * Maximum length: 2.
   * @nullable
   */
  sourceLedger?: string;

  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  companyCode?: string;

  /**
   * Fiscal Year.
   * Maximum length: 4.
   * @nullable
   */
  fiscalYear?: string;

  /**
   * Accounting Document.
   * Maximum length: 10.
   * @nullable
   */
  accountingDocument?: string;

  /**
   * Ledger Gl Line Item.
   * Maximum length: 6.
   * @nullable
   */
  ledgerGlLineItem?: string;

  /**
   * Ledger.
   * Maximum length: 2.
   * @nullable
   */
  ledger?: string;

  /**
   * Ledger Fiscal Year.
   * Maximum length: 4.
   * @nullable
   */
  ledgerFiscalYear?: string;

  /**
   * Gl Record Type.
   * Maximum length: 1.
   * @nullable
   */
  glRecordType?: string;

  /**
   * Controlling Area.
   * Maximum length: 4.
   * @nullable
   */
  controllingArea?: string;

  /**
   * Chart Of Accounts.
   * Maximum length: 4.
   * @nullable
   */
  chartOfAccounts?: string;

  /**
   * Gl Account.
   * Maximum length: 10.
   * @nullable
   */
  glAccount?: string;

  /**
   * Financial Transaction Type.
   * Maximum length: 3.
   * @nullable
   */
  financialTransactionType?: string;

  /**
   * Business Transaction Type.
   * Maximum length: 4.
   * @nullable
   */
  businessTransactionType?: string;

  /**
   * Controlling Bus Transac Type.
   * Maximum length: 4.
   * @nullable
   */
  controllingBusTransacType?: string;

  /**
   * Reference Document Type.
   * Maximum length: 5.
   * @nullable
   */
  referenceDocumentType?: string;

  /**
   * Logical System.
   * Maximum length: 10.
   * @nullable
   */
  logicalSystem?: string;

  /**
   * Reference Document Context.
   * Maximum length: 10.
   * @nullable
   */
  referenceDocumentContext?: string;

  /**
   * Reference Document.
   * Maximum length: 10.
   * @nullable
   */
  referenceDocument?: string;

  /**
   * Reference Document Item.
   * Maximum length: 6.
   * @nullable
   */
  referenceDocumentItem?: string;

  /**
   * Reference Document Item Group.
   * Maximum length: 6.
   * @nullable
   */
  referenceDocumentItemGroup?: string;

  /**
   * Transaction Subitem.
   * Maximum length: 6.
   * @nullable
   */
  transactionSubitem?: string;

  /**
   * Is Reversal.
   * @nullable
   */
  isReversal?: boolean;

  /**
   * Is Reversed.
   * @nullable
   */
  isReversed?: boolean;

  /**
   * Reversal Reference Document Cntxt.
   * Maximum length: 10.
   * @nullable
   */
  reversalReferenceDocumentCntxt?: string;

  /**
   * Reversal Reference Document.
   * Maximum length: 10.
   * @nullable
   */
  reversalReferenceDocument?: string;

  /**
   * Is Settlement.
   * @nullable
   */
  isSettlement?: boolean;

  /**
   * Is Settled.
   * @nullable
   */
  isSettled?: boolean;

  /**
   * Predecessor Reference Doc Type.
   * Maximum length: 5.
   * @nullable
   */
  predecessorReferenceDocType?: string;

  /**
   * Predecessor Reference Doc Cntxt.
   * Maximum length: 10.
   * @nullable
   */
  predecessorReferenceDocCntxt?: string;

  /**
   * Predecessor Reference Document.
   * Maximum length: 10.
   * @nullable
   */
  predecessorReferenceDocument?: string;

  /**
   * Predecessor Reference Doc Item.
   * Maximum length: 6.
   * @nullable
   */
  predecessorReferenceDocItem?: string;

  /**
   * Prdcssr Journal Entry Company Code.
   * Maximum length: 4.
   * @nullable
   */
  prdcssrJournalEntryCompanyCode?: string;

  /**
   * Prdcssr Journal Entry Fiscal Year.
   * Maximum length: 4.
   * @nullable
   */
  prdcssrJournalEntryFiscalYear?: string;

  /**
   * Predecessor Journal Entry.
   * Maximum length: 10.
   * @nullable
   */
  predecessorJournalEntry?: string;

  /**
   * Predecessor Journal Entry Item.
   * Maximum length: 6.
   * @nullable
   */
  predecessorJournalEntryItem?: string;

  /**
   * Source Reference Document Type.
   * Maximum length: 5.
   * @nullable
   */
  sourceReferenceDocumentType?: string;

  /**
   * Source Logical System.
   * Maximum length: 10.
   * @nullable
   */
  sourceLogicalSystem?: string;

  /**
   * Source Reference Document Cntxt.
   * Maximum length: 10.
   * @nullable
   */
  sourceReferenceDocumentCntxt?: string;

  /**
   * Source Reference Document.
   * Maximum length: 10.
   * @nullable
   */
  sourceReferenceDocument?: string;

  /**
   * Source Reference Document Item.
   * Maximum length: 6.
   * @nullable
   */
  sourceReferenceDocumentItem?: string;

  /**
   * Source Reference Doc Subitem.
   * Maximum length: 6.
   * @nullable
   */
  sourceReferenceDocSubitem?: string;

  /**
   * Is Commitment.
   * @nullable
   */
  isCommitment?: boolean;

  /**
   * Jrnl Entry Item Obsolete Reason.
   * Maximum length: 1.
   * @nullable
   */
  jrnlEntryItemObsoleteReason?: string;

  /**
   * Jrnl Period End Closing Run Log Uuid.
   * @nullable
   */
  jrnlPeriodEndClosingRunLogUuid?: string;

  /**
   * Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  costCenter?: string;

  /**
   * Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  profitCenter?: string;

  /**
   * Functional Area.
   * Maximum length: 16.
   * @nullable
   */
  functionalArea?: string;

  /**
   * Business Area.
   * Maximum length: 4.
   * @nullable
   */
  businessArea?: string;

  /**
   * Segment.
   * Maximum length: 10.
   * @nullable
   */
  segment?: string;

  /**
   * Partner Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  partnerCostCenter?: string;

  /**
   * Partner Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  partnerProfitCenter?: string;

  /**
   * Partner Functional Area.
   * Maximum length: 16.
   * @nullable
   */
  partnerFunctionalArea?: string;

  /**
   * Partner Business Area.
   * Maximum length: 4.
   * @nullable
   */
  partnerBusinessArea?: string;

  /**
   * Partner Company.
   * Maximum length: 6.
   * @nullable
   */
  partnerCompany?: string;

  /**
   * Partner Segment.
   * Maximum length: 10.
   * @nullable
   */
  partnerSegment?: string;

  /**
   * Balance Transaction Currency.
   * Maximum length: 5.
   * @nullable
   */
  balanceTransactionCurrency?: string;

  /**
   * Amount In Balance Transac Crcy.
   * @nullable
   */
  amountInBalanceTransacCrcy?: string;

  /**
   * Transaction Currency.
   * Maximum length: 5.
   * @nullable
   */
  transactionCurrency?: string;

  /**
   * Amount In Transaction Currency.
   * @nullable
   */
  amountInTransactionCurrency?: string;

  /**
   * Company Code Currency.
   * Maximum length: 5.
   * @nullable
   */
  companyCodeCurrency?: string;

  /**
   * Amount In Company Code Currency.
   * @nullable
   */
  amountInCompanyCodeCurrency?: string;

  /**
   * Global Currency.
   * Maximum length: 5.
   * @nullable
   */
  globalCurrency?: string;

  /**
   * Amount In Global Currency.
   * @nullable
   */
  amountInGlobalCurrency?: string;

  /**
   * Free Defined Currency 1.
   * Maximum length: 5.
   * @nullable
   */
  freeDefinedCurrency1?: string;

  /**
   * Amount In Free Defined Currency 1.
   * @nullable
   */
  amountInFreeDefinedCurrency1?: string;

  /**
   * Free Defined Currency 2.
   * Maximum length: 5.
   * @nullable
   */
  freeDefinedCurrency2?: string;

  /**
   * Amount In Free Defined Currency 2.
   * @nullable
   */
  amountInFreeDefinedCurrency2?: string;

  /**
   * Free Defined Currency 3.
   * Maximum length: 5.
   * @nullable
   */
  freeDefinedCurrency3?: string;

  /**
   * Amount In Free Defined Currency 3.
   * @nullable
   */
  amountInFreeDefinedCurrency3?: string;

  /**
   * Free Defined Currency 4.
   * Maximum length: 5.
   * @nullable
   */
  freeDefinedCurrency4?: string;

  /**
   * Amount In Free Defined Currency 4.
   * @nullable
   */
  amountInFreeDefinedCurrency4?: string;

  /**
   * Free Defined Currency 5.
   * Maximum length: 5.
   * @nullable
   */
  freeDefinedCurrency5?: string;

  /**
   * Amount In Free Defined Currency 5.
   * @nullable
   */
  amountInFreeDefinedCurrency5?: string;

  /**
   * Free Defined Currency 6.
   * Maximum length: 5.
   * @nullable
   */
  freeDefinedCurrency6?: string;

  /**
   * Amount In Free Defined Currency 6.
   * @nullable
   */
  amountInFreeDefinedCurrency6?: string;

  /**
   * Free Defined Currency 7.
   * Maximum length: 5.
   * @nullable
   */
  freeDefinedCurrency7?: string;

  /**
   * Amount In Free Defined Currency 7.
   * @nullable
   */
  amountInFreeDefinedCurrency7?: string;

  /**
   * Free Defined Currency 8.
   * Maximum length: 5.
   * @nullable
   */
  freeDefinedCurrency8?: string;

  /**
   * Amount In Free Defined Currency 8.
   * @nullable
   */
  amountInFreeDefinedCurrency8?: string;

  /**
   * Fixed Amount In Global Crcy.
   * @nullable
   */
  fixedAmountInGlobalCrcy?: string;

  /**
   * Grp Valn Fixed Amt In Glob Crcy.
   * @nullable
   */
  grpValnFixedAmtInGlobCrcy?: string;

  /**
   * Prft Ctr Valn Fxd Amt In Glob Crcy.
   * @nullable
   */
  prftCtrValnFxdAmtInGlobCrcy?: string;

  /**
   * Total Price Varc In Global Crcy.
   * @nullable
   */
  totalPriceVarcInGlobalCrcy?: string;

  /**
   * Grp Valn Tot Prc Varc In Glob Crcy.
   * @nullable
   */
  grpValnTotPrcVarcInGlobCrcy?: string;

  /**
   * Prft Ctr Valn Tot Prc Varc In Glb Crcy.
   * @nullable
   */
  prftCtrValnTotPrcVarcInGlbCrcy?: string;

  /**
   * Fixed Price Varc In Global Crcy.
   * @nullable
   */
  fixedPriceVarcInGlobalCrcy?: string;

  /**
   * Grp Valn Fixed Prc Varc In Glob Crcy.
   * @nullable
   */
  grpValnFixedPrcVarcInGlobCrcy?: string;

  /**
   * Prft Ctr Valn Fxd Prc Varc In Glb Crcy.
   * @nullable
   */
  prftCtrValnFxdPrcVarcInGlbCrcy?: string;

  /**
   * Fixed Amount In Co Code Crcy.
   * @nullable
   */
  fixedAmountInCoCodeCrcy?: string;

  /**
   * Controlling Object Currency.
   * Maximum length: 5.
   * @nullable
   */
  controllingObjectCurrency?: string;

  /**
   * Amount In Object Currency.
   * @nullable
   */
  amountInObjectCurrency?: string;

  /**
   * Base Unit.
   * Maximum length: 3.
   * @nullable
   */
  baseUnit?: string;

  /**
   * Quantity.
   * @nullable
   */
  quantity?: string;

  /**
   * Fixed Quantity.
   * @nullable
   */
  fixedQuantity?: string;

  /**
   * Cost Source Unit.
   * Maximum length: 3.
   * @nullable
   */
  costSourceUnit?: string;

  /**
   * Valuation Quantity.
   * @nullable
   */
  valuationQuantity?: string;

  /**
   * Valuation Fixed Quantity.
   * @nullable
   */
  valuationFixedQuantity?: string;

  /**
   * Additional Quantity 1 Unit.
   * Maximum length: 3.
   * @nullable
   */
  additionalQuantity1Unit?: string;

  /**
   * Additional Quantity 1.
   * @nullable
   */
  additionalQuantity1?: string;

  /**
   * Additional Quantity 2 Unit.
   * Maximum length: 3.
   * @nullable
   */
  additionalQuantity2Unit?: string;

  /**
   * Additional Quantity 2.
   * @nullable
   */
  additionalQuantity2?: string;

  /**
   * Additional Quantity 3 Unit.
   * Maximum length: 3.
   * @nullable
   */
  additionalQuantity3Unit?: string;

  /**
   * Additional Quantity 3.
   * @nullable
   */
  additionalQuantity3?: string;

  /**
   * Debit Credit Code.
   * Maximum length: 1.
   * @nullable
   */
  debitCreditCode?: string;

  /**
   * Fiscal Period.
   * Maximum length: 3.
   * @nullable
   */
  fiscalPeriod?: string;

  /**
   * Fiscal Year Variant.
   * Maximum length: 2.
   * @nullable
   */
  fiscalYearVariant?: string;

  /**
   * Fiscal Year Period.
   * Maximum length: 7.
   * @nullable
   */
  fiscalYearPeriod?: string;

  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: string;

  /**
   * Document Date.
   * @nullable
   */
  documentDate?: string;

  /**
   * Accounting Document Type.
   * Maximum length: 2.
   * @nullable
   */
  accountingDocumentType?: string;

  /**
   * Accounting Document Item.
   * Maximum length: 3.
   * @nullable
   */
  accountingDocumentItem?: string;

  /**
   * Assignment Reference.
   * Maximum length: 18.
   * @nullable
   */
  assignmentReference?: string;

  /**
   * Accounting Document Category.
   * Maximum length: 1.
   * @nullable
   */
  accountingDocumentCategory?: string;

  /**
   * Posting Key.
   * Maximum length: 2.
   * @nullable
   */
  postingKey?: string;

  /**
   * Transaction Type Determination.
   * Maximum length: 3.
   * @nullable
   */
  transactionTypeDetermination?: string;

  /**
   * Sub Ledger Acct Line Item Type.
   * Maximum length: 5.
   * @nullable
   */
  subLedgerAcctLineItemType?: string;

  /**
   * Accounting Doc Created By User.
   * Maximum length: 12.
   * @nullable
   */
  accountingDocCreatedByUser?: string;

  /**
   * Last Change Date Time.
   * @nullable
   */
  lastChangeDateTime?: string;

  /**
   * Creation Date Time.
   * @nullable
   */
  creationDateTime?: string;

  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: string;

  /**
   * Elimination Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  eliminationProfitCenter?: string;

  /**
   * Origin Object Type.
   * Maximum length: 2.
   * @nullable
   */
  originObjectType?: string;

  /**
   * Gl Account Type.
   * Maximum length: 1.
   * @nullable
   */
  glAccountType?: string;

  /**
   * Alternative Gl Account.
   * Maximum length: 10.
   * @nullable
   */
  alternativeGlAccount?: string;

  /**
   * Country Chart Of Accounts.
   * Maximum length: 4.
   * @nullable
   */
  countryChartOfAccounts?: string;

  /**
   * Item Is Split.
   * @nullable
   */
  itemIsSplit?: boolean;

  /**
   * Invoice Reference.
   * Maximum length: 10.
   * @nullable
   */
  invoiceReference?: string;

  /**
   * Invoice Reference Fiscal Year.
   * Maximum length: 4.
   * @nullable
   */
  invoiceReferenceFiscalYear?: string;

  /**
   * Follow On Document Type.
   * Maximum length: 1.
   * @nullable
   */
  followOnDocumentType?: string;

  /**
   * Invoice Item Reference.
   * Maximum length: 3.
   * @nullable
   */
  invoiceItemReference?: string;

  /**
   * Reference Purchase Order Category.
   * Maximum length: 3.
   * @nullable
   */
  referencePurchaseOrderCategory?: string;

  /**
   * Purchasing Document.
   * Maximum length: 10.
   * @nullable
   */
  purchasingDocument?: string;

  /**
   * Purchasing Document Item.
   * Maximum length: 5.
   * @nullable
   */
  purchasingDocumentItem?: string;

  /**
   * Account Assignment Number.
   * Maximum length: 2.
   * @nullable
   */
  accountAssignmentNumber?: string;

  /**
   * Document Item Text.
   * Maximum length: 50.
   * @nullable
   */
  documentItemText?: string;

  /**
   * Sales Document.
   * Maximum length: 10.
   * @nullable
   */
  salesDocument?: string;

  /**
   * Sales Document Item.
   * Maximum length: 6.
   * @nullable
   */
  salesDocumentItem?: string;

  /**
   * Product.
   * Maximum length: 18.
   * @nullable
   */
  product?: string;

  /**
   * Plant.
   * Maximum length: 4.
   * @nullable
   */
  plant?: string;

  /**
   * Supplier.
   * Maximum length: 10.
   * @nullable
   */
  supplier?: string;

  /**
   * Customer.
   * Maximum length: 10.
   * @nullable
   */
  customer?: string;

  /**
   * Services Rendered Date.
   * @nullable
   */
  servicesRenderedDate?: string;

  /**
   * Condition Contract.
   * Maximum length: 10.
   * @nullable
   */
  conditionContract?: string;

  /**
   * Financial Account Type.
   * Maximum length: 1.
   * @nullable
   */
  financialAccountType?: string;

  /**
   * Special Gl Code.
   * Maximum length: 1.
   * @nullable
   */
  specialGlCode?: string;

  /**
   * Tax Code.
   * Maximum length: 2.
   * @nullable
   */
  taxCode?: string;

  /**
   * House Bank.
   * Maximum length: 5.
   * @nullable
   */
  houseBank?: string;

  /**
   * House Bank Account.
   * Maximum length: 5.
   * @nullable
   */
  houseBankAccount?: string;

  /**
   * Is Open Item Managed.
   * Maximum length: 1.
   * @nullable
   */
  isOpenItemManaged?: string;

  /**
   * Clearing Date.
   * @nullable
   */
  clearingDate?: string;

  /**
   * Clearing Accounting Document.
   * Maximum length: 10.
   * @nullable
   */
  clearingAccountingDocument?: string;

  /**
   * Clearing Doc Fiscal Year.
   * Maximum length: 4.
   * @nullable
   */
  clearingDocFiscalYear?: string;

  /**
   * Value Date.
   * @nullable
   */
  valueDate?: string;

  /**
   * Asset Depreciation Area.
   * Maximum length: 2.
   * @nullable
   */
  assetDepreciationArea?: string;

  /**
   * Master Fixed Asset.
   * Maximum length: 12.
   * @nullable
   */
  masterFixedAsset?: string;

  /**
   * Fixed Asset.
   * Maximum length: 4.
   * @nullable
   */
  fixedAsset?: string;

  /**
   * Asset Value Date.
   * @nullable
   */
  assetValueDate?: string;

  /**
   * Asset Transaction Type.
   * Maximum length: 3.
   * @nullable
   */
  assetTransactionType?: string;

  /**
   * Asset Acct Trans Classfctn.
   * Maximum length: 2.
   * @nullable
   */
  assetAcctTransClassfctn?: string;

  /**
   * Depreciation Fiscal Period.
   * Maximum length: 3.
   * @nullable
   */
  depreciationFiscalPeriod?: string;

  /**
   * Group Master Fixed Asset.
   * Maximum length: 12.
   * @nullable
   */
  groupMasterFixedAsset?: string;

  /**
   * Group Fixed Asset.
   * Maximum length: 4.
   * @nullable
   */
  groupFixedAsset?: string;

  /**
   * Asset Class.
   * Maximum length: 8.
   * @nullable
   */
  assetClass?: string;

  /**
   * Cost Estimate.
   * Maximum length: 12.
   * @nullable
   */
  costEstimate?: string;

  /**
   * Inventory Special Stock Valn Type.
   * Maximum length: 1.
   * @nullable
   */
  inventorySpecialStockValnType?: string;

  /**
   * Inventory Special Stock Type.
   * Maximum length: 1.
   * @nullable
   */
  inventorySpecialStockType?: string;

  /**
   * Inventory Spcl Stk Sales Document.
   * Maximum length: 10.
   * @nullable
   */
  inventorySpclStkSalesDocument?: string;

  /**
   * Inventory Spcl Stk Sales Doc Itm.
   * Maximum length: 6.
   * @nullable
   */
  inventorySpclStkSalesDocItm?: string;

  /**
   * Invtry Spcl Stock Wbs Elmnt Int Id.
   * Maximum length: 8.
   * @nullable
   */
  invtrySpclStockWbsElmntIntId?: string;

  /**
   * Inventory Special Stock Supplier.
   * Maximum length: 10.
   * @nullable
   */
  inventorySpecialStockSupplier?: string;

  /**
   * Inventory Valuation Type.
   * Maximum length: 10.
   * @nullable
   */
  inventoryValuationType?: string;

  /**
   * Valuation Area.
   * Maximum length: 4.
   * @nullable
   */
  valuationArea?: string;

  /**
   * Cost Origin Group.
   * Maximum length: 4.
   * @nullable
   */
  costOriginGroup?: string;

  /**
   * Origin Sender Object.
   * Maximum length: 22.
   * @nullable
   */
  originSenderObject?: string;

  /**
   * Controlling Object Debit Type.
   * Maximum length: 1.
   * @nullable
   */
  controllingObjectDebitType?: string;

  /**
   * Quantity Is Incomplete.
   * Maximum length: 1.
   * @nullable
   */
  quantityIsIncomplete?: string;

  /**
   * Offsetting Account.
   * Maximum length: 10.
   * @nullable
   */
  offsettingAccount?: string;

  /**
   * Offsetting Account Type.
   * Maximum length: 1.
   * @nullable
   */
  offsettingAccountType?: string;

  /**
   * Offsetting Chart Of Accounts.
   * Maximum length: 4.
   * @nullable
   */
  offsettingChartOfAccounts?: string;

  /**
   * Line Item Is Completed.
   * @nullable
   */
  lineItemIsCompleted?: boolean;

  /**
   * Personnel Number.
   * Maximum length: 8.
   * @nullable
   */
  personnelNumber?: string;

  /**
   * Controlling Object Class.
   * Maximum length: 2.
   * @nullable
   */
  controllingObjectClass?: string;

  /**
   * Partner Company Code.
   * Maximum length: 4.
   * @nullable
   */
  partnerCompanyCode?: string;

  /**
   * Partner Controlling Object Class.
   * Maximum length: 2.
   * @nullable
   */
  partnerControllingObjectClass?: string;

  /**
   * Origin Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  originCostCenter?: string;

  /**
   * Origin Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  originProfitCenter?: string;

  /**
   * Origin Cost Ctr Activity Type.
   * Maximum length: 6.
   * @nullable
   */
  originCostCtrActivityType?: string;

  /**
   * Account Assignment.
   * Maximum length: 30.
   * @nullable
   */
  accountAssignment?: string;

  /**
   * Account Assignment Type.
   * Maximum length: 2.
   * @nullable
   */
  accountAssignmentType?: string;

  /**
   * Cost Ctr Activity Type.
   * Maximum length: 6.
   * @nullable
   */
  costCtrActivityType?: string;

  /**
   * Order Id.
   * Maximum length: 12.
   * @nullable
   */
  orderId?: string;

  /**
   * Order Category.
   * Maximum length: 2.
   * @nullable
   */
  orderCategory?: string;

  /**
   * Wbs Element Internal Id.
   * Maximum length: 8.
   * @nullable
   */
  wbsElementInternalId?: string;

  /**
   * Partner Wbs Element Internal Id.
   * Maximum length: 8.
   * @nullable
   */
  partnerWbsElementInternalId?: string;

  /**
   * Project Internal Id.
   * Maximum length: 8.
   * @nullable
   */
  projectInternalId?: string;

  /**
   * Partner Project Internal Id.
   * Maximum length: 8.
   * @nullable
   */
  partnerProjectInternalId?: string;

  /**
   * Operating Concern.
   * Maximum length: 4.
   * @nullable
   */
  operatingConcern?: string;

  /**
   * Project Network.
   * Maximum length: 12.
   * @nullable
   */
  projectNetwork?: string;

  /**
   * Business Process.
   * Maximum length: 12.
   * @nullable
   */
  businessProcess?: string;

  /**
   * Cost Object.
   * Maximum length: 12.
   * @nullable
   */
  costObject?: string;

  /**
   * Billable Control.
   * Maximum length: 2.
   * @nullable
   */
  billableControl?: string;

  /**
   * Cost Analysis Resource.
   * Maximum length: 10.
   * @nullable
   */
  costAnalysisResource?: string;

  /**
   * Customer Service Notification.
   * Maximum length: 12.
   * @nullable
   */
  customerServiceNotification?: string;

  /**
   * Service Document Type.
   * Maximum length: 4.
   * @nullable
   */
  serviceDocumentType?: string;

  /**
   * Service Document.
   * Maximum length: 10.
   * @nullable
   */
  serviceDocument?: string;

  /**
   * Service Document Item.
   * Maximum length: 6.
   * @nullable
   */
  serviceDocumentItem?: string;

  /**
   * Partner Service Document Type.
   * Maximum length: 4.
   * @nullable
   */
  partnerServiceDocumentType?: string;

  /**
   * Partner Service Document.
   * Maximum length: 10.
   * @nullable
   */
  partnerServiceDocument?: string;

  /**
   * Partner Service Document Item.
   * Maximum length: 6.
   * @nullable
   */
  partnerServiceDocumentItem?: string;

  /**
   * Service Contract Type.
   * Maximum length: 4.
   * @nullable
   */
  serviceContractType?: string;

  /**
   * Service Contract.
   * Maximum length: 10.
   * @nullable
   */
  serviceContract?: string;

  /**
   * Service Contract Item.
   * Maximum length: 6.
   * @nullable
   */
  serviceContractItem?: string;

  /**
   * Time Sheet Overtime Category.
   * Maximum length: 4.
   * @nullable
   */
  timeSheetOvertimeCategory?: string;

  /**
   * Partner Account Assignment.
   * Maximum length: 30.
   * @nullable
   */
  partnerAccountAssignment?: string;

  /**
   * Partner Account Assignment Type.
   * Maximum length: 2.
   * @nullable
   */
  partnerAccountAssignmentType?: string;

  /**
   * Partner Cost Ctr Activity Type.
   * Maximum length: 6.
   * @nullable
   */
  partnerCostCtrActivityType?: string;

  /**
   * Partner Order.
   * Maximum length: 12.
   * @nullable
   */
  partnerOrder?: string;

  /**
   * Partner Order Category.
   * Maximum length: 2.
   * @nullable
   */
  partnerOrderCategory?: string;

  /**
   * Partner Sales Document.
   * Maximum length: 10.
   * @nullable
   */
  partnerSalesDocument?: string;

  /**
   * Partner Sales Document Item.
   * Maximum length: 6.
   * @nullable
   */
  partnerSalesDocumentItem?: string;

  /**
   * Partner Project Network.
   * Maximum length: 12.
   * @nullable
   */
  partnerProjectNetwork?: string;

  /**
   * Partner Business Process.
   * Maximum length: 12.
   * @nullable
   */
  partnerBusinessProcess?: string;

  /**
   * Partner Cost Object.
   * Maximum length: 12.
   * @nullable
   */
  partnerCostObject?: string;

  /**
   * Controlling Document Item.
   * Maximum length: 3.
   * @nullable
   */
  controllingDocumentItem?: string;

  /**
   * Billing Document Type.
   * Maximum length: 4.
   * @nullable
   */
  billingDocumentType?: string;

  /**
   * Sales Organization.
   * Maximum length: 4.
   * @nullable
   */
  salesOrganization?: string;

  /**
   * Distribution Channel.
   * Maximum length: 2.
   * @nullable
   */
  distributionChannel?: string;

  /**
   * Organization Division.
   * Maximum length: 2.
   * @nullable
   */
  organizationDivision?: string;

  /**
   * Sold Product.
   * Maximum length: 18.
   * @nullable
   */
  soldProduct?: string;

  /**
   * Sold Product Group.
   * Maximum length: 9.
   * @nullable
   */
  soldProductGroup?: string;

  /**
   * Customer Group.
   * Maximum length: 2.
   * @nullable
   */
  customerGroup?: string;

  /**
   * Customer Supplier Country.
   * Maximum length: 3.
   * @nullable
   */
  customerSupplierCountry?: string;

  /**
   * Customer Supplier Industry.
   * Maximum length: 4.
   * @nullable
   */
  customerSupplierIndustry?: string;

  /**
   * Sales District.
   * Maximum length: 6.
   * @nullable
   */
  salesDistrict?: string;

  /**
   * Bill To Party.
   * Maximum length: 10.
   * @nullable
   */
  billToParty?: string;

  /**
   * Ship To Party.
   * Maximum length: 10.
   * @nullable
   */
  shipToParty?: string;

  /**
   * Customer Supplier Corporate Group.
   * Maximum length: 10.
   * @nullable
   */
  customerSupplierCorporateGroup?: string;

  /**
   * Returns an entity builder to construct instances of `GlAccountLineItem`.
   * @returns A builder that constructs instances of entity type `GlAccountLineItem`.
   */
  static builder(): EntityBuilderType<
    GlAccountLineItem,
    GlAccountLineItemType
  > {
    return EntityV4.entityBuilder(GlAccountLineItem);
  }

  static requestBuilder(): RequestBuilder<GlAccountLineItem> {
    throw new Error('RequestBuilder was not generated!');
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `GlAccountLineItem`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `GlAccountLineItem`.
   */
  static customField(fieldName: string): CustomFieldV4<GlAccountLineItem> {
    return EntityV4.customFieldSelector(fieldName, GlAccountLineItem);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export namespace GlAccountLineItem {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<GlAccountLineItem> = new StringField(
    'ID',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[sourceLedger]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_LEDGER: StringField<GlAccountLineItem> = new StringField(
    'SourceLedger',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[companyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE: StringField<GlAccountLineItem> = new StringField(
    'CompanyCode',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[fiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_YEAR: StringField<GlAccountLineItem> = new StringField(
    'FiscalYear',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[accountingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_DOCUMENT: StringField<GlAccountLineItem> =
    new StringField('AccountingDocument', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[ledgerGlLineItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEDGER_GL_LINE_ITEM: StringField<GlAccountLineItem> =
    new StringField('LedgerGLLineItem', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[ledger]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEDGER: StringField<GlAccountLineItem> = new StringField(
    'Ledger',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[ledgerFiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEDGER_FISCAL_YEAR: StringField<GlAccountLineItem> =
    new StringField('LedgerFiscalYear', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[glRecordType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_RECORD_TYPE: StringField<GlAccountLineItem> = new StringField(
    'GLRecordType',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[controllingArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROLLING_AREA: StringField<GlAccountLineItem> =
    new StringField('ControllingArea', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[chartOfAccounts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNTS: StringField<GlAccountLineItem> =
    new StringField('ChartOfAccounts', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[glAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_ACCOUNT: StringField<GlAccountLineItem> = new StringField(
    'GLAccount',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[financialTransactionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_TRANSACTION_TYPE: StringField<GlAccountLineItem> =
    new StringField(
      'FinancialTransactionType',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[businessTransactionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_TRANSACTION_TYPE: StringField<GlAccountLineItem> =
    new StringField('BusinessTransactionType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[controllingBusTransacType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROLLING_BUS_TRANSAC_TYPE: StringField<GlAccountLineItem> =
    new StringField(
      'ControllingBusTransacType',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[referenceDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_DOCUMENT_TYPE: StringField<GlAccountLineItem> =
    new StringField('ReferenceDocumentType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[logicalSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOGICAL_SYSTEM: StringField<GlAccountLineItem> = new StringField(
    'LogicalSystem',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[referenceDocumentContext]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_DOCUMENT_CONTEXT: StringField<GlAccountLineItem> =
    new StringField(
      'ReferenceDocumentContext',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[referenceDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_DOCUMENT: StringField<GlAccountLineItem> =
    new StringField('ReferenceDocument', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[referenceDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_DOCUMENT_ITEM: StringField<GlAccountLineItem> =
    new StringField('ReferenceDocumentItem', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[referenceDocumentItemGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_DOCUMENT_ITEM_GROUP: StringField<GlAccountLineItem> =
    new StringField(
      'ReferenceDocumentItemGroup',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[transactionSubitem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_SUBITEM: StringField<GlAccountLineItem> =
    new StringField('TransactionSubitem', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[isReversal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_REVERSAL: BooleanField<GlAccountLineItem> = new BooleanField(
    'IsReversal',
    GlAccountLineItem,
    'Edm.Boolean',
  );
  /**
   * Static representation of the [[isReversed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_REVERSED: BooleanField<GlAccountLineItem> = new BooleanField(
    'IsReversed',
    GlAccountLineItem,
    'Edm.Boolean',
  );
  /**
   * Static representation of the [[reversalReferenceDocumentCntxt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVERSAL_REFERENCE_DOCUMENT_CNTXT: StringField<GlAccountLineItem> =
    new StringField(
      'ReversalReferenceDocumentCntxt',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[reversalReferenceDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVERSAL_REFERENCE_DOCUMENT: StringField<GlAccountLineItem> =
    new StringField(
      'ReversalReferenceDocument',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[isSettlement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SETTLEMENT: BooleanField<GlAccountLineItem> =
    new BooleanField('IsSettlement', GlAccountLineItem, 'Edm.Boolean');
  /**
   * Static representation of the [[isSettled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SETTLED: BooleanField<GlAccountLineItem> = new BooleanField(
    'IsSettled',
    GlAccountLineItem,
    'Edm.Boolean',
  );
  /**
   * Static representation of the [[predecessorReferenceDocType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREDECESSOR_REFERENCE_DOC_TYPE: StringField<GlAccountLineItem> =
    new StringField(
      'PredecessorReferenceDocType',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[predecessorReferenceDocCntxt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREDECESSOR_REFERENCE_DOC_CNTXT: StringField<GlAccountLineItem> =
    new StringField(
      'PredecessorReferenceDocCntxt',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[predecessorReferenceDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREDECESSOR_REFERENCE_DOCUMENT: StringField<GlAccountLineItem> =
    new StringField(
      'PredecessorReferenceDocument',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[predecessorReferenceDocItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREDECESSOR_REFERENCE_DOC_ITEM: StringField<GlAccountLineItem> =
    new StringField(
      'PredecessorReferenceDocItem',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[prdcssrJournalEntryCompanyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRDCSSR_JOURNAL_ENTRY_COMPANY_CODE: StringField<GlAccountLineItem> =
    new StringField(
      'PrdcssrJournalEntryCompanyCode',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[prdcssrJournalEntryFiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRDCSSR_JOURNAL_ENTRY_FISCAL_YEAR: StringField<GlAccountLineItem> =
    new StringField(
      'PrdcssrJournalEntryFiscalYear',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[predecessorJournalEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREDECESSOR_JOURNAL_ENTRY: StringField<GlAccountLineItem> =
    new StringField('PredecessorJournalEntry', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[predecessorJournalEntryItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREDECESSOR_JOURNAL_ENTRY_ITEM: StringField<GlAccountLineItem> =
    new StringField(
      'PredecessorJournalEntryItem',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[sourceReferenceDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_REFERENCE_DOCUMENT_TYPE: StringField<GlAccountLineItem> =
    new StringField(
      'SourceReferenceDocumentType',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[sourceLogicalSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_LOGICAL_SYSTEM: StringField<GlAccountLineItem> =
    new StringField('SourceLogicalSystem', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[sourceReferenceDocumentCntxt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_REFERENCE_DOCUMENT_CNTXT: StringField<GlAccountLineItem> =
    new StringField(
      'SourceReferenceDocumentCntxt',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[sourceReferenceDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_REFERENCE_DOCUMENT: StringField<GlAccountLineItem> =
    new StringField('SourceReferenceDocument', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[sourceReferenceDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_REFERENCE_DOCUMENT_ITEM: StringField<GlAccountLineItem> =
    new StringField(
      'SourceReferenceDocumentItem',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[sourceReferenceDocSubitem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_REFERENCE_DOC_SUBITEM: StringField<GlAccountLineItem> =
    new StringField(
      'SourceReferenceDocSubitem',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[isCommitment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_COMMITMENT: BooleanField<GlAccountLineItem> =
    new BooleanField('IsCommitment', GlAccountLineItem, 'Edm.Boolean');
  /**
   * Static representation of the [[jrnlEntryItemObsoleteReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JRNL_ENTRY_ITEM_OBSOLETE_REASON: StringField<GlAccountLineItem> =
    new StringField(
      'JrnlEntryItemObsoleteReason',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[jrnlPeriodEndClosingRunLogUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JRNL_PERIOD_END_CLOSING_RUN_LOG_UUID: StringField<GlAccountLineItem> =
    new StringField(
      'JrnlPeriodEndClosingRunLogUUID',
      GlAccountLineItem,
      'Edm.Guid',
    );
  /**
   * Static representation of the [[costCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER: StringField<GlAccountLineItem> = new StringField(
    'CostCenter',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[profitCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROFIT_CENTER: StringField<GlAccountLineItem> = new StringField(
    'ProfitCenter',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[functionalArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUNCTIONAL_AREA: StringField<GlAccountLineItem> =
    new StringField('FunctionalArea', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[businessArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_AREA: StringField<GlAccountLineItem> = new StringField(
    'BusinessArea',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[segment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENT: StringField<GlAccountLineItem> = new StringField(
    'Segment',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[partnerCostCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_COST_CENTER: StringField<GlAccountLineItem> =
    new StringField('PartnerCostCenter', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerProfitCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_PROFIT_CENTER: StringField<GlAccountLineItem> =
    new StringField('PartnerProfitCenter', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerFunctionalArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_FUNCTIONAL_AREA: StringField<GlAccountLineItem> =
    new StringField('PartnerFunctionalArea', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerBusinessArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_BUSINESS_AREA: StringField<GlAccountLineItem> =
    new StringField('PartnerBusinessArea', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerCompany]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_COMPANY: StringField<GlAccountLineItem> =
    new StringField('PartnerCompany', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerSegment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_SEGMENT: StringField<GlAccountLineItem> =
    new StringField('PartnerSegment', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[balanceTransactionCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BALANCE_TRANSACTION_CURRENCY: StringField<GlAccountLineItem> =
    new StringField(
      'BalanceTransactionCurrency',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[amountInBalanceTransacCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_IN_BALANCE_TRANSAC_CRCY: StringField<GlAccountLineItem> =
    new StringField(
      'AmountInBalanceTransacCrcy',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[transactionCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CURRENCY: StringField<GlAccountLineItem> =
    new StringField('TransactionCurrency', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[amountInTransactionCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_IN_TRANSACTION_CURRENCY: StringField<GlAccountLineItem> =
    new StringField(
      'AmountInTransactionCurrency',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[companyCodeCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE_CURRENCY: StringField<GlAccountLineItem> =
    new StringField('CompanyCodeCurrency', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[amountInCompanyCodeCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_IN_COMPANY_CODE_CURRENCY: StringField<GlAccountLineItem> =
    new StringField(
      'AmountInCompanyCodeCurrency',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[globalCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GLOBAL_CURRENCY: StringField<GlAccountLineItem> =
    new StringField('GlobalCurrency', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[amountInGlobalCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_IN_GLOBAL_CURRENCY: StringField<GlAccountLineItem> =
    new StringField('AmountInGlobalCurrency', GlAccountLineItem, 'Edm.Decimal');
  /**
   * Static representation of the [[freeDefinedCurrency1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREE_DEFINED_CURRENCY_1: StringField<GlAccountLineItem> =
    new StringField('FreeDefinedCurrency1', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[amountInFreeDefinedCurrency1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_IN_FREE_DEFINED_CURRENCY_1: StringField<GlAccountLineItem> =
    new StringField(
      'AmountInFreeDefinedCurrency1',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[freeDefinedCurrency2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREE_DEFINED_CURRENCY_2: StringField<GlAccountLineItem> =
    new StringField('FreeDefinedCurrency2', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[amountInFreeDefinedCurrency2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_IN_FREE_DEFINED_CURRENCY_2: StringField<GlAccountLineItem> =
    new StringField(
      'AmountInFreeDefinedCurrency2',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[freeDefinedCurrency3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREE_DEFINED_CURRENCY_3: StringField<GlAccountLineItem> =
    new StringField('FreeDefinedCurrency3', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[amountInFreeDefinedCurrency3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_IN_FREE_DEFINED_CURRENCY_3: StringField<GlAccountLineItem> =
    new StringField(
      'AmountInFreeDefinedCurrency3',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[freeDefinedCurrency4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREE_DEFINED_CURRENCY_4: StringField<GlAccountLineItem> =
    new StringField('FreeDefinedCurrency4', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[amountInFreeDefinedCurrency4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_IN_FREE_DEFINED_CURRENCY_4: StringField<GlAccountLineItem> =
    new StringField(
      'AmountInFreeDefinedCurrency4',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[freeDefinedCurrency5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREE_DEFINED_CURRENCY_5: StringField<GlAccountLineItem> =
    new StringField('FreeDefinedCurrency5', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[amountInFreeDefinedCurrency5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_IN_FREE_DEFINED_CURRENCY_5: StringField<GlAccountLineItem> =
    new StringField(
      'AmountInFreeDefinedCurrency5',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[freeDefinedCurrency6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREE_DEFINED_CURRENCY_6: StringField<GlAccountLineItem> =
    new StringField('FreeDefinedCurrency6', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[amountInFreeDefinedCurrency6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_IN_FREE_DEFINED_CURRENCY_6: StringField<GlAccountLineItem> =
    new StringField(
      'AmountInFreeDefinedCurrency6',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[freeDefinedCurrency7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREE_DEFINED_CURRENCY_7: StringField<GlAccountLineItem> =
    new StringField('FreeDefinedCurrency7', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[amountInFreeDefinedCurrency7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_IN_FREE_DEFINED_CURRENCY_7: StringField<GlAccountLineItem> =
    new StringField(
      'AmountInFreeDefinedCurrency7',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[freeDefinedCurrency8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREE_DEFINED_CURRENCY_8: StringField<GlAccountLineItem> =
    new StringField('FreeDefinedCurrency8', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[amountInFreeDefinedCurrency8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_IN_FREE_DEFINED_CURRENCY_8: StringField<GlAccountLineItem> =
    new StringField(
      'AmountInFreeDefinedCurrency8',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[fixedAmountInGlobalCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIXED_AMOUNT_IN_GLOBAL_CRCY: StringField<GlAccountLineItem> =
    new StringField(
      'FixedAmountInGlobalCrcy',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[grpValnFixedAmtInGlobCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GRP_VALN_FIXED_AMT_IN_GLOB_CRCY: StringField<GlAccountLineItem> =
    new StringField(
      'GrpValnFixedAmtInGlobCrcy',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[prftCtrValnFxdAmtInGlobCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRFT_CTR_VALN_FXD_AMT_IN_GLOB_CRCY: StringField<GlAccountLineItem> =
    new StringField(
      'PrftCtrValnFxdAmtInGlobCrcy',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[totalPriceVarcInGlobalCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_PRICE_VARC_IN_GLOBAL_CRCY: StringField<GlAccountLineItem> =
    new StringField(
      'TotalPriceVarcInGlobalCrcy',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[grpValnTotPrcVarcInGlobCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GRP_VALN_TOT_PRC_VARC_IN_GLOB_CRCY: StringField<GlAccountLineItem> =
    new StringField(
      'GrpValnTotPrcVarcInGlobCrcy',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[prftCtrValnTotPrcVarcInGlbCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRFT_CTR_VALN_TOT_PRC_VARC_IN_GLB_CRCY: StringField<GlAccountLineItem> =
    new StringField(
      'PrftCtrValnTotPrcVarcInGlbCrcy',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[fixedPriceVarcInGlobalCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIXED_PRICE_VARC_IN_GLOBAL_CRCY: StringField<GlAccountLineItem> =
    new StringField(
      'FixedPriceVarcInGlobalCrcy',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[grpValnFixedPrcVarcInGlobCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GRP_VALN_FIXED_PRC_VARC_IN_GLOB_CRCY: StringField<GlAccountLineItem> =
    new StringField(
      'GrpValnFixedPrcVarcInGlobCrcy',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[prftCtrValnFxdPrcVarcInGlbCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRFT_CTR_VALN_FXD_PRC_VARC_IN_GLB_CRCY: StringField<GlAccountLineItem> =
    new StringField(
      'PrftCtrValnFxdPrcVarcInGlbCrcy',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[fixedAmountInCoCodeCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIXED_AMOUNT_IN_CO_CODE_CRCY: StringField<GlAccountLineItem> =
    new StringField(
      'FixedAmountInCoCodeCrcy',
      GlAccountLineItem,
      'Edm.Decimal',
    );
  /**
   * Static representation of the [[controllingObjectCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROLLING_OBJECT_CURRENCY: StringField<GlAccountLineItem> =
    new StringField(
      'ControllingObjectCurrency',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[amountInObjectCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT_IN_OBJECT_CURRENCY: StringField<GlAccountLineItem> =
    new StringField('AmountInObjectCurrency', GlAccountLineItem, 'Edm.Decimal');
  /**
   * Static representation of the [[baseUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_UNIT: StringField<GlAccountLineItem> = new StringField(
    'BaseUnit',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[quantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY: StringField<GlAccountLineItem> = new StringField(
    'Quantity',
    GlAccountLineItem,
    'Edm.Decimal',
  );
  /**
   * Static representation of the [[fixedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIXED_QUANTITY: StringField<GlAccountLineItem> = new StringField(
    'FixedQuantity',
    GlAccountLineItem,
    'Edm.Decimal',
  );
  /**
   * Static representation of the [[costSourceUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_SOURCE_UNIT: StringField<GlAccountLineItem> =
    new StringField('CostSourceUnit', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[valuationQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUATION_QUANTITY: StringField<GlAccountLineItem> =
    new StringField('ValuationQuantity', GlAccountLineItem, 'Edm.Decimal');
  /**
   * Static representation of the [[valuationFixedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUATION_FIXED_QUANTITY: StringField<GlAccountLineItem> =
    new StringField('ValuationFixedQuantity', GlAccountLineItem, 'Edm.Decimal');
  /**
   * Static representation of the [[additionalQuantity1Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_QUANTITY_1_UNIT: StringField<GlAccountLineItem> =
    new StringField('AdditionalQuantity1Unit', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[additionalQuantity1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_QUANTITY_1: StringField<GlAccountLineItem> =
    new StringField('AdditionalQuantity1', GlAccountLineItem, 'Edm.Decimal');
  /**
   * Static representation of the [[additionalQuantity2Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_QUANTITY_2_UNIT: StringField<GlAccountLineItem> =
    new StringField('AdditionalQuantity2Unit', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[additionalQuantity2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_QUANTITY_2: StringField<GlAccountLineItem> =
    new StringField('AdditionalQuantity2', GlAccountLineItem, 'Edm.Decimal');
  /**
   * Static representation of the [[additionalQuantity3Unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_QUANTITY_3_UNIT: StringField<GlAccountLineItem> =
    new StringField('AdditionalQuantity3Unit', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[additionalQuantity3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_QUANTITY_3: StringField<GlAccountLineItem> =
    new StringField('AdditionalQuantity3', GlAccountLineItem, 'Edm.Decimal');
  /**
   * Static representation of the [[debitCreditCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEBIT_CREDIT_CODE: StringField<GlAccountLineItem> =
    new StringField('DebitCreditCode', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[fiscalPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_PERIOD: StringField<GlAccountLineItem> = new StringField(
    'FiscalPeriod',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[fiscalYearVariant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_YEAR_VARIANT: StringField<GlAccountLineItem> =
    new StringField('FiscalYearVariant', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[fiscalYearPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_YEAR_PERIOD: StringField<GlAccountLineItem> =
    new StringField('FiscalYearPeriod', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_DATE: DateField<GlAccountLineItem> = new DateField(
    'PostingDate',
    GlAccountLineItem,
    'Edm.Date',
  );
  /**
   * Static representation of the [[documentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DATE: DateField<GlAccountLineItem> = new DateField(
    'DocumentDate',
    GlAccountLineItem,
    'Edm.Date',
  );
  /**
   * Static representation of the [[accountingDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_DOCUMENT_TYPE: StringField<GlAccountLineItem> =
    new StringField('AccountingDocumentType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[accountingDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_DOCUMENT_ITEM: StringField<GlAccountLineItem> =
    new StringField('AccountingDocumentItem', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[assignmentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNMENT_REFERENCE: StringField<GlAccountLineItem> =
    new StringField('AssignmentReference', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[accountingDocumentCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_DOCUMENT_CATEGORY: StringField<GlAccountLineItem> =
    new StringField(
      'AccountingDocumentCategory',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[postingKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_KEY: StringField<GlAccountLineItem> = new StringField(
    'PostingKey',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[transactionTypeDetermination]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_TYPE_DETERMINATION: StringField<GlAccountLineItem> =
    new StringField(
      'TransactionTypeDetermination',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[subLedgerAcctLineItemType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_LEDGER_ACCT_LINE_ITEM_TYPE: StringField<GlAccountLineItem> =
    new StringField(
      'SubLedgerAcctLineItemType',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[accountingDocCreatedByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_DOC_CREATED_BY_USER: StringField<GlAccountLineItem> =
    new StringField(
      'AccountingDocCreatedByUser',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[lastChangeDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGE_DATE_TIME: DateField<GlAccountLineItem> =
    new DateField(
      'LastChangeDateTime',
      GlAccountLineItem,
      'Edm.DateTimeOffset',
    );
  /**
   * Static representation of the [[creationDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE_TIME: DateField<GlAccountLineItem> = new DateField(
    'CreationDateTime',
    GlAccountLineItem,
    'Edm.DateTimeOffset',
  );
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<GlAccountLineItem> = new DateField(
    'CreationDate',
    GlAccountLineItem,
    'Edm.Date',
  );
  /**
   * Static representation of the [[eliminationProfitCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELIMINATION_PROFIT_CENTER: StringField<GlAccountLineItem> =
    new StringField('EliminationProfitCenter', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[originObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGIN_OBJECT_TYPE: StringField<GlAccountLineItem> =
    new StringField('OriginObjectType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[glAccountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_ACCOUNT_TYPE: StringField<GlAccountLineItem> =
    new StringField('GLAccountType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[alternativeGlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALTERNATIVE_GL_ACCOUNT: StringField<GlAccountLineItem> =
    new StringField('AlternativeGLAccount', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[countryChartOfAccounts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_CHART_OF_ACCOUNTS: StringField<GlAccountLineItem> =
    new StringField('CountryChartOfAccounts', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[itemIsSplit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_IS_SPLIT: BooleanField<GlAccountLineItem> =
    new BooleanField('ItemIsSplit', GlAccountLineItem, 'Edm.Boolean');
  /**
   * Static representation of the [[invoiceReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICE_REFERENCE: StringField<GlAccountLineItem> =
    new StringField('InvoiceReference', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[invoiceReferenceFiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICE_REFERENCE_FISCAL_YEAR: StringField<GlAccountLineItem> =
    new StringField(
      'InvoiceReferenceFiscalYear',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[followOnDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLLOW_ON_DOCUMENT_TYPE: StringField<GlAccountLineItem> =
    new StringField('FollowOnDocumentType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[invoiceItemReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICE_ITEM_REFERENCE: StringField<GlAccountLineItem> =
    new StringField('InvoiceItemReference', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[referencePurchaseOrderCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_PURCHASE_ORDER_CATEGORY: StringField<GlAccountLineItem> =
    new StringField(
      'ReferencePurchaseOrderCategory',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[purchasingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_DOCUMENT: StringField<GlAccountLineItem> =
    new StringField('PurchasingDocument', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[purchasingDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_DOCUMENT_ITEM: StringField<GlAccountLineItem> =
    new StringField('PurchasingDocumentItem', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[accountAssignmentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_ASSIGNMENT_NUMBER: StringField<GlAccountLineItem> =
    new StringField('AccountAssignmentNumber', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[documentItemText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ITEM_TEXT: StringField<GlAccountLineItem> =
    new StringField('DocumentItemText', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[salesDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_DOCUMENT: StringField<GlAccountLineItem> = new StringField(
    'SalesDocument',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[salesDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_DOCUMENT_ITEM: StringField<GlAccountLineItem> =
    new StringField('SalesDocumentItem', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[product]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT: StringField<GlAccountLineItem> = new StringField(
    'Product',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[plant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANT: StringField<GlAccountLineItem> = new StringField(
    'Plant',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<GlAccountLineItem> = new StringField(
    'Supplier',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER: StringField<GlAccountLineItem> = new StringField(
    'Customer',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[servicesRenderedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICES_RENDERED_DATE: DateField<GlAccountLineItem> =
    new DateField('ServicesRenderedDate', GlAccountLineItem, 'Edm.Date');
  /**
   * Static representation of the [[conditionContract]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_CONTRACT: StringField<GlAccountLineItem> =
    new StringField('ConditionContract', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[financialAccountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_ACCOUNT_TYPE: StringField<GlAccountLineItem> =
    new StringField('FinancialAccountType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[specialGlCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIAL_GL_CODE: StringField<GlAccountLineItem> =
    new StringField('SpecialGLCode', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_CODE: StringField<GlAccountLineItem> = new StringField(
    'TaxCode',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[houseBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_BANK: StringField<GlAccountLineItem> = new StringField(
    'HouseBank',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[houseBankAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_BANK_ACCOUNT: StringField<GlAccountLineItem> =
    new StringField('HouseBankAccount', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[isOpenItemManaged]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_OPEN_ITEM_MANAGED: StringField<GlAccountLineItem> =
    new StringField('IsOpenItemManaged', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[clearingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLEARING_DATE: DateField<GlAccountLineItem> = new DateField(
    'ClearingDate',
    GlAccountLineItem,
    'Edm.Date',
  );
  /**
   * Static representation of the [[clearingAccountingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLEARING_ACCOUNTING_DOCUMENT: StringField<GlAccountLineItem> =
    new StringField(
      'ClearingAccountingDocument',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[clearingDocFiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLEARING_DOC_FISCAL_YEAR: StringField<GlAccountLineItem> =
    new StringField('ClearingDocFiscalYear', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[valueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_DATE: DateField<GlAccountLineItem> = new DateField(
    'ValueDate',
    GlAccountLineItem,
    'Edm.Date',
  );
  /**
   * Static representation of the [[assetDepreciationArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_DEPRECIATION_AREA: StringField<GlAccountLineItem> =
    new StringField('AssetDepreciationArea', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[masterFixedAsset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MASTER_FIXED_ASSET: StringField<GlAccountLineItem> =
    new StringField('MasterFixedAsset', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[fixedAsset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIXED_ASSET: StringField<GlAccountLineItem> = new StringField(
    'FixedAsset',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<GlAccountLineItem> = new DateField(
    'AssetValueDate',
    GlAccountLineItem,
    'Edm.Date',
  );
  /**
   * Static representation of the [[assetTransactionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_TRANSACTION_TYPE: StringField<GlAccountLineItem> =
    new StringField('AssetTransactionType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[assetAcctTransClassfctn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_ACCT_TRANS_CLASSFCTN: StringField<GlAccountLineItem> =
    new StringField('AssetAcctTransClassfctn', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[depreciationFiscalPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_FISCAL_PERIOD: StringField<GlAccountLineItem> =
    new StringField(
      'DepreciationFiscalPeriod',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[groupMasterFixedAsset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_MASTER_FIXED_ASSET: StringField<GlAccountLineItem> =
    new StringField('GroupMasterFixedAsset', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[groupFixedAsset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_FIXED_ASSET: StringField<GlAccountLineItem> =
    new StringField('GroupFixedAsset', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[assetClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CLASS: StringField<GlAccountLineItem> = new StringField(
    'AssetClass',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[costEstimate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_ESTIMATE: StringField<GlAccountLineItem> = new StringField(
    'CostEstimate',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[inventorySpecialStockValnType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_SPECIAL_STOCK_VALN_TYPE: StringField<GlAccountLineItem> =
    new StringField(
      'InventorySpecialStockValnType',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[inventorySpecialStockType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_SPECIAL_STOCK_TYPE: StringField<GlAccountLineItem> =
    new StringField(
      'InventorySpecialStockType',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[inventorySpclStkSalesDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_SPCL_STK_SALES_DOCUMENT: StringField<GlAccountLineItem> =
    new StringField(
      'InventorySpclStkSalesDocument',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[inventorySpclStkSalesDocItm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_SPCL_STK_SALES_DOC_ITM: StringField<GlAccountLineItem> =
    new StringField(
      'InventorySpclStkSalesDocItm',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[invtrySpclStockWbsElmntIntId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVTRY_SPCL_STOCK_WBS_ELMNT_INT_ID: StringField<GlAccountLineItem> =
    new StringField(
      'InvtrySpclStockWBSElmntIntID',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[inventorySpecialStockSupplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_SPECIAL_STOCK_SUPPLIER: StringField<GlAccountLineItem> =
    new StringField(
      'InventorySpecialStockSupplier',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[inventoryValuationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_VALUATION_TYPE: StringField<GlAccountLineItem> =
    new StringField('InventoryValuationType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[valuationArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUATION_AREA: StringField<GlAccountLineItem> = new StringField(
    'ValuationArea',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[costOriginGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_ORIGIN_GROUP: StringField<GlAccountLineItem> =
    new StringField('CostOriginGroup', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[originSenderObject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGIN_SENDER_OBJECT: StringField<GlAccountLineItem> =
    new StringField('OriginSenderObject', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[controllingObjectDebitType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROLLING_OBJECT_DEBIT_TYPE: StringField<GlAccountLineItem> =
    new StringField(
      'ControllingObjectDebitType',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[quantityIsIncomplete]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_IS_INCOMPLETE: StringField<GlAccountLineItem> =
    new StringField('QuantityIsIncomplete', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[offsettingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFSETTING_ACCOUNT: StringField<GlAccountLineItem> =
    new StringField('OffsettingAccount', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[offsettingAccountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFSETTING_ACCOUNT_TYPE: StringField<GlAccountLineItem> =
    new StringField('OffsettingAccountType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[offsettingChartOfAccounts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFSETTING_CHART_OF_ACCOUNTS: StringField<GlAccountLineItem> =
    new StringField(
      'OffsettingChartOfAccounts',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[lineItemIsCompleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINE_ITEM_IS_COMPLETED: BooleanField<GlAccountLineItem> =
    new BooleanField('LineItemIsCompleted', GlAccountLineItem, 'Edm.Boolean');
  /**
   * Static representation of the [[personnelNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSONNEL_NUMBER: StringField<GlAccountLineItem> =
    new StringField('PersonnelNumber', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[controllingObjectClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROLLING_OBJECT_CLASS: StringField<GlAccountLineItem> =
    new StringField('ControllingObjectClass', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerCompanyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_COMPANY_CODE: StringField<GlAccountLineItem> =
    new StringField('PartnerCompanyCode', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerControllingObjectClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_CONTROLLING_OBJECT_CLASS: StringField<GlAccountLineItem> =
    new StringField(
      'PartnerControllingObjectClass',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[originCostCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGIN_COST_CENTER: StringField<GlAccountLineItem> =
    new StringField('OriginCostCenter', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[originProfitCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGIN_PROFIT_CENTER: StringField<GlAccountLineItem> =
    new StringField('OriginProfitCenter', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[originCostCtrActivityType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGIN_COST_CTR_ACTIVITY_TYPE: StringField<GlAccountLineItem> =
    new StringField(
      'OriginCostCtrActivityType',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[accountAssignment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_ASSIGNMENT: StringField<GlAccountLineItem> =
    new StringField('AccountAssignment', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[accountAssignmentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_ASSIGNMENT_TYPE: StringField<GlAccountLineItem> =
    new StringField('AccountAssignmentType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[costCtrActivityType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CTR_ACTIVITY_TYPE: StringField<GlAccountLineItem> =
    new StringField('CostCtrActivityType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[orderId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_ID: StringField<GlAccountLineItem> = new StringField(
    'OrderID',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[orderCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_CATEGORY: StringField<GlAccountLineItem> = new StringField(
    'OrderCategory',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[wbsElementInternalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WBS_ELEMENT_INTERNAL_ID: StringField<GlAccountLineItem> =
    new StringField('WBSElementInternalID', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerWbsElementInternalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_WBS_ELEMENT_INTERNAL_ID: StringField<GlAccountLineItem> =
    new StringField(
      'PartnerWBSElementInternalID',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[projectInternalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_INTERNAL_ID: StringField<GlAccountLineItem> =
    new StringField('ProjectInternalID', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerProjectInternalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_PROJECT_INTERNAL_ID: StringField<GlAccountLineItem> =
    new StringField(
      'PartnerProjectInternalID',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[operatingConcern]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATING_CONCERN: StringField<GlAccountLineItem> =
    new StringField('OperatingConcern', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[projectNetwork]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_NETWORK: StringField<GlAccountLineItem> =
    new StringField('ProjectNetwork', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[businessProcess]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PROCESS: StringField<GlAccountLineItem> =
    new StringField('BusinessProcess', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[costObject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_OBJECT: StringField<GlAccountLineItem> = new StringField(
    'CostObject',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[billableControl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILLABLE_CONTROL: StringField<GlAccountLineItem> =
    new StringField('BillableControl', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[costAnalysisResource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_ANALYSIS_RESOURCE: StringField<GlAccountLineItem> =
    new StringField('CostAnalysisResource', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[customerServiceNotification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_SERVICE_NOTIFICATION: StringField<GlAccountLineItem> =
    new StringField(
      'CustomerServiceNotification',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[serviceDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_DOCUMENT_TYPE: StringField<GlAccountLineItem> =
    new StringField('ServiceDocumentType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[serviceDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_DOCUMENT: StringField<GlAccountLineItem> =
    new StringField('ServiceDocument', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[serviceDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_DOCUMENT_ITEM: StringField<GlAccountLineItem> =
    new StringField('ServiceDocumentItem', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerServiceDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_SERVICE_DOCUMENT_TYPE: StringField<GlAccountLineItem> =
    new StringField(
      'PartnerServiceDocumentType',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[partnerServiceDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_SERVICE_DOCUMENT: StringField<GlAccountLineItem> =
    new StringField('PartnerServiceDocument', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerServiceDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_SERVICE_DOCUMENT_ITEM: StringField<GlAccountLineItem> =
    new StringField(
      'PartnerServiceDocumentItem',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[serviceContractType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CONTRACT_TYPE: StringField<GlAccountLineItem> =
    new StringField('ServiceContractType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[serviceContract]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CONTRACT: StringField<GlAccountLineItem> =
    new StringField('ServiceContract', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[serviceContractItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CONTRACT_ITEM: StringField<GlAccountLineItem> =
    new StringField('ServiceContractItem', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[timeSheetOvertimeCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_SHEET_OVERTIME_CATEGORY: StringField<GlAccountLineItem> =
    new StringField(
      'TimeSheetOvertimeCategory',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[partnerAccountAssignment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_ACCOUNT_ASSIGNMENT: StringField<GlAccountLineItem> =
    new StringField(
      'PartnerAccountAssignment',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[partnerAccountAssignmentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_ACCOUNT_ASSIGNMENT_TYPE: StringField<GlAccountLineItem> =
    new StringField(
      'PartnerAccountAssignmentType',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[partnerCostCtrActivityType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_COST_CTR_ACTIVITY_TYPE: StringField<GlAccountLineItem> =
    new StringField(
      'PartnerCostCtrActivityType',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[partnerOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_ORDER: StringField<GlAccountLineItem> = new StringField(
    'PartnerOrder',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[partnerOrderCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_ORDER_CATEGORY: StringField<GlAccountLineItem> =
    new StringField('PartnerOrderCategory', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerSalesDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_SALES_DOCUMENT: StringField<GlAccountLineItem> =
    new StringField('PartnerSalesDocument', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerSalesDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_SALES_DOCUMENT_ITEM: StringField<GlAccountLineItem> =
    new StringField(
      'PartnerSalesDocumentItem',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[partnerProjectNetwork]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_PROJECT_NETWORK: StringField<GlAccountLineItem> =
    new StringField('PartnerProjectNetwork', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerBusinessProcess]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_BUSINESS_PROCESS: StringField<GlAccountLineItem> =
    new StringField('PartnerBusinessProcess', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[partnerCostObject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_COST_OBJECT: StringField<GlAccountLineItem> =
    new StringField('PartnerCostObject', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[controllingDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROLLING_DOCUMENT_ITEM: StringField<GlAccountLineItem> =
    new StringField('ControllingDocumentItem', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[billingDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILLING_DOCUMENT_TYPE: StringField<GlAccountLineItem> =
    new StringField('BillingDocumentType', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[salesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION: StringField<GlAccountLineItem> =
    new StringField('SalesOrganization', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[distributionChannel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL: StringField<GlAccountLineItem> =
    new StringField('DistributionChannel', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[organizationDivision]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_DIVISION: StringField<GlAccountLineItem> =
    new StringField('OrganizationDivision', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[soldProduct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_PRODUCT: StringField<GlAccountLineItem> = new StringField(
    'SoldProduct',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[soldProductGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_PRODUCT_GROUP: StringField<GlAccountLineItem> =
    new StringField('SoldProductGroup', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[customerGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_GROUP: StringField<GlAccountLineItem> = new StringField(
    'CustomerGroup',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[customerSupplierCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_SUPPLIER_COUNTRY: StringField<GlAccountLineItem> =
    new StringField('CustomerSupplierCountry', GlAccountLineItem, 'Edm.String');
  /**
   * Static representation of the [[customerSupplierIndustry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_SUPPLIER_INDUSTRY: StringField<GlAccountLineItem> =
    new StringField(
      'CustomerSupplierIndustry',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * Static representation of the [[salesDistrict]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_DISTRICT: StringField<GlAccountLineItem> = new StringField(
    'SalesDistrict',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[billToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_TO_PARTY: StringField<GlAccountLineItem> = new StringField(
    'BillToParty',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[shipToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY: StringField<GlAccountLineItem> = new StringField(
    'ShipToParty',
    GlAccountLineItem,
    'Edm.String',
  );
  /**
   * Static representation of the [[customerSupplierCorporateGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_SUPPLIER_CORPORATE_GROUP: StringField<GlAccountLineItem> =
    new StringField(
      'CustomerSupplierCorporateGroup',
      GlAccountLineItem,
      'Edm.String',
    );
  /**
   * All fields of the GlAccountLineItem entity.
   */
  export const _allFields: Array<
    | StringField<GlAccountLineItem>
    | BooleanField<GlAccountLineItem>
    | StringField<GlAccountLineItem>
    | DateField<GlAccountLineItem>
  > = [
    GlAccountLineItem.ID,
    GlAccountLineItem.SOURCE_LEDGER,
    GlAccountLineItem.COMPANY_CODE,
    GlAccountLineItem.FISCAL_YEAR,
    GlAccountLineItem.ACCOUNTING_DOCUMENT,
    GlAccountLineItem.LEDGER_GL_LINE_ITEM,
    GlAccountLineItem.LEDGER,
    GlAccountLineItem.LEDGER_FISCAL_YEAR,
    GlAccountLineItem.GL_RECORD_TYPE,
    GlAccountLineItem.CONTROLLING_AREA,
    GlAccountLineItem.CHART_OF_ACCOUNTS,
    GlAccountLineItem.GL_ACCOUNT,
    GlAccountLineItem.FINANCIAL_TRANSACTION_TYPE,
    GlAccountLineItem.BUSINESS_TRANSACTION_TYPE,
    GlAccountLineItem.CONTROLLING_BUS_TRANSAC_TYPE,
    GlAccountLineItem.REFERENCE_DOCUMENT_TYPE,
    GlAccountLineItem.LOGICAL_SYSTEM,
    GlAccountLineItem.REFERENCE_DOCUMENT_CONTEXT,
    GlAccountLineItem.REFERENCE_DOCUMENT,
    GlAccountLineItem.REFERENCE_DOCUMENT_ITEM,
    GlAccountLineItem.REFERENCE_DOCUMENT_ITEM_GROUP,
    GlAccountLineItem.TRANSACTION_SUBITEM,
    GlAccountLineItem.IS_REVERSAL,
    GlAccountLineItem.IS_REVERSED,
    GlAccountLineItem.REVERSAL_REFERENCE_DOCUMENT_CNTXT,
    GlAccountLineItem.REVERSAL_REFERENCE_DOCUMENT,
    GlAccountLineItem.IS_SETTLEMENT,
    GlAccountLineItem.IS_SETTLED,
    GlAccountLineItem.PREDECESSOR_REFERENCE_DOC_TYPE,
    GlAccountLineItem.PREDECESSOR_REFERENCE_DOC_CNTXT,
    GlAccountLineItem.PREDECESSOR_REFERENCE_DOCUMENT,
    GlAccountLineItem.PREDECESSOR_REFERENCE_DOC_ITEM,
    GlAccountLineItem.PRDCSSR_JOURNAL_ENTRY_COMPANY_CODE,
    GlAccountLineItem.PRDCSSR_JOURNAL_ENTRY_FISCAL_YEAR,
    GlAccountLineItem.PREDECESSOR_JOURNAL_ENTRY,
    GlAccountLineItem.PREDECESSOR_JOURNAL_ENTRY_ITEM,
    GlAccountLineItem.SOURCE_REFERENCE_DOCUMENT_TYPE,
    GlAccountLineItem.SOURCE_LOGICAL_SYSTEM,
    GlAccountLineItem.SOURCE_REFERENCE_DOCUMENT_CNTXT,
    GlAccountLineItem.SOURCE_REFERENCE_DOCUMENT,
    GlAccountLineItem.SOURCE_REFERENCE_DOCUMENT_ITEM,
    GlAccountLineItem.SOURCE_REFERENCE_DOC_SUBITEM,
    GlAccountLineItem.IS_COMMITMENT,
    GlAccountLineItem.JRNL_ENTRY_ITEM_OBSOLETE_REASON,
    GlAccountLineItem.JRNL_PERIOD_END_CLOSING_RUN_LOG_UUID,
    GlAccountLineItem.COST_CENTER,
    GlAccountLineItem.PROFIT_CENTER,
    GlAccountLineItem.FUNCTIONAL_AREA,
    GlAccountLineItem.BUSINESS_AREA,
    GlAccountLineItem.SEGMENT,
    GlAccountLineItem.PARTNER_COST_CENTER,
    GlAccountLineItem.PARTNER_PROFIT_CENTER,
    GlAccountLineItem.PARTNER_FUNCTIONAL_AREA,
    GlAccountLineItem.PARTNER_BUSINESS_AREA,
    GlAccountLineItem.PARTNER_COMPANY,
    GlAccountLineItem.PARTNER_SEGMENT,
    GlAccountLineItem.BALANCE_TRANSACTION_CURRENCY,
    GlAccountLineItem.AMOUNT_IN_BALANCE_TRANSAC_CRCY,
    GlAccountLineItem.TRANSACTION_CURRENCY,
    GlAccountLineItem.AMOUNT_IN_TRANSACTION_CURRENCY,
    GlAccountLineItem.COMPANY_CODE_CURRENCY,
    GlAccountLineItem.AMOUNT_IN_COMPANY_CODE_CURRENCY,
    GlAccountLineItem.GLOBAL_CURRENCY,
    GlAccountLineItem.AMOUNT_IN_GLOBAL_CURRENCY,
    GlAccountLineItem.FREE_DEFINED_CURRENCY_1,
    GlAccountLineItem.AMOUNT_IN_FREE_DEFINED_CURRENCY_1,
    GlAccountLineItem.FREE_DEFINED_CURRENCY_2,
    GlAccountLineItem.AMOUNT_IN_FREE_DEFINED_CURRENCY_2,
    GlAccountLineItem.FREE_DEFINED_CURRENCY_3,
    GlAccountLineItem.AMOUNT_IN_FREE_DEFINED_CURRENCY_3,
    GlAccountLineItem.FREE_DEFINED_CURRENCY_4,
    GlAccountLineItem.AMOUNT_IN_FREE_DEFINED_CURRENCY_4,
    GlAccountLineItem.FREE_DEFINED_CURRENCY_5,
    GlAccountLineItem.AMOUNT_IN_FREE_DEFINED_CURRENCY_5,
    GlAccountLineItem.FREE_DEFINED_CURRENCY_6,
    GlAccountLineItem.AMOUNT_IN_FREE_DEFINED_CURRENCY_6,
    GlAccountLineItem.FREE_DEFINED_CURRENCY_7,
    GlAccountLineItem.AMOUNT_IN_FREE_DEFINED_CURRENCY_7,
    GlAccountLineItem.FREE_DEFINED_CURRENCY_8,
    GlAccountLineItem.AMOUNT_IN_FREE_DEFINED_CURRENCY_8,
    GlAccountLineItem.FIXED_AMOUNT_IN_GLOBAL_CRCY,
    GlAccountLineItem.GRP_VALN_FIXED_AMT_IN_GLOB_CRCY,
    GlAccountLineItem.PRFT_CTR_VALN_FXD_AMT_IN_GLOB_CRCY,
    GlAccountLineItem.TOTAL_PRICE_VARC_IN_GLOBAL_CRCY,
    GlAccountLineItem.GRP_VALN_TOT_PRC_VARC_IN_GLOB_CRCY,
    GlAccountLineItem.PRFT_CTR_VALN_TOT_PRC_VARC_IN_GLB_CRCY,
    GlAccountLineItem.FIXED_PRICE_VARC_IN_GLOBAL_CRCY,
    GlAccountLineItem.GRP_VALN_FIXED_PRC_VARC_IN_GLOB_CRCY,
    GlAccountLineItem.PRFT_CTR_VALN_FXD_PRC_VARC_IN_GLB_CRCY,
    GlAccountLineItem.FIXED_AMOUNT_IN_CO_CODE_CRCY,
    GlAccountLineItem.CONTROLLING_OBJECT_CURRENCY,
    GlAccountLineItem.AMOUNT_IN_OBJECT_CURRENCY,
    GlAccountLineItem.BASE_UNIT,
    GlAccountLineItem.QUANTITY,
    GlAccountLineItem.FIXED_QUANTITY,
    GlAccountLineItem.COST_SOURCE_UNIT,
    GlAccountLineItem.VALUATION_QUANTITY,
    GlAccountLineItem.VALUATION_FIXED_QUANTITY,
    GlAccountLineItem.ADDITIONAL_QUANTITY_1_UNIT,
    GlAccountLineItem.ADDITIONAL_QUANTITY_1,
    GlAccountLineItem.ADDITIONAL_QUANTITY_2_UNIT,
    GlAccountLineItem.ADDITIONAL_QUANTITY_2,
    GlAccountLineItem.ADDITIONAL_QUANTITY_3_UNIT,
    GlAccountLineItem.ADDITIONAL_QUANTITY_3,
    GlAccountLineItem.DEBIT_CREDIT_CODE,
    GlAccountLineItem.FISCAL_PERIOD,
    GlAccountLineItem.FISCAL_YEAR_VARIANT,
    GlAccountLineItem.FISCAL_YEAR_PERIOD,
    GlAccountLineItem.POSTING_DATE,
    GlAccountLineItem.DOCUMENT_DATE,
    GlAccountLineItem.ACCOUNTING_DOCUMENT_TYPE,
    GlAccountLineItem.ACCOUNTING_DOCUMENT_ITEM,
    GlAccountLineItem.ASSIGNMENT_REFERENCE,
    GlAccountLineItem.ACCOUNTING_DOCUMENT_CATEGORY,
    GlAccountLineItem.POSTING_KEY,
    GlAccountLineItem.TRANSACTION_TYPE_DETERMINATION,
    GlAccountLineItem.SUB_LEDGER_ACCT_LINE_ITEM_TYPE,
    GlAccountLineItem.ACCOUNTING_DOC_CREATED_BY_USER,
    GlAccountLineItem.LAST_CHANGE_DATE_TIME,
    GlAccountLineItem.CREATION_DATE_TIME,
    GlAccountLineItem.CREATION_DATE,
    GlAccountLineItem.ELIMINATION_PROFIT_CENTER,
    GlAccountLineItem.ORIGIN_OBJECT_TYPE,
    GlAccountLineItem.GL_ACCOUNT_TYPE,
    GlAccountLineItem.ALTERNATIVE_GL_ACCOUNT,
    GlAccountLineItem.COUNTRY_CHART_OF_ACCOUNTS,
    GlAccountLineItem.ITEM_IS_SPLIT,
    GlAccountLineItem.INVOICE_REFERENCE,
    GlAccountLineItem.INVOICE_REFERENCE_FISCAL_YEAR,
    GlAccountLineItem.FOLLOW_ON_DOCUMENT_TYPE,
    GlAccountLineItem.INVOICE_ITEM_REFERENCE,
    GlAccountLineItem.REFERENCE_PURCHASE_ORDER_CATEGORY,
    GlAccountLineItem.PURCHASING_DOCUMENT,
    GlAccountLineItem.PURCHASING_DOCUMENT_ITEM,
    GlAccountLineItem.ACCOUNT_ASSIGNMENT_NUMBER,
    GlAccountLineItem.DOCUMENT_ITEM_TEXT,
    GlAccountLineItem.SALES_DOCUMENT,
    GlAccountLineItem.SALES_DOCUMENT_ITEM,
    GlAccountLineItem.PRODUCT,
    GlAccountLineItem.PLANT,
    GlAccountLineItem.SUPPLIER,
    GlAccountLineItem.CUSTOMER,
    GlAccountLineItem.SERVICES_RENDERED_DATE,
    GlAccountLineItem.CONDITION_CONTRACT,
    GlAccountLineItem.FINANCIAL_ACCOUNT_TYPE,
    GlAccountLineItem.SPECIAL_GL_CODE,
    GlAccountLineItem.TAX_CODE,
    GlAccountLineItem.HOUSE_BANK,
    GlAccountLineItem.HOUSE_BANK_ACCOUNT,
    GlAccountLineItem.IS_OPEN_ITEM_MANAGED,
    GlAccountLineItem.CLEARING_DATE,
    GlAccountLineItem.CLEARING_ACCOUNTING_DOCUMENT,
    GlAccountLineItem.CLEARING_DOC_FISCAL_YEAR,
    GlAccountLineItem.VALUE_DATE,
    GlAccountLineItem.ASSET_DEPRECIATION_AREA,
    GlAccountLineItem.MASTER_FIXED_ASSET,
    GlAccountLineItem.FIXED_ASSET,
    GlAccountLineItem.ASSET_VALUE_DATE,
    GlAccountLineItem.ASSET_TRANSACTION_TYPE,
    GlAccountLineItem.ASSET_ACCT_TRANS_CLASSFCTN,
    GlAccountLineItem.DEPRECIATION_FISCAL_PERIOD,
    GlAccountLineItem.GROUP_MASTER_FIXED_ASSET,
    GlAccountLineItem.GROUP_FIXED_ASSET,
    GlAccountLineItem.ASSET_CLASS,
    GlAccountLineItem.COST_ESTIMATE,
    GlAccountLineItem.INVENTORY_SPECIAL_STOCK_VALN_TYPE,
    GlAccountLineItem.INVENTORY_SPECIAL_STOCK_TYPE,
    GlAccountLineItem.INVENTORY_SPCL_STK_SALES_DOCUMENT,
    GlAccountLineItem.INVENTORY_SPCL_STK_SALES_DOC_ITM,
    GlAccountLineItem.INVTRY_SPCL_STOCK_WBS_ELMNT_INT_ID,
    GlAccountLineItem.INVENTORY_SPECIAL_STOCK_SUPPLIER,
    GlAccountLineItem.INVENTORY_VALUATION_TYPE,
    GlAccountLineItem.VALUATION_AREA,
    GlAccountLineItem.COST_ORIGIN_GROUP,
    GlAccountLineItem.ORIGIN_SENDER_OBJECT,
    GlAccountLineItem.CONTROLLING_OBJECT_DEBIT_TYPE,
    GlAccountLineItem.QUANTITY_IS_INCOMPLETE,
    GlAccountLineItem.OFFSETTING_ACCOUNT,
    GlAccountLineItem.OFFSETTING_ACCOUNT_TYPE,
    GlAccountLineItem.OFFSETTING_CHART_OF_ACCOUNTS,
    GlAccountLineItem.LINE_ITEM_IS_COMPLETED,
    GlAccountLineItem.PERSONNEL_NUMBER,
    GlAccountLineItem.CONTROLLING_OBJECT_CLASS,
    GlAccountLineItem.PARTNER_COMPANY_CODE,
    GlAccountLineItem.PARTNER_CONTROLLING_OBJECT_CLASS,
    GlAccountLineItem.ORIGIN_COST_CENTER,
    GlAccountLineItem.ORIGIN_PROFIT_CENTER,
    GlAccountLineItem.ORIGIN_COST_CTR_ACTIVITY_TYPE,
    GlAccountLineItem.ACCOUNT_ASSIGNMENT,
    GlAccountLineItem.ACCOUNT_ASSIGNMENT_TYPE,
    GlAccountLineItem.COST_CTR_ACTIVITY_TYPE,
    GlAccountLineItem.ORDER_ID,
    GlAccountLineItem.ORDER_CATEGORY,
    GlAccountLineItem.WBS_ELEMENT_INTERNAL_ID,
    GlAccountLineItem.PARTNER_WBS_ELEMENT_INTERNAL_ID,
    GlAccountLineItem.PROJECT_INTERNAL_ID,
    GlAccountLineItem.PARTNER_PROJECT_INTERNAL_ID,
    GlAccountLineItem.OPERATING_CONCERN,
    GlAccountLineItem.PROJECT_NETWORK,
    GlAccountLineItem.BUSINESS_PROCESS,
    GlAccountLineItem.COST_OBJECT,
    GlAccountLineItem.BILLABLE_CONTROL,
    GlAccountLineItem.COST_ANALYSIS_RESOURCE,
    GlAccountLineItem.CUSTOMER_SERVICE_NOTIFICATION,
    GlAccountLineItem.SERVICE_DOCUMENT_TYPE,
    GlAccountLineItem.SERVICE_DOCUMENT,
    GlAccountLineItem.SERVICE_DOCUMENT_ITEM,
    GlAccountLineItem.PARTNER_SERVICE_DOCUMENT_TYPE,
    GlAccountLineItem.PARTNER_SERVICE_DOCUMENT,
    GlAccountLineItem.PARTNER_SERVICE_DOCUMENT_ITEM,
    GlAccountLineItem.SERVICE_CONTRACT_TYPE,
    GlAccountLineItem.SERVICE_CONTRACT,
    GlAccountLineItem.SERVICE_CONTRACT_ITEM,
    GlAccountLineItem.TIME_SHEET_OVERTIME_CATEGORY,
    GlAccountLineItem.PARTNER_ACCOUNT_ASSIGNMENT,
    GlAccountLineItem.PARTNER_ACCOUNT_ASSIGNMENT_TYPE,
    GlAccountLineItem.PARTNER_COST_CTR_ACTIVITY_TYPE,
    GlAccountLineItem.PARTNER_ORDER,
    GlAccountLineItem.PARTNER_ORDER_CATEGORY,
    GlAccountLineItem.PARTNER_SALES_DOCUMENT,
    GlAccountLineItem.PARTNER_SALES_DOCUMENT_ITEM,
    GlAccountLineItem.PARTNER_PROJECT_NETWORK,
    GlAccountLineItem.PARTNER_BUSINESS_PROCESS,
    GlAccountLineItem.PARTNER_COST_OBJECT,
    GlAccountLineItem.CONTROLLING_DOCUMENT_ITEM,
    GlAccountLineItem.BILLING_DOCUMENT_TYPE,
    GlAccountLineItem.SALES_ORGANIZATION,
    GlAccountLineItem.DISTRIBUTION_CHANNEL,
    GlAccountLineItem.ORGANIZATION_DIVISION,
    GlAccountLineItem.SOLD_PRODUCT,
    GlAccountLineItem.SOLD_PRODUCT_GROUP,
    GlAccountLineItem.CUSTOMER_GROUP,
    GlAccountLineItem.CUSTOMER_SUPPLIER_COUNTRY,
    GlAccountLineItem.CUSTOMER_SUPPLIER_INDUSTRY,
    GlAccountLineItem.SALES_DISTRICT,
    GlAccountLineItem.BILL_TO_PARTY,
    GlAccountLineItem.SHIP_TO_PARTY,
    GlAccountLineItem.CUSTOMER_SUPPLIER_CORPORATE_GROUP,
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<GlAccountLineItem> = new AllFields(
    '*',
    GlAccountLineItem,
  );
  /**
   * All key fields of the GlAccountLineItem entity.
   */
  export const _keyFields: Array<Field<GlAccountLineItem>> = [
    GlAccountLineItem.ID,
  ];
  /**
   * Mapping of all key field names to the respective static field property GlAccountLineItem.
   */
  export const _keys: { [keys: string]: Field<GlAccountLineItem> } =
    GlAccountLineItem._keyFields.reduce(
      (
        acc: { [keys: string]: Field<GlAccountLineItem> },
        field: Field<GlAccountLineItem>,
      ) => {
        acc[field._fieldName] = field;
        return acc;
      },
      {},
    );
}
