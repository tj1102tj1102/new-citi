import { User } from '@/types/userTypes';
import { users } from '../mockData';

export const getUserByCredentials = (username: string, password: string): (User & { id: string }) | undefined => {
  const user = users.find(u => (u.username === username || u.email === username) && u.password === password);
  if (!user) return undefined;
  const userIndex = users.indexOf(user);
  return { ...user, id: `user${userIndex + 1}` };
};

export const getUserById = (userId: string): (User & { id: string }) | undefined => {
  const index = parseInt(userId.replace('user', '')) - 1;
  if (index >= 0 && index < users.length) {
    return { ...users[index], id: userId };
  }
  return undefined;
};