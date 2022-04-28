import React, { useEffect, useState, ChangeEvent } from "react";
import {
  Stack,
  Text,
  Input,
  Center,
  Select,
  Box,
  Flex,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import Card from "./Card";
import {
  KickstarterGoalProps,
  KickstarterProps,
  SupportedKickstarter,
} from "../../types/project.types";
import { getCurrentFundingGoal, yton } from "../../lib/util";
import moment from "moment";
import { useGetSupportedProjects } from "../../hooks/projects";
import { useStore } from "../../stores/wallet";
import { fetchNearPrice } from "../../queries/prices";
const RewardsEstimated = (props: { kickstarter: KickstarterProps }) => {
  const kickstarter = props.kickstarter;
  const [goalSelected, setGoalSelected] = useState<number>(0);
  const [estimatedRewards, setEstimatedRewards] = useState<number>(0);
  const [amountOfStNear, setAmountOfStNear] = useState<number>(0);
  const { wallet, setWallet } = useStore();
  const { data: supportedProjets, isLoading: isLoadingSupportedProjects } =
    useGetSupportedProjects(wallet?.getAccountId());
  const [rewards, setRewards] = useState<string>("");
  const [invested, setInvested] = useState<string>("");
  const [lockupTime, setLockupTime] = useState<string>("");

  useEffect(() => {
    (async () => {
      if (supportedProjets && supportedProjets.length) {
        const nearPrice = await fetchNearPrice();
        const winnerGoal: KickstarterGoalProps = getCurrentFundingGoal(
          kickstarter.goals,
          kickstarter.total_deposited
        );
        const supportedProject = supportedProjets.find(
          (p: SupportedKickstarter) => p.kickstarter_id === kickstarter?.id
        );
        if (winnerGoal) {
          const rewards =
            yton(winnerGoal.tokens_to_release_per_stnear) *
            yton(supportedProject.supporter_deposit);
          setRewards(rewards.toString());
          setLockupTime(
            moment(winnerGoal.unfreeze_timestamp).format("MMMM Do, YYYY")
          );
        }
        setInvested(yton(supportedProject.supporter_deposit).toString());
      }
    })();
  }, [props, supportedProjets]);

  return (
    <Stack>
      <Text fontSize="sm" fontWeight="subtle">
        YOUR INVESTMENT
      </Text>
      <Flex justifyContent={"center"}>
        <Box>
          <Stack w={"600px"}>
            <Stack>
              <Box p={"40px"} bg="light">
                <Stack spacing="4">
                  <Flex>
                    <Text
                      fontSize="md"
                      lineHeight="6"
                      fontWeight="semibold"
                      color="gray.500"
                    >
                      Funded amount
                    </Text>
                    <Spacer />
                    <Text
                      fontSize="md"
                      lineHeight="6"
                      fontWeight="bold"
                      color="gray.900"
                    >
                      {invested} NEAR
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
                      Tokens Rewards
                    </Text>
                    <Spacer />
                    <Text
                      fontSize="md"
                      lineHeight="6"
                      fontWeight="bold"
                      color="gray.900"
                    >
                      {rewards} {kickstarter?.project_token_symbol}
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
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Stack>
  );
};

export default RewardsEstimated;
