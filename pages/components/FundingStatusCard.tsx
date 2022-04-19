import React, { useEffect, useState } from "react";
import { HStack, Stack, Text } from "@chakra-ui/react";
import Card from "./Card";
import { KickstarterProps } from "../../types/project.types";
import moment from "moment";
import { yoctoToDollarStr } from "../../lib/util";
import { getContractMetadata } from "../../lib/near";
import { fetchNearPrice } from "../../queries/prices";
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
      const nearPrice = await fetchNearPrice();
      setTotalRaised(yoctoToDollarStr(kickstarter?.total_deposited, nearPrice));
    })();
  }, [kickstarter?.token_contract_address, kickstarter?.total_deposited]);
  return (
    <Card>
      <Stack>
        <Text fontSize="sm" fontWeight="subtle">
          TOTAL RAISED
        </Text>
        <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
          ${totalRaised}
        </Text>
      </Stack>
      <HStack spacing="20">
        <Stack>
          <Text fontSize="sm" fontWeight="subtle">
            SUPPORTERS
          </Text>
          <Text fontSize="2xl" fontWeight="bold" lineHeight="8">
            {kickstarter?.total_supporters}
          </Text>
        </Stack>
        <Stack>
          <Text fontSize="sm" fontWeight="subtle">
            LEFT TO FUND
          </Text>
          <Text fontSize="2xl" fontWeight="bold" lineHeight="8">
            { 
              moment(kickstarter?.close_timestamp).diff(moment(), "days") > 0 ? 
              `${moment(kickstarter?.close_timestamp).diff(moment(), "days")} days` : 
                moment(kickstarter?.close_timestamp).diff(moment(), "hours") > 1 ? 
                `${moment(kickstarter?.close_timestamp).diff(moment(), "hours")} hours` :
                `${moment(kickstarter?.close_timestamp).diff(moment(), "minutes")} minutes`            
            } 
          </Text>
        </Stack>
        <Stack>
          <Text fontSize="sm" fontWeight="subtle">
            TOKEN
          </Text>
          <Text fontSize="2xl" fontWeight="bold" lineHeight="8">
            ${tokenSymbol}
          </Text>
        </Stack>
      </HStack>
    </Card>
  );
};

export default FundingStatusCard;
