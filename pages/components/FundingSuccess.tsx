import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Text,
  Flex,
  Spacer,
  Link,
  Divider,
} from "@chakra-ui/react";
const BN = require("bn.js");

// import Image from "next/image";
import { CaretLeft, CaretRight } from "phosphor-react";

import { useGetProjectDetails, useGetProjects } from "../hooks/projects";
import { useRouter } from "next/router";
import { KickstarterGoalProps, ProjectProps } from "../types/project.types";
import { yoctoToDollarStr, yoctoToStNear } from "../../lib/util";
import { fetchNearPrice } from "../queries/prices";
import moment from "moment";
const FundingSuccess = (props: { id: any; supporter_deposit: string }) => {
  const router = useRouter();
  const kickstarter_id = parseInt(props.id as string);
  const supporter_deposit = props.supporter_deposit;
  const { data, isLoading } = useGetProjectDetails(kickstarter_id);
  const [rewards, setRewards] = useState<string>("");
  const [invested, setInvested] = useState<string>("");
  const [lockupTime, setLockupTime] = useState<string>("");
  const getCurrentFundingGoal = () => {
    const [currentFundingGoal] = data.kickstarter.goals.filter(
      (g) => parseInt(g.desired_amount) >= data.kickstarter.total_deposited
    );
    if (!currentFundingGoal) {
      return data.kickstarter.goals[data.kickstarter.goals.length - 1];
    }
    return currentFundingGoal;
  };

  useEffect(() => {
    (async () => {
      if (data) {
        const nearPrice = await fetchNearPrice();
        const winnerGoal: KickstarterGoalProps = getCurrentFundingGoal();
        if (winnerGoal) {
          const rewards =
            yoctoToStNear(parseInt(winnerGoal.tokens_to_release)) *
            yoctoToStNear(parseInt(supporter_deposit));
          setRewards(rewards.toString());
          setLockupTime(
            moment(winnerGoal.unfreeze_timestamp).format("MMMM Do, YYYY")
          );
        }
        setInvested(yoctoToDollarStr(supporter_deposit, nearPrice));
      }
    })();
  }, [data, props]);
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
