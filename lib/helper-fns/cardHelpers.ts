import { Card } from '@/types/userTypes';
import { users } from '../mockData';

export const getCardsByUserId = (userId: string): (Card & { id: string })[] => {
  const index = parseInt(userId.replace('user', '')) - 1;
  if (index >= 0 && index < users.length) {
    return users[index].cards || [];
  }
  return [];
};