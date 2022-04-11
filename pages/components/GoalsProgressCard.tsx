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
import { KickstarterProps } from "../types/project.types";
import { Goal } from "./Goal";
import { useGoal } from "../hooks/useGoal";
import moment from "moment";
export const GoalsProgressCard = (props: { kickstarter: KickstarterProps }) => {
  const kickstarter = props.kickstarter;
  const [currentGoalId, { setGoalId }] = useGoal({
    maxGoal: kickstarter.goals.length,
    initialGoal: kickstarter.goals[0].id,
  });
  const [goal, setGoal] = useState(kickstarter.goals[0]);
  const [goalRaised, setGoalRaised] = useState(0);
  const [goalProgress, setGoalProgress] = useState(0);
  const getGoalStatus = () => {
    const totalAmountDesired = kickstarter.goals
      .map((g) => parseInt(g.desired_amount))
      .reduce((sum: number, current: number) => sum + current);
    if (kickstarter.close_timestamp > moment().valueOf()) {
      if (kickstarter.total_deposited < totalAmountDesired) {
        return "Timeout";
      } else "Completed";
    } else {
      if (kickstarter.total_deposited < totalAmountDesired) {
        return "In Progress";
      } else "Completed";
    }
  };
  useEffect(() => {
    const goal = kickstarter.goals.find((g) => g.id === currentGoalId);
    if (goal) {
      const goalDesiredAmount = parseInt(goal.desired_amount);
      const raised =
        currentGoalId === 0
          ? kickstarter.total_deposited
          : goalDesiredAmount - kickstarter.total_deposited;
      setGoal(goal);
      setGoalRaised(raised);
      setGoalProgress((goalRaised * 100) / goalDesiredAmount);
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
                cursor="pointer"
                onClick={() => setGoalId(goal.id)}
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
        <Box>
          <HStack>
            <Text>{goal.name}</Text>
            <Text>${(goalRaised / 10 ** 24).toFixed(2)}</Text>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <Tag>{getGoalStatus()}</Tag>
        </Box>
      </Flex>
    </Card>
  );
};
