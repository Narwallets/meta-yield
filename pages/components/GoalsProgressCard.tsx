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
import Card from "./Card";
import {
  KickstarterGoalProps,
  KickstarterProps,
} from "../../types/project.types";
import Goal from "./Goal";
import { useGoal } from "../../hooks/useGoal";
import moment from "moment";
import { isOpenPeriod } from "../../lib/util";
const GoalsProgressCard = (props: { kickstarter: KickstarterProps }) => {
  const kickstarter = props.kickstarter as KickstarterProps;
  const getCurrentFundingGoal = () => {
    if (kickstarter && kickstarter.goals) {
      const [current] = kickstarter.goals.filter(
        (g) =>
          parseInt(g.desired_amount) > parseInt(kickstarter.total_deposited)
      );
      if (!current) {
        return kickstarter?.goals[kickstarter.goals.length - 1];
      }
      return current;
    }
    return undefined;
  };
  const [goal, setGoal] = useState<KickstarterGoalProps>();
  const [goalRaised, setGoalRaised] = useState(0);
  const [goalProgress, setGoalProgress] = useState(0);
  const [goalStatus, setGoalStatus] = useState<string | undefined>(undefined);
  const [currentGoalId, { setGoalId }] = useGoal({
    maxGoal: kickstarter && kickstarter.goals ? kickstarter.goals.length : 0,
    initialGoal: getCurrentFundingGoal()
      ? getCurrentFundingGoal()?.id
      : undefined,
  });
  const getGoalStatus = () => {
    const goal = getCurrentFundingGoal();
    if (goal) {
      const desiredAmount = parseInt(goal.desired_amount);
      const deposited = parseInt(kickstarter.total_deposited);
      if (isOpenPeriod(kickstarter.open_timestamp)) {
        if (moment().valueOf() > kickstarter.close_timestamp) {
          if (deposited < desiredAmount) {
            return "Timeout";
          } else return "Completed";
        }
        return "In Progress...";
      } else {
        return "Coming soon...";
      }
    }
    return "";
  };
  useEffect(() => {
    if (kickstarter && kickstarter.goals) {
      setGoal(kickstarter?.goals[0]);
      const goal = kickstarter.goals.find((g) => g.id === currentGoalId);
      if (goal) {
        const goalDesiredAmount = parseInt(goal.desired_amount);
        const deposited = parseInt(kickstarter.total_deposited);
        const raised =
          currentGoalId === 0
            ? deposited
            : deposited > goalDesiredAmount
            ? deposited
            : goalDesiredAmount - deposited;
        setGoal(goal);
        setGoalRaised(raised);
        setGoalProgress((raised * 100) / goalDesiredAmount);
        setGoalStatus(getGoalStatus());
      }
    }
    console.log("@current", currentGoalId)
  }, [currentGoalId, kickstarter]);
  if (!props || !props.kickstarter) return <></>;
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

export default GoalsProgressCard;
