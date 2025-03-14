import { YNABAccount } from 'toolkit/types/ynab/data/account';
import { YNABTransaction } from 'toolkit/types/ynab/data/transaction';
import { YNABAccountType } from 'toolkit/types/ynab/window/ynab-enums';

export function mockAccount(overrides?: Partial<YNABAccount>): YNABAccount {
  return {
    accountName: 'accountName',
    accountType: YNABAccountType.Cash,
    accountCalculation: { clearedBalance: 0 },
    getTransactions: jest.fn(),
    ...overrides,
  };
}

export function mockTransaction(overrides?: Partial<YNABTransaction>): YNABTransaction {
  return {
    accepted: true,
    account: mockAccount(),
    accountName: 'account-name',
    accountId: 'account-id',
    amount: 1000,
    baseSubTransactions: [],
    budgetVersionId: 'budgetVersionId',
    cashAmount: 0,
    checkNumber: null,
    cleared: 'Cleared',
    creditAmount: 0,
    creditAmountAdjusted: 0,
    // @ts-ignore -- we don't have a test impl of DateWithoutTime yet. we could use moment()
    // but that's going to break tests probably
    date: null as unknown as DateWithoutTime,
    dateEnteredFromSchedule: null,
    entityId: 'entityId',
    flag: null,
    importedDate: null,
    importedPayee: null,
    isScheduledSubTransaction: false,
    isScheduledTransaction: false,
    isSplit: false,
    isTombstone: false,
    matchedTransaction: null,
    matchedTransactionId: null,
    memo: 'memo',
    // @ts-ignore -- we don't have a test impl of DateWithoutTime yet. we could use moment()
    // but that's going to break tests probably
    month: null as unknown as DateWithoutTime,
    originalImportedPayee: null,
    parentTransaction: undefined,
    payee: null,
    payeeId: null,
    scheduledTransactionId: null,
    scheduledTransaction: null,
    source: null,
    subCategory: null,
    subCategoryCreditAmountPreceding: 0,
    subCategoryNameWrapped: 'subCategoryNameWrapped',
    subCategoryId: null,
    subTransactions: [],
    transferAccountId: null,
    transferAccounts: null,
    transferSubTransaction: null,
    transferSubTransactionId: null,
    transferTransaction: null,
    transferTransactionId: null,
    ynabId: null,
    isUncleared: jest.fn(),
    get(key) {
      return this[key];
    },
    ...overrides,
  };
}
