import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";

export const HowItWorks = () => (
  <Box
    as="section"
    id="how-it-works"
    maxWidth="1xl"
    mx="auto"
    p={{ base: "6", md: "8" }}
    py={{ base: "12", md: "24" }}
  >
    <Container>
      <Stack spacing={{ base: "8", md: "10" }} align="center">
        <Text fontSize="xl" lineHeight="7" fontWeight="semibold">
          How It Works
        </Text>
        <Text
          fontSize="6xl"
          lineHeight="none"
          fontWeight="extrabold"
          color="indigo.600"
        >
          Fund to earn.
        </Text>
        <HStack spacing={{ base: "8", md: "10" }} align="center">
          <Stack>
            <Text fontSize="2xl" lineHeight="8" fontWeight="semibold">
              Connect your wallet
            </Text>
            <Text fontSize="md" lineHeight="6" fontWeight="normal">
              Earn Althea tokens—faster, cheaper, decentralized internet
            </Text>
          </Stack>
          <Stack>
            <Text fontSize="2xl" lineHeight="8" fontWeight="semibold">
              Stake NEAR tokens
            </Text>
            <Text fontSize="md" lineHeight="6" fontWeight="normal">
              Earn Althea tokens—faster, cheaper, decentralized internet
            </Text>
          </Stack>
          <Stack>
            <Text fontSize="2xl" lineHeight="8" fontWeight="semibold">
              Fund crypto projects
            </Text>
            <Text fontSize="md" lineHeight="6" fontWeight="normal">
              Earn Althea tokens—faster, cheaper, decentralized internet
            </Text>
          </Stack>
          <Stack>
            <Text fontSize="2xl" lineHeight="8" fontWeight="semibold">
              Earn new tokens
            </Text>
            <Text fontSize="md" lineHeight="6" fontWeight="normal">
              Earn Althea tokens—faster, cheaper, decentralized internet
            </Text>
          </Stack>
        </HStack>
      </Stack>
    </Container>
  </Box>
);
