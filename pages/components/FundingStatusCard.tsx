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
import moment from "moment";
export const FundingStatusCard = (props: { kickstarter: KickstarterProps }) => {
  const kickstarter = props.kickstarter;
  return (
    <Card>
      <Stack>
        <Text fontSize="sm" fontWeight="subtle">
          TOTAL RAISED
        </Text>
        <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
          {kickstarter.total_deposited}
        </Text>
      </Stack>
      <HStack spacing="20">
        <Stack>
          <Text fontSize="sm" fontWeight="subtle">
            SUPPORTERS
          </Text>
          <Text fontSize="2xl" fontWeight="bold" lineHeight="8">
            {kickstarter.total_supporters}
          </Text>
        </Stack>
        <Stack>
          <Text fontSize="sm" fontWeight="subtle">
            LEFT TO FUND
          </Text>
          <Text fontSize="2xl" fontWeight="bold" lineHeight="8">
            {moment().diff(
              moment(kickstarter.close_timestamp),
              "days"
            )}{" "}
            days
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
