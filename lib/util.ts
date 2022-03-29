import {
  keyStores,
  Near,
  connect,
  WalletConnection,
  utils,
  Contract,
  providers,
  ConnectConfig,
} from "near-api-js";
const BN = require("bn.js");
import { getConfig } from "../config";
import {katherineMethods, metaPoolMethods} from "./methods";

export const CONTRACT_ID = process.env.CONTRACT_ID;
export const METAPOOL_CONTRACT_ID = process.env.METAPOOL_CONTRACT_ID;
export const gas = new BN("70000000000000");

export const getWallet = async () => {
  // const nearConfig = await getConfig(process.env.NODE_ENV || "development");
  const nearConfig = await getConfig("development");
  const connectConfig: ConnectConfig = {
    ...nearConfig,
    headers: {},
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  };
  const near = await connect(connectConfig);
  const wallet = new WalletConnection(near, "katherine");
  return wallet;
};

export const getContract = async (wallet: WalletConnection) => {
  return new Contract(wallet.account(), CONTRACT_ID!, {
    viewMethods: [katherineMethods.getTotalKickstarters],
    changeMethods: [],
  });
};

export const getMetapoolContract = async (wallet: WalletConnection) => {
  return new Contract(wallet.account(), METAPOOL_CONTRACT_ID!, {
    viewMethods: [metaPoolMethods.getStNearPrice],
    changeMethods: [],
  });
};

export const getTotalKickstarters = async (
  wallet: WalletConnection,
  args: any
) => {
  const response = await wallet
    .account()
    .functionCall(CONTRACT_ID!, katherineMethods.getTotalKickstarters, args);
  return providers.getTransactionLastResult(response);
};

export const getStNearPrice = async (wallet: WalletConnection, args: any) => {
  const response = await wallet
    .account()
    .functionCall(METAPOOL_CONTRACT_ID!, metaPoolMethods.getStNearPrice, args);
  return providers.getTransactionLastResult(response);
};
