import {
  BoxProps,
  Divider,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { KickstarterGoalProps } from "../types/project.types";
import { GoalCircle } from "./GoalCircle";

interface GoalProps extends BoxProps {
  kickstarterGoal: KickstarterGoalProps;
  isCompleted: boolean;
  isActive: boolean;
  isLastGoal: boolean;
  isFirstGoal: boolean;
}

export const Goal = (props: GoalProps) => {
  const {
    isActive,
    isCompleted,
    isLastGoal,
    isFirstGoal,
    kickstarterGoal,
    ...stackProps
  } = props;
  const isMobile = useBreakpointValue({ base: true, md: false });

  const orientation = useBreakpointValue<"horizontal" | "vertical">({
    base: "vertical",
    md: "horizontal",
  });

  return (
    <Stack
      spacing="4"
      direction={{ base: "row", md: "column" }}
      flex="1"
      {...stackProps}
    >
      <Stack
        spacing="0"
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Divider
          display={isMobile ? "none" : "initial"}
          orientation={orientation}
          borderWidth="1px"
          borderColor={
            isFirstGoal
              ? "transparent"
              : isCompleted || isActive
              ? "accent"
              : "inherit"
          }
        />
        <GoalCircle isActive={isActive} isCompleted={isCompleted} />
        <Divider
          orientation={orientation}
          borderWidth="1px"
          borderColor={
            isCompleted ? "accent" : isLastGoal ? "transparent" : "inherit"
          }
        />
      </Stack>
      <Stack
        spacing="0.5"
        pb={isMobile && !isLastGoal ? "8" : "0"}
        align={{ base: "start", md: "center" }}
      >
        <Text color="emphasized" fontWeight="medium">
          {kickstarterGoal.name}
        </Text>
        <Text color="emphasized" fontWeight="medium">
          ${(parseInt(kickstarterGoal.desired_amount) / 10 ** 24).toFixed(2)}
        </Text>
      </Stack>
    </Stack>
  );
};
