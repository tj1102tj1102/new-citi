import { create } from 'zustand';

interface BalanceVisibilityState {
  showBalance: boolean;
  toggleBalance: () => void;
  setShowBalance: (value: boolean) => void;
}

export const balanceVisibility = create<BalanceVisibilityState>((set) => ({
  showBalance: true,
  toggleBalance: () =>
    set((state) => ({ showBalance: !state.showBalance })),
  setShowBalance: (value) => set({ showBalance: value }),
}));
