import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Text,
  Flex,
  Spacer,
  Link,
  Divider,
} from "@chakra-ui/react";
const BN = require("bn.js");

// import Image from "next/image";
import { CaretLeft } from "phosphor-react";

import { useGetProjectDetails } from "../../hooks/projects";
import { useRouter } from "next/router";
import {
  KickstarterGoalProps,
  SupportedKickstarter,
} from "../../types/project.types";
import { getCurrentFundingGoal, yoctoToDollarStr, yton } from "../../lib/util";
import { fetchStNearPrice } from "../../queries/prices";
import moment from "moment";
import { useStore } from "../../stores/wallet";
import { useGetSupportedProjects } from "../../hooks/projects";
import { utils } from "near-api-js";
const FundingSuccess = (props: { id: any }) => {
  const router = useRouter();
  const kickstarter_id = parseInt(props.id as string);
  const { wallet, setWallet } = useStore();
  const { data, isLoading } = useGetProjectDetails(kickstarter_id);
  const { data: supportedProjets, isLoading: isLoadingSupportedProjects } =
    useGetSupportedProjects(wallet?.getAccountId());
  const [rewards, setRewards] = useState<string>("");
  const [invested, setInvested] = useState<string>("");
  const [lockupTime, setLockupTime] = useState<string>("");

  useEffect(() => {
    (async () => {
      if (data && supportedProjets) {
        const stNEARPrice = await fetchStNearPrice();
        const winnerGoal: KickstarterGoalProps = getCurrentFundingGoal(
          data.kickstarter.goals,
          data.kickstarter.total_deposited
        );
        const supportedProject = supportedProjets.find(
          (p: SupportedKickstarter) => p.kickstarter_id === kickstarter_id
        );
        if (winnerGoal && supportedProject) {
          const rewardsInt =
            parseInt(winnerGoal.tokens_to_release_per_stnear) *
            parseInt(supportedProject.supporter_deposit);
          const rewards = yton(rewardsInt.toString());
          setRewards(rewards.toString());
          setLockupTime(
            moment(winnerGoal.unfreeze_timestamp).format("MMMM Do, YYYY")
          );
        }
        setInvested(
          yoctoToDollarStr(
            supportedProject && supportedProject.supporter_deposit
              ? supportedProject.supporter_deposit
              : "0",
            stNEARPrice
          )
        );
      }
    })();
  }, [data, props, supportedProjets]);
  if (!data || isLoading) return <></>;
  return (
    <Box as="section" p={{ base: "3", md: "10px 140px" }}>
      <Link
        color="indigo.500"
        fontSize={"sm"}
        onClick={() => router.push(`/project/${data.kickstarter.id}`)}
      >
        <Flex>
          <CaretLeft size={20} /> Back to project
        </Flex>
      </Link>
      <Text
        fontSize="3xl"
        lineHeight="9"
        fontWeight="semibold"
        color="gray.500"
      >
        Staking summary
      </Text>
      <Flex mt="65px" backgroundColor={"#F1F2F6"} justifyContent={"center"}>
        <Box
          px={{ base: "4", md: "6" }}
          py={{ base: "5", md: "6" }}
          borderRadius="lg"
        >
          <Stack w={"600px"}>
            <Stack>
              <Text
                textAlign={"center"}
                mb={"46px"}
                fontSize="3xl"
                lineHeight="9"
                fontWeight="medium"
              >
                You have successfully participated
              </Text>

              <Box backgroundColor={"white"} p={"40px"} bg="light">
                <Stack spacing="4">
                  <Text
                    mb={"36px"}
                    fontSize="xxs"
                    fontWeight="700"
                    color="gray.400"
                  >
                    SUMMARY
                  </Text>
                  <Stack spacing={4}>
                    <Flex>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="semibold"
                        color="gray.500"
                      >
                        Invested amount
                      </Text>
                      <Spacer />
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        ${invested}
                      </Text>
                    </Flex>
                    <Divider />
                    <Flex>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="semibold"
                        color="gray.500"
                      >
                        Rewards
                      </Text>
                      <Spacer />
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {rewards} ${data.kickstarter.project_token_symbol}
                      </Text>
                    </Flex>
                    <Divider />
                    <Flex>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="semibold"
                        color="gray.500"
                      >
                        Lockup end date
                      </Text>
                      <Spacer />
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {lockupTime}
                      </Text>
                    </Flex>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
            {/* <Stack align="center">
              <Button
                w={"100%"}
                h={"48px"}
                size={"md"}
                colorScheme="indigo"
                rightIcon={<CaretRight size={20} />}
                onClick={() => router.push(`/project/${project?.id}`)}
              >
                Go to your Dashboard
              </Button>
            </Stack> */}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default FundingSuccess;
