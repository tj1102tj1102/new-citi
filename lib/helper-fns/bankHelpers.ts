import { banks } from '../bankList';
import { Bank } from '../schemas';

export const getBankById = (bankId: string): Bank | undefined => {
  return banks.find(b => b.id === bankId);
};