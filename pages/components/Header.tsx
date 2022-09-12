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
  LinkOverlay,
  Container,
  useBreakpointValue,
  ButtonGroup,
  Spacer,
  Square,
  Image,
  useToast,
  Stack,
  Show,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  IconButton,
  Spinner,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  getWallet,
  getBalance,
  METAPOOL_CONTRACT_ID,
  getNearConfig,
} from "../../lib/near";
import { colors } from "../../constants/colors";
import { useStore as useBalance } from "../../stores/balance";
import { useRouter } from "next/router";
import { formatToLocaleNear } from "../../lib/util";
import { useWalletSelector } from "../../context/WalletSelectorContext";
import { providers } from "near-api-js";
import { AccountView } from "near-api-js/lib/providers/provider";
import { truncateAccountId } from "../../lib/util";
export type Account = AccountView & {
  account_id: string;
};

const Header: React.FC<ButtonProps> = (props) => {
  const { balance, setBalance } = useBalance();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const router = useRouter();
  const toast = useToast();
  const nearConfig = getNearConfig();
  const { selector, modal, accounts, accountId } = useWalletSelector();
  const [account, setAccount] = useState<Account | null>(null);
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);

  const handleSignIn = () => {
    modal.show();
  };

  const handleSwitchWallet = () => {
    modal.show();
  };

  const handleSignOut = async () => {
    const wallet = await selector.wallet();
    setIsSigningOut(true);

    wallet
      .signOut()
      .then((e) => {
        setIsSigningOut(false);
      })
      .catch((err) => {
        console.log("Failed to sign out");
        console.error(err);
        setIsSigningOut(false);
      });
  };
  const updateBalance = () => {
    (async () => {
      if (selector.isSignedIn() && !isSigningOut) {
        const balance = await getBalance();
        setBalance(balance);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        updateBalance();
      } catch (e) {
        console.error(e);
      }
    })();
  }, [selector]);

  useEffect(() => {
    setInterval(async () => {
      updateBalance();
    }, 5000);
  }, []);

  return (
    <Box as="section" position={"relative"} zIndex={99}>
      <Box as="nav" alignContent="flex-end">
        <Container maxW="container.2xl" py={{ base: "3", lg: "4" }}>
          <HStack justify="space-between">
            <Flex
              onClick={() => router.push(`/`)}
              cursor="pointer"
              alignItems="center"
            >
              <Image
                objectFit="cover"
                src="/logo.svg"
                alt="logo"
                width={{ base: "126px", md: "184px" }}
                height={{ base: "22px", md: "32px" }}
              />
            </Flex>
            <Spacer />
            {isDesktop && (
              <ButtonGroup variant="link" alignItems="flex-end">
                <Link href="/#how-it-works">
                  <Button fontWeight={600} fontSize={"16px"} variant="nav">
                    {" "}
                    How it works{" "}
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button fontWeight={600} fontSize={"16px"} variant="nav">
                    {" "}
                    FAQ{" "}
                  </Button>
                </Link>
                <Link href="/#completed">
                  <Button fontWeight={600} fontSize={"16px"} variant="nav">
                    {" "}
                    Funded projects{" "}
                  </Button>
                </Link>
                {/* 
                    <Link href="/vote">
                      <Button fontWeight={600} fontSize={"16px"} variant="nav">
                        {" "}
                        Votes{" "}
                      </Button>
                    </Link>
                  */}
              </ButtonGroup>
            )}

            <Spacer />
            {selector?.isSignedIn() ? (
              <>
                <Show above="lg">
                  <Square minW="30px">
                    <Image
                      boxSize="20px"
                      objectFit="cover"
                      src="/stNEAR_token-white_dark_purple-circle.svg"
                      alt="stnear"
                    />
                  </Square>
                  <Text>{formatToLocaleNear(balance)}</Text>

                  <Button colorScheme="indigo">
                    <LinkOverlay href={nearConfig.metapoolUrl} isExternal>
                      Get stNEAR
                    </LinkOverlay>
                  </Button>
                </Show>
                {!isSigningOut ? (
                  <Menu>
                    {isDesktop ? (
                      <MenuButton px={4} py={2}>
                        {truncateAccountId(accountId!, 24)} <ChevronDownIcon />
                      </MenuButton>
                    ) : (
                      <MenuButton
                        as={IconButton}
                        icon={<HamburgerIcon h="22px" />}
                        variant="none"
                      />
                    )}
                    <MenuList>
                      <MenuItem
                        as={"a"}
                        href={`${nearConfig.explorerUrl}/accounts/${accountId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        My dashboard
                      </MenuItem>
                      <MenuItem onClick={() => handleSignOut()}>
                        Disconnect
                      </MenuItem>
                      <Show below="lg">
                        <MenuDivider />
                        <MenuItem onClick={() => router.push("/#projects")}>
                          Projects
                        </MenuItem>
                        <MenuItem onClick={() => router.push("/#how-it-works")}>
                          How it works
                        </MenuItem>
                        <MenuItem onClick={() => router.push("/#faq")}>
                          FAQ
                        </MenuItem>
                      </Show>
                    </MenuList>
                  </Menu>
                ) : (
                  <Stack direction="row" spacing={4}>
                    <p>Disconnecting from Wallet...</p>
                    <Spinner
                      thickness="4px"
                      speed="0.3s"
                      emptyColor="gray.200"
                      color="blue"
                      size="lg"
                    />
                  </Stack>
                )}
              </>
            ) : (
              <Button
                color="blue"
                borderColor="blue"
                variant="outline"
                onClick={() => handleSignIn()}
              >
                Connect Wallet
              </Button>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
