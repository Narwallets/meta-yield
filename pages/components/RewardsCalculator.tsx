import React, { useEffect, useState } from "react";
import {
  HStack,
  Stack,
  Text,
  Input,
  Center,
  Select
} from "@chakra-ui/react";
import { Card } from "./Card";
export const RewardsCalculator = () => {
  return (
    <Card>
      <Stack spacing="6">
        <Text fontSize="sm" fontWeight="subtle">
          REWARDS CALCULATOR
        </Text>

        <Select placeholder="Select a goal" size="lg">
          <option value="low">Low Cap</option>
          <option value="mid">Mid Cap</option>
          <option value="top">Top Cap</option>
        </Select>
        <Text fontSize="sm" fontWeight="subtle">
          AMOUNT OF STNEAR
        </Text>
        <Input variant="outline" size="md" placeholder="0"></Input>
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
              0
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
