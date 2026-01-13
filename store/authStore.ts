import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getUserByCredentials, getAccountsByUserId, getTransactionsByUserId, getBankById } from '@/lib/helper-fns';

// Infer types directly from mock data functions for type safety
type User = ReturnType<typeof getUserByCredentials>;
type Account = ReturnType<typeof getAccountsByUserId>[number];
type Transaction = ReturnType<typeof getTransactionsByUserId>[number];
type Bank = ReturnType<typeof getBankById>;

interface AuthState {
  user: User | null;
  bank: Bank | null;
  accounts: Account[];
  transactions: Transaction[];
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  _hasHydrated: boolean;

  // Actions
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
  setHasHydrated: (state: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      bank: null,
      accounts: [],
      transactions: [],
      isAuthenticated: false,
      isLoading: false,
      error: null,
      _hasHydrated: false,

      login: async (username: string, password: string) => {
        set({ isLoading: true, error: null });

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const user = getUserByCredentials(username, password);

        if (user) {
          const userAccounts = getAccountsByUserId(user.id);
          const userTransactions = getTransactionsByUserId(user.id);

          set({
            user,
            bank: null,
            accounts: userAccounts,
            transactions: userTransactions,
            isAuthenticated: true,
            isLoading: false,
            error: null
          });
          return true;
        } else {
          set({
            isLoading: false,
            error: 'Invalid username or password'
          });
          return false;
        }
      },

      logout: () => {
        set({
          user: null,
          bank: null,
          accounts: [],
          transactions: [],
          isAuthenticated: false,
          error: null
        });
      },

      clearError: () => {
        set({ error: null });
      },

      setHasHydrated: (state: boolean) => {
        set({ _hasHydrated: state });
      }
    }),
    {
      name: 'auth-storage',
      onRehydrateStorage: () => state => {
        state?.setHasHydrated(true);
      },
      partialize: state => ({
        user: state.user,
        bank: state.bank,
        accounts: state.accounts,
        transactions: state.transactions,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);
