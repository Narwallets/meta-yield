import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";

export const Hero = () => (
  <Box as="section" bg="bg-accent" color="on-accent">
    <Container py={{ base: "12", md: "24" }}>
      <Stack spacing={{ base: "8", md: "10" }}>
        <Stack spacing={{ base: "4", md: "5" }} align="center">
          <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
            Stake.
          </Heading>
          <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
            Support.
          </Heading>
          <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
            Earn.
          </Heading>
          <Text
            color="on-accent-muteed"
            maxW="2xl"
            textAlign="center"
            fontSize="xl"
          >
            Stake NEAR and use your tokens to support crypto-based projects, and
            earn their tokens.
          </Text>
        </Stack>
        <Stack
          spacing="3"
          direction={{ base: "column", sm: "row" }}
          justify="center"
        >
          <Button variant="secondary-on-accent" size="lg">
            Connect Wallet
          </Button>
          <Button variant="primary-on-accent" size="lg">
            How it works
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
