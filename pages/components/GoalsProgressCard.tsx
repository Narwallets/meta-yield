import React, { useEffect, useState } from "react";
import {
  HStack,
  Stack,
  Text,
  Flex,
  Spacer,
  Tag,
  Container,
  Progress,
  Box,
} from "@chakra-ui/react";
import { Card } from "./Card";
import { KickstarterGoalProps, KickstarterProps } from "../types/project.types";
import { Goal } from "./Goal";
import { useGoal } from "../hooks/useGoal";
import moment from "moment";
export const GoalsProgressCard = (props: { kickstarter: KickstarterProps }) => {
  const kickstarter = props.kickstarter;
  const getCurrentFundingGoal = () => {
    const [current] = kickstarter.goals.filter(
      (g) => parseInt(g.desired_amount) >= kickstarter.total_deposited
    );
    if (!current) {
      return kickstarter.goals[kickstarter.goals.length - 1];
    }
    return current;
  };
  const [goal, setGoal] = useState(kickstarter.goals[0]);
  const [goalRaised, setGoalRaised] = useState(0);
  const [goalProgress, setGoalProgress] = useState(0);
  const [goalStatus, setGoalStatus] = useState<string | undefined>(undefined);
  const [currentGoalId, { setGoalId }] = useGoal({
    maxGoal: kickstarter.goals.length,
    initialGoal: getCurrentFundingGoal().id,
  });
  const getGoalStatus = () => {
    const goal = getCurrentFundingGoal();
    const desiredAmount = parseInt(goal.desired_amount);
    if (moment().valueOf() > kickstarter.close_timestamp) {
      if (kickstarter.total_deposited < desiredAmount) {
        return "Timeout";
      } else return "Completed";
    }
    return "In Progress...";
  };
  useEffect(() => {
    const goal = kickstarter.goals.find((g) => g.id === currentGoalId);
    if (goal) {
      const goalDesiredAmount = parseInt(goal.desired_amount);
      const raised =
        currentGoalId === 0
          ? kickstarter.total_deposited
          : kickstarter.total_deposited > goalDesiredAmount
          ? kickstarter.total_deposited
          : goalDesiredAmount - kickstarter.total_deposited;
      setGoal(goal);
      setGoalRaised(raised);
      setGoalProgress((raised * 100) / goalDesiredAmount);
      setGoalStatus(getGoalStatus());
    }
  }, [currentGoalId, kickstarter.goals]);

  return (
    <Card>
      <Text>GOALS</Text>
      <Container py={{ base: "4", md: "8" }}>
        <Stack>
          <Stack spacing="0" direction={{ base: "column", md: "row" }}>
            {kickstarter.goals.map((goal) => (
              <Goal
                key={goal.id}
                kickstarterGoal={goal}
                isActive={currentGoalId === goal.id}
                isCompleted={currentGoalId > goal.id}
                isFirstGoal={goal.id === 0}
                isLastGoal={kickstarter.goals.length === goal.id + 1}
              />
            ))}
          </Stack>
          <Progress colorScheme="indigo" value={goalProgress} size="lg" />
        </Stack>
      </Container>
      <Flex>
        <Spacer />
        <Box>
          <Tag>{goalStatus}</Tag>
        </Box>
      </Flex>
    </Card>
  );
};
