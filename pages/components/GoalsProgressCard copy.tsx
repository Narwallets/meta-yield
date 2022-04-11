import React, { useEffect, useState } from "react";
import {
  HStack,
  Stack,
  Text,
  Progress,
  Flex,
  Spacer,
  Tag,
} from "@chakra-ui/react";
import { Card } from "./Card";
import { KickstarterProps } from "../types/project.types";
export const GoalsProgressCard = (props: { kickstarter: KickstarterProps }) => {
  const kickstarter = props.kickstarter;
  return (
    <Card>
      <Stack spacing="6">
        <Flex>
          {" "}
          <Text fontSize="sm" fontWeight="subtle">
            PROGRESS
          </Text>
          <Spacer />{" "}
          <Tag
            size="md"
            borderRadius="full"
            variant="solid"
            colorScheme="orange"
          >
            GET FUNDING STATUS
          </Tag>
        </Flex>
        <Stack>
          {kickstarter.goals.map((goal) => (
            <Stack key={goal.id}>
              <Progress
                colorScheme="indigo"
                value={
                  (kickstarter.total_deposited * 100) / goal.desired_amount
                }
                size="lg"
              />
              <Text fontSize="sm" fontWeight="subtle">
                {goal.name}
              </Text>
              <Text fontSize="xxs" fontWeight="bold">
                ${goal.desired_amount}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};
