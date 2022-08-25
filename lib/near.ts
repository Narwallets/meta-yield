import {
  keyStores,
  Near,
  connect,
  WalletConnection,
  utils,
  Contract,
  providers,
  ConnectConfig
} from "near-api-js";
import { parseRpcError } from "near-api-js/lib/utils/rpc_errors";
import {
  FinalExecutionOutcome,
  FinalExecutionStatus,
  getTransactionLastResult,
} from "near-api-js/lib/providers";
const BN = require("bn.js");
import { getConfig } from "../config";
import { TransactionStatusResult } from "../types/transactions.types";
import {
  katherineViewMethods,
  katherineChangeMethods,
  metaPoolMethods,
  projectTokenViewMethods,
  projectTokenChangeMethods,
} from "./methods";
import {
  decodeJsonRpcData,
  encodeJsonRpcData,
  getPanicError,
  getPanicErrorFromText,
  getTxFunctionCallMethod,
  ntoy,
  yton,
} from "./util";
import { AccountView } from "near-api-js/lib/providers/provider";

export const CONTRACT_ID = process.env.NEXT_PUBLIC_CONTRACT_ID;
export const METAPOOL_CONTRACT_ID =
  process.env.NEXT_PUBLIC_METAPOOL_CONTRACT_ID;
export const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID || "testnet";
export const GAS = "200000000000000";
export const DEPOSIT = "1";
const env = process.env.NODE_ENV;
console.log("@env", env);
const nearConfig = getConfig(env);
const provider = new providers.JsonRpcProvider({ url: nearConfig.nodeUrl });

export type Account = AccountView & {
  account_id: string;
};
export const getNearConfig = () => {
  return nearConfig;
};

export const getConnection = async () => {
  const connectConfig: ConnectConfig = {
    ...nearConfig,
    headers: {},
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  };
  const nearConnection = await connect(connectConfig);
  return nearConnection;
};

export const getAccount = async () => {
  const accountId = window.account_id;
  const account = provider
    .query<Account>({
      request_type: "view_account",
      finality: "final",
      account_id: accountId,
    })
    .then((data) => ({
      ...data,
      account_id: accountId,
    }));
  return account;
};

export const getWallet = async () => {
  const connectConfig: ConnectConfig = {
    ...nearConfig,
    headers: {},
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  };
  const near = await connect(connectConfig);
  const wallet = new WalletConnection(near, "katherine");
  return wallet;
};

export const signInWallet = async () => {
  const wallet = await getWallet();
  wallet.requestSignIn(METAPOOL_CONTRACT_ID, "Metapool contract");
  return wallet;
};

export const signOutWallet = async () => {
  const wallet = await getWallet();
  wallet!.signOut();
};

export const getTotalKickstarters = async () => {
  return callViewKatherineMethod(
    katherineViewMethods.getTotalKickstarters,
    {}
  );
};

export const getSupportedKickstarters = async (supporter_id: any) => {
  const st_near_price = await getStNearPrice();
  return callViewKatherineMethod(
    katherineViewMethods.getSupportedDetailedList,
    {
      supporter_id: supporter_id,
      st_near_price: st_near_price,
      from_index: 0,
      limit: 10,
    }
  );
};

export const getSupporterTotalDepositInKickstarter = async (
  supporter_id: string,
  kickstarter_id: number
) => {
  const st_near_price = await getStNearPrice();
  return callViewKatherineMethod(
    katherineViewMethods.getSupporterTotalDepositInKickstarter,
    {
      supporter_id: supporter_id,
      kickstarter_id: kickstarter_id,
      st_near_price: st_near_price,
    }
  );
};

export const getSupporterEstimatedStNear = async (
  kickstarter_id: number,
  price: string
) => {
  const account_id = window.account_id;
  return callViewKatherineMethod(
    katherineViewMethods.getSupporterEstimatedStNear,
    {
      supporter_id: account_id,
      kickstarter_id,
      st_near_price: price,
    }
  );
};

export const getKickstarters = async () => {
  return callViewKatherineMethod(katherineViewMethods.getKickstarters, {
    from_index: 0,
    limit: 10,
  });
};

export const getKickstarter = async (projectId: number) => {
  return callViewKatherineMethod(katherineViewMethods.getKickstarter, {
    kickstarter_id: projectId,
  });
};

export const getProjectDetails = async (projectId: number) => {
  return callViewKatherineMethod(katherineViewMethods.getProjectDetails, {
    kickstarter_id: projectId,
  });
};

export const getKickstarterIdFromSlug = async (slug: string) => {
  return callViewKatherineMethod(
    katherineViewMethods.getKickstarterIdFromSlug,
    { slug: slug }
  );
};

export const getActiveProjects = async () => {
  return callViewKatherineMethod(katherineViewMethods.getActiveProjects, {
    from_index: 0,
    limit: 10,
  });
};

export const getStNearPrice = async () => {
  return callViewMetapoolMethod(metaPoolMethods.getStNearPrice, {});
};

export const getMetapoolAccountInfo = async () => {
  const account_id = window.account_id;
  return callViewMetapoolMethod(metaPoolMethods.getAccountInfo, {
    account_id: account_id!,
  });
};

export const getBalance = async (): Promise<number> => {
  const accountInfo = await getMetapoolAccountInfo();
  return yton(accountInfo.st_near);
};

export const getSupporterDetailedList = async (supporter_id: string) => {
  const st_near_price = await getStNearPrice();
  return callViewKatherineMethod(
    katherineViewMethods.getSupportedDetailedList,
    {
      supporter_id: supporter_id,
      st_near_price: st_near_price,
      from_index: 0,
      limit: 10,
    }
  );
};

export const fundToKickstarter = async (
  kickstarter_id: number,
  amountOnStNear: number
) => {
  const wallet = window.wallet;
  const account_id = window.account_id;
  const args = {
    receiver_id: CONTRACT_ID,
    amount: ntoy(amountOnStNear),
    msg: kickstarter_id.toString(),
  };

  const result = wallet!
    .signAndSendTransaction({
      signerId: account_id!,
      receiverId: METAPOOL_CONTRACT_ID,
      actions: [
        {
          type: "FunctionCall",
          params: {
            methodName: metaPoolMethods.ftTransferCall,
            args: args,
            gas: GAS,
            deposit: DEPOSIT,
          },
        },
      ],
    })
    .catch((err) => {
      console.log("Failed to fund to kickstarter");
      throw err;
    });
  return result;
};


export const getTxStatus = async (
  txHash: string,
  account_id: string
): Promise<TransactionStatusResult> => {
  // const decodedTxHash = utils.serialize.base_decode(txHash);
  const finalExecutionOutcome = await provider.txStatus(txHash, account_id);
  const txUrl = `${nearConfig.explorerUrl}/transactions/${txHash}`;
  const method = getTxFunctionCallMethod(finalExecutionOutcome);
  const panicError = getPanicError(finalExecutionOutcome);
  if (!finalExecutionOutcome) {
    return { found: false };
  }
  if (panicError) {
    return {
      success: false,
      found: true,
      errorMessage: panicError,
      method: method,
      transactionExplorerUrl: txUrl,
    };
  }
  return {
    success: true,
    found: true,
    data: getTransactionLastResult(finalExecutionOutcome),
    method: method,
    finalExecutionOutcome: finalExecutionOutcome,
    transactionExplorerUrl: txUrl,
  };
};
export const withdrawAll = async (kickstarter_id: number) => {
  const args = {
    kickstarter_id: kickstarter_id,
  };
  return callChangeKatherineMethod(katherineChangeMethods.withdrawAll, args);
};

export const withdraw = async (kickstarter_id: number, amount: string) => {
  const args = {
    kickstarter_id: kickstarter_id,
    amount,
  };
  return callChangeKatherineMethod(katherineChangeMethods.withdraw, args);
};

export const claimAll = async (kickstarter_id: number) => {
  const args = {
    kickstarter_id: kickstarter_id,
  };
  return callChangeKatherineMethod(katherineChangeMethods.claim, args);
};

export const claimPartial = async (kickstarter_id: number, amount: string) => {
  const args = {
    kickstarter_id: kickstarter_id,
    amount,
  };
  return callChangeKatherineMethod(katherineChangeMethods.claim, args);
};

export const getContractMetadata = async (contract: string) => {
  const response: any = await provider.query({
    request_type: "call_function",
    finality: "final",
    account_id: contract,
    method_name: projectTokenViewMethods.metadata,
    args_base64: encodeJsonRpcData({}),
  });
  return decodeJsonRpcData(response.result);
};

export const getBalanceOfTokenForSupporter = async (
  tokenContractAddress: string
) => {
  const account_id = window.account_id;
  const response: any = await provider.query({
    request_type: "call_function",
    finality: "final",
    account_id: tokenContractAddress,
    method_name: projectTokenViewMethods.storageBalanceOf,
    args_base64: encodeJsonRpcData({ account_id: account_id }),
  });
  return decodeJsonRpcData(response.result);
};

export const storageDepositOfTokenForSupporter = async (
  tokenContractAddress: string
) => {
  const bounds: any = await getStorageBalanceBounds(tokenContractAddress);
  const wallet = window.wallet;
  const accountId = window.account_id;
  return wallet?.signAndSendTransaction({
    signerId: accountId!,
    receiverId: tokenContractAddress!,
    actions: [
      {
        type: "FunctionCall",
        params: {
          methodName: projectTokenChangeMethods.storageDeposit,
          args: {},
          gas: GAS,
          deposit: bounds.min,
        },
      },
    ],
  });
};

const getStorageBalanceBounds = async (contract: string) => {
  const response: any = await provider.query({
    request_type: "call_function",
    finality: "final",
    account_id: contract,
    method_name: projectTokenViewMethods.storageBalanceBounds,
    args_base64: encodeJsonRpcData({}),
  });
  return decodeJsonRpcData(response.result);
};

const callChangeKatherineMethod = async (method: string, args: any) => {
  const wallet = window.wallet;
  const account_id = window.account_id;
  const result = await wallet!
    .signAndSendTransaction({
      signerId: account_id!,
      actions: [
        {
          type: "FunctionCall",
          params: {
            methodName: method,
            args: args,
            gas: GAS,
            deposit: '',
          },
        },
      ],
    })
    .catch((err) => {
      console.log(`Failed to call katherine contract -- method: ${method} - error message: ${err.message}`);
      throw getPanicErrorFromText(err.message);
    });
  if (result instanceof Object) {
    return result;

  }
  return null;
};

const callViewKatherineMethod = async (method: string, args: any) => {
  const response: any = await provider.query({
    request_type: "call_function",
    finality: "final",
    account_id: CONTRACT_ID,
    method_name: method,
    args_base64: encodeJsonRpcData(args),
  });

  return decodeJsonRpcData(response.result);
};

const callViewMetapoolMethod = async (method: string, args: any) => {
  const response: any = await provider.query({
    request_type: "call_function",
    finality: "optimistic",
    account_id: METAPOOL_CONTRACT_ID,
    method_name: method,
    args_base64: encodeJsonRpcData(args),
  });

  return decodeJsonRpcData(response.result);
};
