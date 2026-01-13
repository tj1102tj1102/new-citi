import { Account } from '@/types/userTypes';
import { users } from '../mockData';

export const getAccountsByUserId = (userId: string): (Account & { id: string })[] => {
  const index = parseInt(userId.replace('user', '')) - 1;
  if (index >= 0 && index < users.length) {
    return users[index].accounts.map((acc, idx) => ({
      ...acc,
      id: `acc${index * 2 + idx + 1}`
    }));
  }
  return [];
};
