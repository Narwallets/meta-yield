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
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupSender } from "@near-wallet-selector/sender";
import { setupMathWallet } from "@near-wallet-selector/math-wallet";
import { setupNightly } from "@near-wallet-selector/nightly";
import { setupLedger } from "@near-wallet-selector/ledger";
import { setupWalletConnect } from "@near-wallet-selector/wallet-connect";
import { setupNightlyConnect } from "@near-wallet-selector/nightly-connect";
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
}

const WalletSelectorContext =
  React.createContext<WalletSelectorContextValue | null>(null);

export const WalletSelectorContextProvider: React.FC = ({ children }) => {
  const env = process.env.NODE_ENV;
  const nearConfig = getConfig(env);
  const [selector, setSelector] = useState<WalletSelector | null>(null);
  const [modal, setModal] = useState<WalletSelectorModal | null>(null);
  const [accounts, setAccounts] = useState<Array<AccountState>>([]);
  // comma separated enable wallets
  const WALLET_SELECTOR_ENABLE_WALLETS =
    process.env.NEXT_PUBLIC_WALLET_SELECTOR_ENABLE_WALLETS;
  const DEFAULT_ENABLE_WALLETS = ["near", "mynearwallet", "math"];
  const setupNearWalletCustom = () => {
    return async (options: any) => {
      const wallet = await setupMyNearWallet({
        walletUrl: nearConfig.walletUrl
      })(options);

      if (!wallet) {
        return null;
      }

      return {
        ...wallet,
        id: "near-wallet",
        metadata: {
          ...wallet.metadata,
          name: "NEAR Wallet",
          description: null,
          iconUrl: "./assets/near-wallet-icon.png",
          deprecated: false,
          available: true,
        },
      };
    };
  };

      // Setup Wallet Selector wallets based on WALLET_SELECTOR_ENABLE_WALLETS enn variable
      const setupWallets = () => {
        let modules: any[] = [];
        const enableWallets = WALLET_SELECTOR_ENABLE_WALLETS
          ? WALLET_SELECTOR_ENABLE_WALLETS.split(",")
          : DEFAULT_ENABLE_WALLETS;
        enableWallets.forEach((w: string) => {
          switch (w) {
            case Wallets.Near: {
              modules.push(setupNearWalletCustom());
              break;
            }
            case Wallets.MyNearWallet: {
              modules.push(setupMyNearWallet());
              break;
            }
            case Wallets.Math: {
              modules.push(setupMathWallet());
              break;
            }
            case Wallets.Nightly: {
              modules.push(setupNightly());
              break;
            }
            case Wallets.NightlyConnect: {
              const setup = setupNightlyConnect({
                url: "wss://ncproxy.nightly.app/app",
                appMetadata: {
                  additionalInfo: "",
                  application: "NEAR Wallet Selector",
                  description: "Meta Yield app used by NEAR Wallet Selector",
                  icon: "https://near.org/wp-content/uploads/2020/09/cropped-favicon-192x192.png",
                },
              });
              modules.push(setup);
              break;
            }
            case Wallets.WalletConnect: {
              const setup = 
              setupWalletConnect({
                  projectId: "c4f79cc...",
                  metadata: {
                    name: "NEAR Wallet Selector",
                    description: "Example dApp used by NEAR Wallet Selector",
                    url: "https://github.com/near/wallet-selector",
                    icons: ["https://avatars.githubusercontent.com/u/37784886"],
                  },
                });
              modules.push(setup);
              break;
            }
            case Wallets.Sender: {
              modules.push(setupSender());
              break;
            }
          }
        });
        return modules;
      };

  const init = useCallback(async () => {
    const modules = setupWallets();
    const _selector = await setupWalletSelector({
      network: NETWORK_ID as NetworkId,
      debug: true,
      modules: modules
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
