import * as React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Text,
  ButtonProps,
  Box,
  Flex,
  HStack,
  Link,
  Container,
  useColorModeValue,
  Stack,
  Heading,
  useBreakpointValue,
  ButtonGroup,
} from "@chakra-ui/react";
import { WalletConnection } from "near-api-js";
import {
  METAPOOL_CONTRACT_ID,
  gas,
  getWallet,
  getMetapoolContract,
  getStNearPrice,
} from "../../lib/util";

export const Header: React.FC<ButtonProps> = (props) => {
  const [wallet, setWallet] = useState<WalletConnection>();
  const [signInAccountId, setSignInAccountId] = useState(null);
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const getPrice = async () => {
    return await getStNearPrice(wallet!, {
      accountId: signInAccountId,
    });
  };

  const onConnect = async () => {
    const tempWallet = await getWallet();
    setWallet(tempWallet);
    setSignInAccountId(tempWallet.getAccountId());
  };

  useEffect(() => {
    (async () => {
      try {
        // await wallet!.requestSignIn(METAPOOL_CONTRACT_ID, "Metapool contract");
        // await getPrice();
      } catch (e) {
        console.log(e);
      }
    })();
  }, [wallet]);

  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav" alignContent="flex-end">
        <Container py={{ base: "3", lg: "4" }}>
          <Flex justify="space-between">
            <HStack spacing="4" align="flex-end">
              <Link href="/">
                <Text fontSize="2xl" fontWeight="bold">
                  MetaYield
                </Text>
              </Link>
              {isDesktop && (
                <ButtonGroup variant="link" spacing="3">
                  <Link href="#latest">
                    <Button aria-current="page" variant="nav">
                      {" "}
                      Latest{" "}
                    </Button>
                  </Link>
                  <Link href="#projects">
                    <Button aria-current="page" variant="nav">
                      {" "}
                      Projects{" "}
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button variant="nav"> How it works </Button>
                  </Link>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                {signInAccountId ? (
                  <a
                    href={`https://explorer.testnet.near.org/accounts/${signInAccountId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {signInAccountId}
                  </a>
                ) : (
                  <Button onClick={() => onConnect()}>Connect Wallet</Button>
                )}
              </HStack>
            ) : signInAccountId ? (
              <a
                href={`https://explorer.testnet.near.org/accounts/${signInAccountId}`}
                target="_blank"
                rel="noreferrer"
              >
                {signInAccountId}
              </a>
            ) : (
              <Button onClick={() => onConnect()}>Connect Wallet</Button>
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
