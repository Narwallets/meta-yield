import { useRouter } from "next/router";
import FundingSummary from "../../components/FundingSummary";
import { useStore } from "../../../stores/wallet";
import FundingSuccess from "../../components/FundingSuccess";
import { useEffect, useState } from "react";
import { getTxStatus } from "../../../lib/near";
import { useToast } from "@chakra-ui/react";
export default function Fund() {
  const router = useRouter();
  const toast = useToast();
  const { id, transactionHashes } = router.query;
  const { wallet, setWallet } = useStore();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [txSuccess, setTxSuccess] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      if (transactionHashes !== undefined) {
        const result = await getTxStatus(
          transactionHashes as string,
          wallet?.getAccountId()
        );
        const txSuccess = result.found && !!result.success &&  result.data && result.data !== '0'
        setTxSuccess(txSuccess);
        if (!txSuccess) {
          toast({
            title: `Fund error. See transaction  ${result.transactionExplorerUrl}`,
            description: result.errorMessage,
            status: "error",
            duration: 9000,
            position: "top-right",
            isClosable: true,
          });
        } else {
          toast({
            title: "Fund success.",
            description: result.data?.message,
            status: "success",
            duration: 9000,
            position: "top-right",
            isClosable: true,
          });
        }
      }
      setIsLoaded(true);
    })();
  }, [transactionHashes, wallet, toast]);

  if (!isLoaded || !id) return <></>;
  if (isLoaded && txSuccess) return <FundingSuccess id={id} />;
  return <FundingSummary id={id} />;
}
