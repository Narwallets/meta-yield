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
import { KickstarterProps } from "../../types/project.types";
import { yoctoToStNear } from "../../lib/util";
import moment from "moment";
const RewardsEstimated = (props: { kickstarter: KickstarterProps }) => {
  const kickstarter = props.kickstarter;
  const [goalSelected, setGoalSelected] = useState<number>(0);
  const [estimatedRewards, setEstimatedRewards] = useState<number>(0);
  const [amountOfStNear, setAmountOfStNear] = useState<number>(0);
  const [lockupTime, setLockUpPeriod] = useState<any>();
  // ToDo: REVIEW ESTIMATED REWARD CALCULATION
  const calculateRewards = () => {
    const goal = kickstarter?.goals.find((g) => g.id === goalSelected);

    if (goal) {
      const lockup = moment(goal.unfreeze_timestamp).format("MMM do YYYY");
      setLockUpPeriod(lockup);

      const tokenAwardPerStnear: string = goal.tokens_to_release_per_stnear;
      setEstimatedRewards(
        yoctoToStNear(parseInt(tokenAwardPerStnear)) * amountOfStNear
      );
    }
  };

  const onGoalChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGoalSelected(parseInt(e.target.value));
    // const tokenAwardPerStnear: string = goal.tokens_to_release_per_stnear;
    // calculateRewards(amountOfStNear);
  };

  useEffect(() => {
    calculateRewards();
  }, [amountOfStNear, goalSelected]);

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
                        ${kickstarter?.stnear_price_at_unfreeze}
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
                        {estimatedRewards}
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
