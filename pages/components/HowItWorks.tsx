import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  HStack,
  Spacer,
  Flex,
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
        <Flex flexDirection={'column'} alignItems={'center'} mb={'50px'}>
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
        </Flex>
        <HStack  spacing={{ base: "8", md: "10" }} align="center">
          <Stack>
              <Image
                src={'/connectwallet.svg'}
                alt="project"
                width="72px"
                height={"72px"}
              />
            <Text fontSize="2xl" lineHeight="8" fontWeight="semibold">
              Connect your wallet
            </Text>
            <Text fontSize="md" lineHeight="6" fontWeight="normal">
              Earn Althea tokens—faster, cheaper, decentralized internet
            </Text>
          </Stack>
          <Stack>
            <Image
              src={'/stakenear.svg'}
              alt="project"
              width="72px"
              height={"72px"}
            />
            <Text fontSize="2xl" lineHeight="8" fontWeight="semibold">
              Stake NEAR tokens
            </Text>
            <Text fontSize="md" lineHeight="6" fontWeight="normal">
              Earn Althea tokens—faster, cheaper, decentralized internet
            </Text>
          </Stack>
          <Stack>
            <Image
              src={'/earntokens.svg'}
              alt="project"
              width="72px"
              height={"72px"}
            />
            <Text fontSize="2xl" lineHeight="8" fontWeight="semibold">
              Fund crypto projects
            </Text>
            <Text fontSize="md" lineHeight="6" fontWeight="normal">
              Earn Althea tokens—faster, cheaper, decentralized internet
            </Text>
          </Stack>
          <Stack>
            <Image
              src={'/fundprojects.svg'}
              alt="project"
              width="72px"
              height={"72px"}
            />
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
