import React, { useEffect, useState } from "react";
import { HStack, Stack, Text, Progress, Flex, Spacer, Tag } from "@chakra-ui/react";
import { Card } from "./Card";
export const GoalsProgressCard = () => {
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
            Timeout
          </Tag>
        </Flex>
          <Stack>
            <Progress
              colorScheme="indigo"
              value={100}
             size="lg"
            />
            <Text fontSize="sm" fontWeight="subtle">
              LOW CAP
            </Text>
            <Text fontSize="xxs" fontWeight="bold">
              15.000
            </Text>
          </Stack>
          <Stack>
            <Progress
              colorScheme="indigo"
              value={20}
              size="lg"
            />
            <Text fontSize="sm" fontWeight="subtle">
              MID CAP
            </Text>
            <Text fontSize="xxs" fontWeight="bold">
              25.000
            </Text>
          </Stack>
          <Stack>
            <Progress
              colorScheme="indigo"
              value={0}
              size="lg"
            />
            <Text fontSize="sm" fontWeight="subtle">
              TOP CAP
            </Text>
            <Text fontSize="xxs" fontWeight="bold">
              55.000
            </Text>
          </Stack>
      </Stack>
    </Card>
  );
};
