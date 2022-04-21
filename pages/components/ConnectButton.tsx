import {
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { METAPOOL_CONTRACT_ID, signInWallet } from "../../lib/near";
import { useStore } from "../../stores/wallet";

interface Props {
  text: string;
}

const ConnectButton = (props: Props) => {
  const { wallet, setWallet } = useStore();
  const [connected, setconnected] = useState(false)

  const onConnect = async () => {
    const wallet = await signInWallet()
    setWallet(wallet);
  };
  return (
    <>
      <Button width={'100%'} colorScheme="indigo" onClick={() => onConnect()}>
        {props && props.text ? props.text : 'Connect Wallet'}
      </Button>
    </>
  );
};

export default ConnectButton;
