import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useStore } from "../../stores/wallet";
import ProjectDetails from "../components/ProjectDetails";
import ErrorHandlerHash from "../components/ErrorHandlerHash";

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
      setIsLoaded(true);
    })();
  }, [transactionHashes, wallet, toast]);

  if (!id || !isLoaded) return <></>;

  return <>
        <ErrorHandlerHash></ErrorHandlerHash>
        <ProjectDetails id={id} />
  </>;
}
