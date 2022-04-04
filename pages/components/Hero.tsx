import {
  Box,
  Button,
  Container,
  Heading,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  Link
} from "@chakra-ui/react";
import * as React from "react";

export const Hero = () => (
  <Square minHeight={600} borderRadius={16} as="section" bg="bg-accent" color="on-accent">
    <Container py={{ base: "12", md: "24" }}>
      <Stack spacing={{ base: "8", md: "10" }}>
        <Stack spacing={{ base: "4", md: "5" }} align="center">
          <Heading textAlign={'center'} fontSize={72} fontWeight={900} size={useBreakpointValue({ base: "md", md: "lg" })}>
            Stake. Support. <br></br> Earn.
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
          <Link href="#how-it-works">
          <Button variant="primary-on-accent" size="lg">
            How it works
          </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  </Square>
);
