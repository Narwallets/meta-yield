import {
  Box,
  Image,
  Stack,
  Text,
  Flex,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import * as React from "react";
import Item from "./Item";

const HowItWorks = () => (
  <Box
    as="section"
    id="how-it-works"
    maxWidth="1xl"
    mx="auto"
    mb={20}
    px={30}
    py={{ base: "12", md: "24" }}
  >
    <>
      <Stack spacing={{ base: "8", md: "10" }} align="center">
        <Flex flexDirection={"column"} alignItems={"center"} mb={"50px"}>
          <Text fontSize="xl" lineHeight="7" fontWeight="semibold">
            How It Works
          </Text>
          <Text
            fontSize={{ base: "4xl", md: "6xl" }}
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
          <Item
            title="Stake NEAR tokens"
            description="Help decentralize the network. Stake your NEAR, get stNEAR"
            icon="/stakenear.svg"
          />
          <Item
            title={
              <>
                Fund crypto
                <br /> projects
              </>
            }
            description="Use the staking rewards to fund new projects. You keep ownership
                of the underlying NEAR"
            icon="/earntokens.svg"
          />
          <Item
            title="Earn new tokens"
            description=" Get tokens from new projects launching on NEAR at seed price"
            icon="/fundprojects.svg"
          />
          <Item
            title="Recover your NEAR"
            description="At the end of the locking period, you recover 100% of your NEAR"
            icon="/earntokens.svg"
          />
        </SimpleGrid>
      </Stack>
    </>
  </Box>
);

export default HowItWorks;
