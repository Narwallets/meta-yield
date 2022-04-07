import { WalletConnection } from "near-api-js";
import create from "zustand";

interface WalletState {
  wallet: WalletConnection | null;
  setWallet: (value: WalletConnection) => void;
}

export const useStore = create<WalletState>((set) => ({
  wallet: null,
  setWallet: (value: WalletConnection) => set((state) => ({ wallet: value })),
}));
