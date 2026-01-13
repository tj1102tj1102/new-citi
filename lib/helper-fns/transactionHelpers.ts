import { Transaction } from '@/types/userTypes';
import { users } from '../mockData';

export const getTransactionsByUserId = (userId: string): (Transaction & { id: string; accountId: string })[] => {
  const index = parseInt(userId.replace('user', '')) - 1;
  if (index >= 0 && index < users.length) {
    const transactions: (Transaction & { id: string; accountId: string })[] = [];
    users[index].accounts.forEach((acc, accIdx) => {
      // Check if transactions exist before iterating
      if (acc.transactions) {
        acc.transactions.forEach(tx => {
          transactions.push({
            ...tx,
            id: `tx${transactions.length + 1}`,
            accountId: `acc${index * 2 + accIdx + 1}`
          });
        });
      }
    });
    return transactions;
  }
  return [];
};

export const getTransactionsByAccountId = (userId: string, accountId: string): (Transaction & { id: string })[] => {
  const userIndex = parseInt(userId.replace('user', '')) - 1;
  const accountIndex = parseInt(accountId.replace('acc', '')) - 1;

  if (userIndex >= 0 && userIndex < users.length) {
    const account = users[userIndex].accounts[accountIndex];
    if (account && account.transactions) {
      return account.transactions.map((tx, idx) => ({
        ...tx,
        id: `tx${accountIndex * 10 + idx + 1}`
      }));
    }
  }
  return [];
};
