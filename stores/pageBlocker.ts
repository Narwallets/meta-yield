import create from "zustand/vanilla";
interface PageBlockerState {
  message: string;
  isActive: boolean;
}

export const blockerStore = create<PageBlockerState>(() => ({  message: "Confirm this action in your wallet", isActive: false }));
