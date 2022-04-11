import React, { useEffect, useState, ChangeEvent } from "react";
import { HStack, Stack, Text, Input, Center, Select } from "@chakra-ui/react";
import { Card } from "./Card";
import { KickstarterProps } from "../types/project.types";
export const RewardsCalculator = (props: { kickstarter: KickstarterProps }) => {
  const kickstarter = props.kickstarter;
  const [goalSelected, setGoalSelected] = useState<number>(0);
  const [estimatedRewards, setEstimatedRewards] = useState<number>(0);

  // ToDo: REVIEW ESTIMATED REWARD CALCULATION
  const onStNearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const goal = kickstarter.goals.find((g) => g.id === goalSelected);
    if (goal) {
      const tokenAwardPerStnear: string = goal.tokens_to_release;
      setEstimatedRewards(
        parseInt(tokenAwardPerStnear) * parseInt(e.target.value)
      );
    }
  };
  
  const onGoalChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGoalSelected(parseInt(e.target.value));
  };
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
          onChange={(e) => onStNearChange(e)}
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
              $GLA
            </Text>
          </HStack>
        </Center>
      </Stack>
    </Card>
  );
};
