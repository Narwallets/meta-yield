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
  Spacer,
  Square,
  Image
} from "@chakra-ui/react";
import { WalletConnection } from "near-api-js";
import {
  METAPOOL_CONTRACT_ID,
  gas,
  getWallet,
  getMetapoolContract,
  getStNearPrice,
} from "../../lib/util";
import colors from "../colors";

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
      <Box as="nav" bg="bg-surface">
        <Container py={{ base: "3", lg: "4" }}>
          <Flex justify="space-between">
            
            <Square minW='45px'>
              <Image
                boxSize='25px'
                objectFit='cover'
                src='/logo.png'
                alt='Dan Abramov'
              />
            </Square>
            <Square fontSize={'24px'} ><b>Meta Yield</b></Square>
            <Spacer/>
            <HStack spacing="4">
              
              {isDesktop && (
                <ButtonGroup variant="link" spacing="1" alignItems="flex-end">
                  <Link>
                    <Button fontWeight={600} fontSize={'16px'}  color={colors.indigo[500]} aria-current="page" variant="nav">
                      {" "}
                      Projects{" "}
                    </Button>
                  </Link>
                  <Link>
                    <Button fontWeight={600} fontSize={'16px'} variant="nav"> How it works </Button>
                  </Link>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                <Square minW='30px'>
                  <Image
                    boxSize='20px'
                    objectFit='cover'
                    src='/st-logo.png'
                    alt='Dan Abramov'
                  />
                </Square>
                <Text color={colors.indigo[500]} fontWeight={600} >stNEAR</Text> <Text> $12.66</Text>
                {signInAccountId ? (
                  <a
                    href={`https://explorer.testnet.near.org/accounts/${signInAccountId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {signInAccountId}
                  </a>
                ) : (
                  <Button colorScheme="indigo" onClick={() => onConnect()}>Connect Wallet</Button>
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
              <Button  onClick={() => onConnect()}>Connect Wallet</Button>
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
