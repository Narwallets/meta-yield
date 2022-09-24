import {
  Box,
  BoxProps,
  Divider,
  Flex,
  HStack,
  Progress,
  Stack,
  Tag,
  Text,
  ThemingProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { useEffect, useState } from "react";
import { formatToLocaleNear, yton } from "../../lib/util";
import { KickstarterGoalProps } from "../../types/project.types";
import GoalCircle from "./GoalCircle";

interface ProgressGoalProps extends BoxProps {
  kickstarterGoal: KickstarterGoalProps;
  totalDeposited: number;
  progress: number;
  colorBar: ThemingProps;
  isCompleted?: boolean;
  isActive?: boolean;
  isLastGoal?: boolean;
  isFirstGoal?: boolean;
  
}

const ProgressGoal = (props: ProgressGoalProps) => {
  const {
    isActive,
    isCompleted,
    isLastGoal,
    isFirstGoal,
    colorBar,
    kickstarterGoal,
    totalDeposited,
    progress,
    ...stackProps
  } = props as ProgressGoalProps;

  if (!props) return <></>;
  return (
    <Progress h={'9px'} colorScheme={colorBar && colorBar.colorScheme} variant={colorBar && colorBar.variant}  ml={10} mt={1} mb={6} value={progress} />
  );
};

export default ProgressGoal;
