import create from "zustand/vanilla";
import type { PageBlockerState } from "@meta-pool/meta-shared-components";

export const blockerStore = create<PageBlockerState>(() => ({
  message: "Confirm this action in your wallet",
  isActive: false,
}));
