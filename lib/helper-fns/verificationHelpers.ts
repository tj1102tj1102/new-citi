import { users } from '../mockData';

export const verifyTransactionCode = (userId: string, enteredCode: string): boolean => {
  const user = users.find(u => u.id === userId);

  if (!user || !user.transactionCode) {
    return false;
  }

  return user.transactionCode === enteredCode;
};