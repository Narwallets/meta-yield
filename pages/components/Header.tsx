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
  useBreakpointValue,
  ButtonGroup,
  Spacer,
  Square,
  Image,
  useToast,
  Stack,
} from "@chakra-ui/react";
import {
  getWallet,
  getBalance,
  METAPOOL_CONTRACT_ID,
  getNearConfig,
} from "../../lib/near";
import { colors } from "../../constants/colors";
import { useStore as useWallet } from "../../stores/wallet";
import { useStore as useBalance } from "../../stores/balance";
import { useRouter } from "next/router";

const Header: React.FC<ButtonProps> = (props) => {
  const { wallet, isLogin, setWallet, setLogin } = useWallet();
  const { balance, setBalance } = useBalance();
  const [signInAccountId, setSignInAccountId] = useState(null);
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const router = useRouter();
  const toast = useToast();
  const nearConfig = getNearConfig();
  const onConnect = async () => {
    try {
      wallet!.requestSignIn(METAPOOL_CONTRACT_ID, "Metapool contract");
    } catch (e) {
      console.log("error", e);
    }
  };

  const logout = async () => {
    await wallet!.signOut();
    setLogin(wallet && wallet.getAccountId() ? true : false);
    const tempWallet = await getWallet();
    setWallet(tempWallet);
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
      }
    })();
  }, [setLogin, wallet, isLogin]);

  useEffect(() => {
    (async () => {
      try {
        const tempWallet = await getWallet();
        if (!wallet) {
          setWallet(tempWallet);
        }
        if (tempWallet && tempWallet.getAccountId()) {
          setSignInAccountId(tempWallet.getAccountId());
          setBalance(await getBalance(tempWallet!));
        }

        setLogin(tempWallet && tempWallet.getAccountId() ? true : false);
      } catch (e) {
        console.log(e);
      }
    })();

    setInterval(async () => {
      const tempWallet = await getWallet();
      if (tempWallet && tempWallet.getAccountId()) {
        const balance = await getBalance(tempWallet);
        setBalance(balance);
      }
    }, 5000);
  }, []);

  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav" alignContent="flex-end">
        <Container maxW="container.2xl" py={{ base: "3", lg: "4" }}>
          <Flex justify="space-between">
            <Flex onClick={() => router.push(`/`)} cursor="pointer" alignItems="center">
              <Image
                objectFit="cover"
                src="/logo.svg"
                alt="logo"
              />
            </Flex>
            <Spacer />
            {isDesktop && (
              <>
                <ButtonGroup variant="link" spacing="1" alignItems="flex-end">
                  <Link href="/#projects">
                    <Button
                      fontWeight={600}
                      fontSize={"md"}
                      color={colors.indigo[500]}
                      aria-current="page"
                      variant="nav"
                    >
                      {" "}
                      Projects{" "}
                    </Button>
                  </Link>
                  <Link href="/#how-it-works">
                    <Button fontWeight={600} fontSize={"16px"} variant="nav">
                      {" "}
                      How it works{" "}
                    </Button>
                  </Link>
                </ButtonGroup>
                {isLogin && (
                  <HStack spacing="4">
                    <Square minW="30px">
                      <Image
                        boxSize="20px"
                        objectFit="cover"
                        src="/stNEARorig.svg"
                        alt="stnear"
                      />
                    </Square>
                    <Text>{balance}</Text>
                    <Link href={nearConfig.metapoolUrl} target="_blank">
                      <Button
                        fontWeight={600}
                        fontSize={"md"}
                        color={colors.indigo[500]}
                      >
                        Get stNEAR
                      </Button>
                    </Link>
                    <a
                      href={`${nearConfig.explorerUrl}/accounts/${signInAccountId}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {signInAccountId}
                    </a>
                    <Button colorScheme="indigo" onClick={() => logout()}>
                      Logout
                    </Button>
                  </HStack>
                )}
              </>
            )}
            {!isDesktop && (
              <>
                {isLogin && (
                  <HStack wrap="wrap" justifyContent={"flex-end"}>
                      <Square minW="30px">
                      <Image
                        boxSize="20px"
                        objectFit="cover"
                        src="/stNEARorig.svg"
                        alt="stnear"
                      />
                    </Square>
                    <Text>{balance}</Text>
                    {/* <a
                      href={`${nearConfig.explorerUrl}/accounts/${signInAccountId}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {signInAccountId}
                    </a> */}
                    <Button colorScheme="indigo" onClick={() => logout()}>
                      Logout
                    </Button>
                  </HStack>
                )}
              </>
            )}
            {!isLogin && (
              <Button colorScheme="indigo" onClick={() => onConnect()}>
                Connect Wallet
              </Button>
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
