import React, { useEffect, useState } from "react";
import {
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
import ProgressGoal from "./ProgressGoal";
import { ProjectStatus } from "./ProjectDetails";

const GoalsProgressCard = (props: { kickstarter: KickstarterProps, projectStatus: ProjectStatus }) => {
  const kickstarter = props.kickstarter as KickstarterProps;
  const projectStatus = props.projectStatus as ProjectStatus;

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

  const getCurrentGoalId = () => {
    if (kickstarter?.active) 
      return getCurrentFundingGoal()?.id
    if (kickstarter?.successful)
      return kickstarter?.winner_goal_id
    return undefined;
  }

  const [currentGoalId, { setGoalId }] = useGoal({
    maxGoal: kickstarter && kickstarter.goals ? kickstarter.goals.length : 0,
    initialGoal: getCurrentGoalId()
  });

  useEffect(() => {
    if (kickstarter && kickstarter.goals) {
      const goal = kickstarter.goals.find((g) => g.id === currentGoalId);
    }
  }, [currentGoalId, kickstarter]);
  if (!props || !props.kickstarter) return <></>;
  return (
    <Card>
      <Text fontWeight={700} color={'gray.400'} fontSize='xs'>GOALS</Text>
      <Container paddingTop={10}  maxW={'container.lg'}>
          <Stack  direction={{ base: "column", md: "column" }}>
            {kickstarter.goals.map((goal) => (
              <Box key={goal.id}>
                <Goal
                  key={goal.id}
                  kickstarterGoal={goal}
                  isActive={currentGoalId === goal.id}
                  isCompleted={parseInt(kickstarter.total_deposited) >= parseInt(goal.desired_amount)}
                  isFirstGoal={goal.id === 0}
                  isLastGoal={kickstarter.goals.length === goal.id + 1}
                  totalDeposited={parseInt(kickstarter.total_deposited)}
                  projectStatus={projectStatus}
                />
              </Box>
            ))}
          </Stack>
      </Container>
    </Card>
  );
};

export default GoalsProgressCard;
