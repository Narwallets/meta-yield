import React, { useEffect, useState } from "react";
import { HStack, Stack, Text, Flex, Spacer } from "@chakra-ui/react";
import Card from "./Card";
import { KickstarterProps } from "../../types/project.types";
import moment from "moment";
import { timeLeftToFund, yoctoToDollarStr, yton } from "../../lib/util";
import { getContractMetadata } from "../../lib/near";
import { fetchStNearPrice } from "../../queries/prices";
const FundingStatusCard = (props: { kickstarter: KickstarterProps }) => {
  const kickstarter = props.kickstarter as KickstarterProps;
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [totalRaised, setTotalRaised] = useState("");
  useEffect(() => {
    (async () => {
      const contractMetadata = await getContractMetadata(
        kickstarter?.token_contract_address
      );
      if (contractMetadata) setTokenSymbol(contractMetadata.symbol);
      const stNEARPrice = await fetchStNearPrice();
      setTotalRaised(yoctoToDollarStr(kickstarter?.total_deposited, stNEARPrice));
    })();
  }, [kickstarter?.token_contract_address, kickstarter?.total_deposited]);
  return (
    <Card w={'100%'}> 
      <Stack >
        <Text fontSize="sm" fontWeight="subtle">
          TOTAL DEPOSITED
        </Text>
        <HStack>
        <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
          {yton(kickstarter?.total_deposited) } stNEAR
        </Text>
        <Text fontSize="l" >(  ${totalRaised} USD)</Text>
        </HStack>
        
      </Stack>
      <Flex  mt={10}>
        <Stack>
          <Text fontSize="sm" fontWeight="subtle">
            SUPPORTERS
          </Text>
          <Text fontSize="2xl" fontWeight="bold" lineHeight="8">
            {kickstarter?.total_supporters}
          </Text>
        </Stack>
        <Spacer />
        <Stack>
          {
            timeLeftToFund(kickstarter?.close_timestamp) && (
              <>
                <Text fontSize="sm" fontWeight="subtle">
                  LEFT TO FUND
                </Text>
                <Text fontSize="2xl" fontWeight="bold" lineHeight="8">
                  { 
                    timeLeftToFund(kickstarter?.close_timestamp)
                  } 
                </Text>
              </>
            )
          }
          {
            !timeLeftToFund(kickstarter?.close_timestamp) && (
              <>
                <Text fontSize="sm" fontWeight="subtle">
                    Status
                </Text>
                <Text fontSize="2xl" fontWeight="bold" lineHeight="8">
                   Finished
                </Text>
              </>
            )
          }
          
        </Stack>
        <Spacer />
        <Stack>
          <Text fontSize="sm" fontWeight="subtle">
            TOKEN
          </Text>
          <Text fontSize="2xl" fontWeight="bold" lineHeight="8">
            {tokenSymbol}
          </Text>
        </Stack>
      </Flex>
    </Card>
  );
};

export default FundingStatusCard;
