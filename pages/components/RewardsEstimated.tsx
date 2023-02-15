import React, { useEffect, useState, ChangeEvent } from "react";
import {
  Stack,
  Text,
  Box,
  Flex,
  Divider,
  Spacer,
  Wrap,
  Square,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  KickstarterGoalProps,
  KickstarterProps,
  SupportedKickstarter,
} from "../../types/project.types";
import { getCurrentFundingGoal, ntoy, yton } from "../../lib/util";
import moment from "moment";
import { useGetSupportedProjects } from "../../hooks/projects";
import { useWalletSelector } from "../../context/WalletSelectorContext";

const RewardsEstimated = (props: { kickstarter: KickstarterProps }) => {
  const kickstarter = props.kickstarter;
  const [goalSelected, setGoalSelected] = useState<number>(0);
  const [estimatedRewards, setEstimatedRewards] = useState<number>(0);
  const [amountOfStNear, setAmountOfStNear] = useState<number>(0);
  const { selector, modal, accounts, accountId } = useWalletSelector();
  const { data: supportedProjets, isLoading: isLoadingSupportedProjects } =
    useGetSupportedProjects(accountId!);
  const [rewards, setRewards] = useState<string>("");
  const [invested, setInvested] = useState<string>("");
  const [lockupTime, setLockupTime] = useState<string>("");

  useEffect(() => {
    (async () => {
      if (supportedProjets && supportedProjets.length) {
        const winnerGoal: KickstarterGoalProps = getCurrentFundingGoal(
          kickstarter.goals,
          kickstarter.total_deposited
        );
        const supportedProject = supportedProjets.find(
          (p: SupportedKickstarter) => p.kickstarter_id === kickstarter?.id
        );
        if (winnerGoal) {
          const myRewards =
            yton(winnerGoal.tokens_to_release_per_stnear) *
            yton(supportedProject.supporter_deposit);
          setRewards(ntoy(myRewards));
          setLockupTime(
            moment.utc(winnerGoal.unfreeze_timestamp).format("MMMM Do, YYYY")
          );
        }
        setInvested(yton(supportedProject.supporter_deposit).toString());
      }
    })();
  }, [props, supportedProjets]);

  return (
    <Stack>
      <Heading fontSize="xs" color="gray.400" fontWeight="bold">
        YOUR INVESTMENT
      </Heading>
      <Flex justifyContent={"center"}>
        <Box>
          <Stack w={"600px"}>
            <Stack>
              <Box bg="light">
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
                    <Wrap>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {invested}
                      </Text>
                      <Square minW="20px">
                        <Avatar
                          boxSize="20px"
                          objectFit="cover"
                          src="/stNEAR_token-white_dark_purple-circle.svg"
                        />
                      </Square>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        stNEAR
                      </Text>
                    </Wrap>
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
                    <Wrap>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {yton(rewards)}
                      </Text>
                      <Square minW="20px">
                        <Avatar
                          boxSize="20px"
                          objectFit="cover"
                          src={kickstarter?.project_token_icon}
                        />
                      </Square>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {kickstarter?.project_token_symbol}
                      </Text>
                    </Wrap>

                    
               
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
