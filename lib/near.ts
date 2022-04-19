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
import { FinalExecutionStatus } from "near-api-js/lib/providers";
const BN = require("bn.js");
import { getConfig } from "../config";
import { TransactionStatusResult } from "../types/transactions.types";
import {
  katherineViewMethods,
  katherineChangeMethods,
  metaPoolMethods,
} from "./methods";
import {
  decodeJsonRpcData,
  encodeJsonRpcData,
  stNearToYocto,
  yoctoToStNear,
} from "./util";

export const CONTRACT_ID = process.env.CONTRACT_ID;
export const METAPOOL_CONTRACT_ID = process.env.METAPOOL_CONTRACT_ID;
export const gas = new BN("70000000000000");
const nearConfig = getConfig("development");
const provider = new providers.JsonRpcProvider({ url: nearConfig.nodeUrl });

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

export const getContract = async (wallet: WalletConnection) => {
  return new Contract(wallet.account(), CONTRACT_ID!, {
    viewMethods: Object.values(katherineViewMethods),
    changeMethods: Object.values(katherineChangeMethods),
  });
};

export const getMetapoolContract = async (wallet: WalletConnection) => {
  return new Contract(wallet.account(), METAPOOL_CONTRACT_ID!, {
    viewMethods: Object.values(metaPoolMethods),
    changeMethods: ["ft_transfer_call"],
  });
};

export const getTotalKickstarters = async () => {
  return callPublicKatherineMethod(
    katherineViewMethods.getTotalKickstarters,
    {}
  );
};

export const getSupportedKickstarters = async (id: any) => {
  const st_near_price = await getStNearPrice();
  return callPublicKatherineMethod(katherineViewMethods.getSupportedDetailedList, {
    supporter_id: id,
    st_near_price: st_near_price,
    from_index: 0,
    limit: 10
  });
};

export const getSupporterEstimatedStNear = async (
  wallet: WalletConnection,
  kickstarter_id: number,
  price: string
) => {
  
    console.log("price", price);
    return callPublicKatherineMethod(
      katherineViewMethods.getSupporterEstimatedStNear,
      {
        supporter_id: wallet.getAccountId(),
        kickstarter_id,
        st_near_price: price,
      }
    );
  
};

export const getKickstarters = async () => {
  return callPublicKatherineMethod(katherineViewMethods.getKickstarters, {
    from_index: 0,
    limit: 10,
  });
};

export const getKickstarter = async (projectId: number) => {
  return callPublicKatherineMethod(katherineViewMethods.getKickstarter, {
    kickstarter_id: projectId,
  });
};

export const getProjectDetails = async (projectId: number) => {
  return callPublicKatherineMethod(katherineViewMethods.getProjectDetails, {
    kickstarter_id: projectId,
  });
};

export const getKickstarterIdFromSlug = async (slug: string) => {
  return callPublicKatherineMethod(
    katherineViewMethods.getKickstarterIdFromSlug,
    { slug: slug }
  );
};

export const getActiveProjects = async () => {
  return callPublicKatherineMethod(katherineViewMethods.getActiveProjects, {
    from_index: 0,
    limit: 10,
  });
};

export const getStNearPrice = async () => {
  return callPublicMetapoolMethod(metaPoolMethods.getStNearPrice, {});
};

export const getMetapoolAccountInfo = async (wallet: WalletConnection) => {
  return callViewMetapoolMethod(wallet, metaPoolMethods.getAccountInfo, {
    account_id: wallet.getAccountId(),
  });
};

export const getBalance = async (wallet: WalletConnection): Promise<number> => {
  const accountInfo = await getMetapoolAccountInfo(wallet);
  return yoctoToStNear(accountInfo.st_near);
};

export const getSupporterDetailedList = async (supporter_id: string) => {
  const st_near_price = await getStNearPrice();
  return callPublicKatherineMethod(
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
  wallet: WalletConnection,
  kickstarter_id: number,
  amountOnStNear: number
) => {
  const contract = await getMetapoolContract(wallet);
  const args = {
    receiver_id: CONTRACT_ID,
    amount: stNearToYocto(amountOnStNear),
    msg: kickstarter_id.toString(),
  };
  const response = await wallet
    .account()  
    .functionCall(
      METAPOOL_CONTRACT_ID!,
      "ft_transfer_call",
      args,
      "300000000000000",
      "1"
    );
  return providers.getTransactionLastResult(response);
};

export const getTxStatus = async (
  txHash: string,
  account_id: string
): Promise<TransactionStatusResult> => {
  const result = await provider.txStatus(txHash, account_id);
  if ((result.status as FinalExecutionStatus).SuccessValue)
    return { success: true };
  if ((result.status as FinalExecutionStatus).Failure)
    return {
      success: false,
      error: {
        message: (result.status as FinalExecutionStatus).Failure
          ?.error_message as string,
        type: (result.status as FinalExecutionStatus).Failure
          ?.error_type as string,
      },
    };
  return {
    success: false,
    error: { message: "Error executing transaction", type: "UNKNOWN_ERROR" },
  };
};
export const withdrawAll = async (
  wallet: WalletConnection,
  kickstarter_id: number
) => {
  const contract = await getContract(wallet);
  const args = {
    kickstarter_id: kickstarter_id,
  };
  const response = (contract as any)["withdraw_all"](
    args,
    "300000000000000",
    "1"
  );
  return response;
};

export const getContractMetadata = async (contract: string) => {
  const response: any = await provider.query({
    request_type: "call_function",
    finality: "final",
    account_id: contract,
    method_name: "ft_metadata",
    args_base64: encodeJsonRpcData({}),
  });
  return decodeJsonRpcData(response.result);
};
const callPublicKatherineMethod = async (method: string, args: any) => {
  const response: any = await provider.query({
    request_type: "call_function",
    finality: "final",
    account_id: CONTRACT_ID,
    method_name: method,
    args_base64: encodeJsonRpcData(args),
  });

  return decodeJsonRpcData(response.result);
};

const callPublicMetapoolMethod = async (method: string, args: any) => {
  const response: any = await provider.query({
    request_type: "call_function",
    finality: "final",
    account_id: METAPOOL_CONTRACT_ID,
    method_name: method,
    args_base64: encodeJsonRpcData(args),
  });

  return decodeJsonRpcData(response.result);
};

const callViewMetapoolMethod = async (
  wallet: WalletConnection,
  method: string,
  args: any
) => {
  const contract = await getMetapoolContract(wallet);
  return (contract as any)[method](args);
};
