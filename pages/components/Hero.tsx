import {
  Button,
  Container,
  Heading,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import * as React from "react";
import { getWallet, METAPOOL_CONTRACT_ID } from "../../lib/near";
import { useStore } from "../../stores/wallet";

const Hero = () => {
  const { wallet, setWallet } = useStore();
  const [isConnected, setIsConnected] = useState(false);
  const onConnect = async () => {
    wallet!.requestSignIn(METAPOOL_CONTRACT_ID, "Metapool contract");
  };
  useEffect(() => {
    (async () => {
      const tempWallet = await getWallet();
      if (tempWallet.getAccountId()!) {
        setIsConnected(true);
      }
    })();
  }, []);


  return (
    <Square
      minHeight={600}
      borderRadius={16}
      as="section"
      bg="bg-accent"
      color="on-accent"
    >
      <Container py={{ base: "12", md: "24" }}>
        <Stack spacing={{ base: "8", md: "10" }}>
          <Stack spacing={{ base: "4", md: "5" }} align="center">
            <Heading
              textAlign={"center"}
              fontSize={72}
              fontWeight={900}
              size={useBreakpointValue({ base: "md", md: "lg" })}
            >
              Stake. Support. <br></br> Earn.
            </Heading>
            <Text
              color="on-accent-muteed"
              maxW="2xl"
              textAlign="center"
              fontSize="xl"
            >
              Stake NEAR and use your tokens to support crypto-based projects,
              and earn their tokens.
            </Text>
          </Stack>
          <Stack
            spacing="3"
            direction={{ base: "column", sm: "row" }}
            justify="center"
          >
            {!isConnected && (
              <Button colorScheme="indigo" size="lg" onClick={() => onConnect()}>
                Connect Wallet
              </Button>
            )}
            <Link href="#how-it-works">
              <Button variant="secondary-on-accent" size="lg">
                How it works
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Square>
  );
};

export default Hero;
