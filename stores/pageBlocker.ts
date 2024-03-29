import create from "zustand/vanilla";
import { PageBlockerState } from "../common/components/PageBlocker";

export const blockerStore = create<PageBlockerState>(() => ({
  message: "Confirm this action in your wallet",
  isActive: false,
}));
