import React, { useEffect, useState, ChangeEvent } from "react";
import { HStack, Stack, Text, Input, Center, Select } from "@chakra-ui/react";
import { Card } from "./Card";
import { KickstarterProps } from "../types/project.types";
import { yoctoToStNear } from "../../lib/util";
export const RewardsCalculator = (props: { kickstarter: KickstarterProps }) => {
  const kickstarter = props.kickstarter;
  const [goalSelected, setGoalSelected] = useState<number>(0);
  const [estimatedRewards, setEstimatedRewards] = useState<number>(0);
  const [amountOfStNear, setAmountOfStNear] = useState<number>(0);
  // ToDo: REVIEW ESTIMATED REWARD CALCULATION
  const calculateRewards = () => {
    const goal = kickstarter.goals.find((g) => g.id === goalSelected);

    if (goal) {
      const tokenAwardPerStnear: string = goal.tokens_to_release;
      setEstimatedRewards(
        yoctoToStNear(parseInt(tokenAwardPerStnear)) * amountOfStNear
      );
    }
  };

  const onGoalChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGoalSelected(parseInt(e.target.value));
    // const tokenAwardPerStnear: string = goal.tokens_to_release;
    // calculateRewards(amountOfStNear);
  };

  useEffect(() => {
    calculateRewards();
  }, [amountOfStNear, goalSelected]);
  return (
    <Card>
      <Stack spacing="6">
        <Text fontSize="sm" fontWeight="subtle">
          REWARDS CALCULATOR
        </Text>

        <Select
          placeholder="Select a goal"
          size="lg"
          onChange={(e) => onGoalChange(e)}
        >
          {kickstarter.goals.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </Select>
        <Text fontSize="sm" fontWeight="subtle">
          AMOUNT OF STNEAR
        </Text>
        <Input
          variant="outline"
          size="md"
          placeholder="0"
          onChange={(e) => {
            setAmountOfStNear(parseInt(e.target.value));
            // calculateRewards(parseInt(e.target.value));
          }}
        ></Input>
        <Center>
          {" "}
          <Text fontSize="sm" fontWeight="subtle">
            REWARDS
          </Text>
        </Center>
        <Center>
          <HStack>
            <Text
              fontSize="4xl"
              lineHeight="10"
              fontWeight="bold"
              color="black"
            >
              {estimatedRewards}
            </Text>
            <Text
              fontSize="2xl"
              lineHeight="8"
              fontWeight="semibold"
              color="gray.400"
            >
              ${kickstarter.project_token_symbol}
            </Text>
          </HStack>
        </Center>
      </Stack>
    </Card>
  );
};
