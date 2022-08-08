import create from "zustand";

interface BalanceState {
  balance: number;
  setBalance: (value: number) => void;
}

export const useStore = create<BalanceState>((set) => ({
  account: 0,
  setAccount: (value: number) => set((state) => ({ ...state , balance: value })),
}));
