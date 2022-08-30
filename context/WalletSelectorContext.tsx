import React, { useCallback, useContext, useEffect, useState } from "react";
import { map, distinctUntilChanged } from "rxjs";
import {
  NetworkId,
  setupWalletSelector,
  Wallet,
} from "@near-wallet-selector/core";
import type { WalletSelector, AccountState } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import type { WalletSelectorModal } from "@near-wallet-selector/modal-ui";
import {
  NearWalletParams,
  setupNearWallet,
} from "@near-wallet-selector/near-wallet";
import { setupMathWallet } from "@near-wallet-selector/math-wallet";
import { CONTRACT_ID, METAPOOL_CONTRACT_ID, NETWORK_ID } from "../lib/near";
import { getConfig } from "../config";
declare global {
  interface Window {
    selector: WalletSelector;
    modal: WalletSelectorModal;
    account_id: string | null;
    wallet: Wallet | null;
  }
}

interface WalletSelectorContextValue {
  selector: WalletSelector;
  modal: WalletSelectorModal;
  accounts: Array<AccountState>;
  accountId: string | null;
}
enum Wallets {
  Near = "near",
  MyNearWallet = "mynearwallet",
  Sender = "sender",
  Math = "math",
  Nightly = "nightly",
  WalletConnect = "walletconnect",
  NightlyConnect = "nightlyconnect",
  Ledger = "ledger",
}

const WalletSelectorContext =
  React.createContext<WalletSelectorContextValue | null>(null);

export const WalletSelectorContextProvider: React.FC = ({ children }) => {
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV || 'production';
  const nearConfig = getConfig(env);
  const [selector, setSelector] = useState<WalletSelector | null>(null);
  const [modal, setModal] = useState<WalletSelectorModal | null>(null);
  const [accounts, setAccounts] = useState<Array<AccountState>>([]);
  const DEFAULT_ENABLE_WALLETS = ["near", "math"];

  const setupWallets = () => {
    let modules: any[] = [];
    const enableWallets = DEFAULT_ENABLE_WALLETS;
    enableWallets.forEach((w: string) => {
      switch (w) {
        case Wallets.Near: {
          modules.push(
            setupNearWallet({
              walletUrl: nearConfig.walletUrl,
              iconUrl: "./assets/near-wallet-icon.png",
            })
          );
          break;
        }
        case Wallets.Math: {
          modules.push(setupMathWallet());
          break;
        }
      }
    });
    return modules;
  };

  const init = useCallback(async () => {
    const _selector = await setupWalletSelector({
      network: NETWORK_ID as NetworkId,
      debug: true,
      modules: setupWallets(),
    });

    const _modal = setupModal(_selector, { contractId: CONTRACT_ID || "" });
    const state = _selector.store.getState();
    setAccounts(state.accounts);

    window.selector = _selector;
    window.modal = _modal;
    window.account_id = _selector.isSignedIn()
      ? _selector.store.getState().accounts.find((account) => account.active)
          ?.accountId || null
      : null;
    window.wallet = _selector.isSignedIn() ? await _selector.wallet() : null;
    setSelector(_selector);
    setModal(_modal);
  }, []);

  useEffect(() => {
    init().catch((err) => {
      console.error(err);
      alert("Failed to initialise wallet selector");
    });
  }, [init]);

  useEffect(() => {
    if (!selector) {
      return;
    }

    const subscription = selector.store.observable
      .pipe(
        map((state) => state.accounts),
        distinctUntilChanged()
      )
      .subscribe((nextAccounts) => {
        console.log("Accounts Update", nextAccounts);

        setAccounts(nextAccounts);
      });

    return () => subscription.unsubscribe();
  }, [selector]);

  if (!selector || !modal) {
    return null;
  }

  const accountId =
    accounts.find((account) => account.active)?.accountId || null;

  return (
    <WalletSelectorContext.Provider
      value={{
        selector,
        modal,
        accounts,
        accountId,
      }}
    >
      {children}
    </WalletSelectorContext.Provider>
  );
};

export function useWalletSelector() {
  const context = useContext(WalletSelectorContext);

  if (!context) {
    throw new Error(
      "useWalletSelector must be used within a WalletSelectorContextProvider"
    );
  }

  return context;
}
