import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  HStack,
  Spacer,
  Flex,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import * as React from "react";

const HowItWorks = () => (
  <Box
    as="section"
    id="how-it-works"
    maxWidth="1xl"
    mx="auto"
    py={{ base: "12", md: "24" }}
  >
    <>
      <Stack spacing={{ base: "8", md: "10" }} align="center">
        <Flex flexDirection={"column"} alignItems={"center"} mb={"50px"}>
          <Text fontSize="xl" lineHeight="7" fontWeight="semibold">
            How It Works
          </Text>
          <Text
            fontSize={{base: "4xl", md: "6xl"}}
            lineHeight="none"
            fontWeight="extrabold"
            color="indigo.600"
          >
            Fund to earn.
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: "8", md: "10" }}
          alignItems="stretch"
        >
          <VStack align="flex-start">
            <Image
              src={"/stakenear.svg"}
              alt="project"
              width="72px"
              height={"72px"}
            />
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              lineHeight={{ base: "5", md: "8" }}
              fontWeight="semibold"
            >
              Stake NEAR tokens
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              lineHeight="6"
              fontWeight="normal"
            >
              Help decentralize the network. Stake your NEAR, get stNEAR
            </Text>
          </VStack>
          <VStack align="flex-start">
            <Image
              src={"/earntokens.svg"}
              alt="project"
              width="72px"
              height={"72px"}
            />
            <Text
              noOfLines={{ base: 2, md: 1 }}
              fontSize={{ base: "lg", md: "2xl" }}
              lineHeight={{ base: "5", md: "8" }}
              fontWeight="semibold"
            >
              Fund crypto
              <br /> projects
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              lineHeight="6"
              fontWeight="normal"
            >
              Use the staking rewards to fund new projects. You keep ownership
              of the underlying NEAR
            </Text>
          </VStack>
          <VStack align="flex-start">
            <Image
              src={"/fundprojects.svg"}
              alt="project"
              width="72px"
              height={"72px"}
            />
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              lineHeight={{ base: "5", md: "8" }}
              fontWeight="semibold"
            >
              Earn new tokens
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              lineHeight="6"
              fontWeight="normal"
            >
              Get tokens from new projects launching on NEAR at seed price
            </Text>
          </VStack>
          <VStack align="flex-start">
            <Image
              src={"/earntokens.svg"}
              alt="project"
              width="72px"
              height={"72px"}
            />
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              lineHeight={{ base: "5", md: "8" }}
              fontWeight="semibold"
            >
              Recover your NEAR
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              lineHeight="6"
              fontWeight="normal"
            >
              At the end of the locking period, you recover 100% of your NEAR
            </Text>
          </VStack>
        </SimpleGrid>
      </Stack>
    </>
  </Box>
);

export default HowItWorks;
