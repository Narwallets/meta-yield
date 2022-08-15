import {
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { useWalletSelector } from "../../context/WalletSelectorContext";

interface Props {
  text: string;
}

const ConnectButton = (props: Props) => {
  const { selector, modal, accounts, accountId } = useWalletSelector();

  const handleSignIn = () => {
    modal.show();
  };

  return (
    <>
      <Button colorScheme="indigo" onClick={() => handleSignIn()}>
        {props && props.text ? props.text : 'Connect Wallet'}
      </Button>
    </>
  );
};

export default ConnectButton;
