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
} from "@chakra-ui/react";
import { getWallet, getBalance, METAPOOL_CONTRACT_ID } from "../../lib/near";
import { colors } from "../../constants/colors";
import { useStore } from "../../stores/wallet";

const Header: React.FC<ButtonProps> = (props) => {
  const { wallet, isLogin, setWallet, setLogin } = useStore();
  const [signInAccountId, setSignInAccountId] = useState(null);
  const [stNearBalance, setStNearBalance] = useState<number>(0);
  const isDesktop = useBreakpointValue({ base: false, lg: true });

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

  const removeQueryString = () => {
    var uri = window.location.toString();
    if (uri.indexOf("?") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("?"));
      window.history.replaceState({}, document.title, clean_uri);
    }
  };

  useEffect(() => {
    (async () => {})();
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
          setStNearBalance(await await getBalance(tempWallet!));
        }

        // removeQueryString();
        setLogin(tempWallet && tempWallet.getAccountId() ? true : false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav" alignContent="flex-end">
        <Container py={{ base: "3", lg: "4" }}>
          <Flex justify="space-between">
            <Square minW="45px">
              <Image
                boxSize="25px"
                objectFit="cover"
                src="/logo.png"
                alt="logo"
              />
            </Square>
            <Square fontSize={"24px"}>
              <Link href="/">
                <b>Meta Yield</b>
              </Link>
            </Square>
            <Spacer />
            <HStack spacing="4">
              {isDesktop && (
                <ButtonGroup variant="link" spacing="1" alignItems="flex-end">
                  <Link>
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
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                {isLogin ? (
                  <>
                    <Square minW="30px">
                      <Image
                        boxSize="20px"
                        objectFit="cover"
                        src="/stnear.svg"
                        alt="stnear"
                      />
                    </Square>
                    <Text>{stNearBalance}</Text>
                    <Link
                      href="https://metapool.app/dapp/mainnet/meta/"
                      target="_blank"
                    >
                      <Button
                        fontWeight={600}
                        fontSize={"md"}
                        color={colors.indigo[500]}
                      >
                        Get stNEAR
                      </Button>
                    </Link>
                    <a
                      href={`https://explorer.testnet.near.org/accounts/${signInAccountId}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {signInAccountId}
                    </a>
                    <Button colorScheme="indigo" onClick={() => logout()}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button colorScheme="indigo" onClick={() => onConnect()}>
                    Connect Wallet
                  </Button>
                )}
              </HStack>
            ) : isLogin ? (
              <>
                <a
                  href={`https://explorer.testnet.near.org/accounts/${signInAccountId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {signInAccountId}
                </a>
                <Button colorScheme="indigo" onClick={() => logout()}>
                  Logout
                </Button>
              </>
            ) : (
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
