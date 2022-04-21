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
import { KickstarterGoalProps, KickstarterProps, SupportedKickstarter } from "../../types/project.types";
import { yoctoToDollarStr, yoctoToStNear } from "../../lib/util";
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
  const getCurrentFundingGoal = () => {
    const [currentFundingGoal] = kickstarter.goals.filter(
      (g: KickstarterGoalProps) =>
        parseInt(g.desired_amount) >= parseInt(kickstarter.total_deposited)
    );
    if (!currentFundingGoal) {
      return kickstarter.goals[kickstarter.goals.length - 1];
    }
    return currentFundingGoal;
  };
  useEffect(() => {
    (async () => {
      if (supportedProjets && supportedProjets.lenght) {
        const nearPrice = await fetchNearPrice();
        const winnerGoal: KickstarterGoalProps = getCurrentFundingGoal();
        const supportedProject = supportedProjets.find(
          (p: SupportedKickstarter) => p.kickstarter_id === kickstarter?.id
        );
        if (winnerGoal) {
          const rewards =
            yoctoToStNear(parseInt(winnerGoal.tokens_to_release_per_stnear)) *
            yoctoToStNear(parseInt(supportedProject.supporter_deposit));
          setRewards(rewards.toString());
          setLockupTime(
            moment(winnerGoal.unfreeze_timestamp).format("MMMM Do, YYYY")
          );
        }
        setInvested(
          yoctoToDollarStr(supportedProject.supporter_deposit, nearPrice)
        );
      }
    })();
  }, [props, supportedProjets]);

  return (
    <Card>
      <Stack spacing="6">
        <Text fontSize="sm" fontWeight="subtle">
          YOUR INVESTMENT
        </Text>
        <Flex mt="65px" backgroundColor={"#F1F2F6"} justifyContent={"center"}>
          <Box
            px={{ base: "4", md: "6" }}
            py={{ base: "5", md: "6" }}
            borderRadius="lg"
          >
            <Stack w={"600px"}>
              <Stack>
                <Box backgroundColor={"white"} p={"40px"} bg="light">
                  <Stack spacing="4">
                    <Flex>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="semibold"
                        color="gray.500"
                      >
                        Funded amount (NEAR)
                      </Text>
                      <Spacer />
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {invested}
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
                        {kickstarter?.project_token_symbol} Tokens (Rewards)
                      </Text>
                      <Spacer />
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {rewards} ${kickstarter?.project_token_symbol}
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
    </Card>
  );
};

export default RewardsEstimated;
