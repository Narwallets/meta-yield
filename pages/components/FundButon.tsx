import React from 'react'
import { Button, ButtonProps, IconButtonProps } from "@chakra-ui/react";
import router from "next/router";
import { CaretRight } from "phosphor-react";
import { useEffect, useState } from "react";
import { useStore } from "../../stores/wallet";

interface FundButtonProps extends ButtonProps {
  show: boolean;
}

const FundButton:  React.FC<FundButtonProps> = p => {
  const { wallet, setWallet } = useStore();
  const { show, ...props } = p;
  const [disabled, setDisabled] = useState<boolean>(false);
  const fundText = "Fund Now";
  const notConnectedText = "Connect Wallet to Fund";
  useEffect(() => {
    setDisabled(!wallet || !wallet?.getAccountId());
  }, [wallet]);
  return show ? (
    <Button
      w={"100%"}
      h={"48px"}
      colorScheme="indigo"
      rightIcon={<CaretRight size={20} />}
      disabled={disabled}
      {...props}
    >
      {wallet ? fundText : notConnectedText}
    </Button>
  ) : (
    <></>
  );
};

export default FundButton;
