// Types for nested structure
export type AccountType = "checking" | "savings";
export type TransactionStatus = "success" | "pending" | "failed" | "canceled" | "processing";

export interface Transaction {
  merchant: string;
  category: string;
  date: string;
  amount: number;
  status: TransactionStatus;
}

export interface Account {
  name: string;
  accountNumber: string;
  routingNumber?: string;
  balance: number;
  isPrimary: boolean;
  type: AccountType;
  transactions?: Transaction[];
}

export interface Card {
  id: string;
  cardNumber: string;
  cardHolder?: string;
  expiryDate: string;
  cvv: string;
  cardType: 'debit' | 'credit';
  cardName?: string;
  balance?: number;
  limit?: number;
  issuer: string;
  isPrimary: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  transactionCode?: string;
  transactionMsg: string;
  createdAt: string;
  updatedAt?: string;
  accounts: Account[];
  cards: Card[];
}