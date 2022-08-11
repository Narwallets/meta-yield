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
import { useWalletSelector } from "../../context/WalletSelectorContext";
import ConnectButton from "./ConnectButton";

const Hero = () => {
  const { selector, modal, accounts, accountId } = useWalletSelector();

  return (
    <Square
      minHeight={{ base: 400, md: 600 }}
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
              fontWeight={900}
              lineHeight={{ base: "3rem", md: "4rem" }}
              size={useBreakpointValue({ base: "lg", md: "2xl" })}
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
            alignItems={"center"}
          >
            {!selector.isSignedIn() && (
              <ConnectButton text={"Connect wallet to fund"}></ConnectButton>
            )}
            <Link href="#how-it-works">
              <Button variant="secondary-on-accent">
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
