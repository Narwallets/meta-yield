import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getTxStatus } from "../../lib/near";
import { useStore } from "../../stores/wallet";
import ProjectDetails from "../components/ProjectDetails";

export default function ProjectDetailsContainer() {
  const router = useRouter();
  const toast = useToast();
  const id = router.query && router.query.id ? router.query.id : "";
  const transactionHashes = router.query.transactionHashes;
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
        if (result.found) {
          if (result.success) {
            toast({
              title: "Withdraw success.",
              status: "success",
              duration: 9000,
              position: "top-right",
              isClosable: true,
            });
          } else {
            toast({
              title: "Withdraw Transaction error.",
              description: result?.error?.message,
              status: "error",
              duration: 9000,
              position: "top-right",
              isClosable: true,
            });
          }
        }
      }
      setIsLoaded(true);
    })();
  }, [transactionHashes, wallet, toast]);

  if (!id || !isLoaded) return <></>;
  return <ProjectDetails id={id} />;
}
