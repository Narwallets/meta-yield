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
export const FundingStatusCard = () => {
  return (
    <Card>
      <Stack>
        <Text fontSize="sm" fontWeight="subtle">
          TOTAL RAISED
        </Text>
        <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
          $0
        </Text>
      </Stack>
      <HStack spacing="20">
        <Stack>
          <Text fontSize="sm" fontWeight="subtle">
            SUPPORTERS
          </Text>
          <Text fontSize="2xl" fontWeight="bold" lineHeight="8">
            0
          </Text>
        </Stack>
        <Stack>
          <Text fontSize="sm" fontWeight="subtle">
            LEFT TO FUND
          </Text>
          <Text fontSize="2xl" fontWeight="bold" lineHeight="8">
            23 day/s
          </Text>
        </Stack>
        <Stack>
          <Text fontSize="sm" fontWeight="subtle">
            TOKEN
          </Text>
          <Text fontSize="2xl" fontWeight="bold" lineHeight="8">
            $GLA
          </Text>
        </Stack>
      </HStack>
    </Card>
  );
};
