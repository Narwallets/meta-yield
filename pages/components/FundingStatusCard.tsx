import React, { useEffect, useState } from "react";
import { HStack, Stack, Text, Flex, Spacer, Box } from "@chakra-ui/react";
import Card from "./Card";
import { KickstarterProps } from "../../types/project.types";
import {
  isOpenPeriod,
  timeLeftToFund,
  yoctoToDollarStr,
  yton,
} from "../../lib/util";
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
      setTotalRaised(
        yoctoToDollarStr(kickstarter?.total_deposited, stNEARPrice)
      );
    })();
  }, [kickstarter?.token_contract_address, kickstarter?.total_deposited]);

  return (
    <Card w={"100%"} mx="0">
      <Stack spacing={4}>
        <Stack>
          <Text fontSize="sm" fontWeight="subtle">
            TOTAL DEPOSITED
          </Text>
          <Stack
            direction={{ base: "column", sm: "row" }}
            alignItems={{ base: "flex-start", sm: "center" }}
          >
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              lineHeight="10"
              fontWeight="bold"
            >
              {yton(kickstarter?.total_deposited)} stNEAR
            </Text>
            
          </Stack>
          <Stack>
            <Text fontSize="lg" whiteSpace={"nowrap"}>
            ~ ${totalRaised} USD
              </Text>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Box>
            <Text fontSize="sm" fontWeight="subtle">
              SUPPORTERS
            </Text>
            <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" lineHeight="8">
              {kickstarter?.total_supporters}
            </Text>
          </Box>
          <Spacer />
          <Box>
            {isOpenPeriod(kickstarter?.open_timestamp) &&
              timeLeftToFund(kickstarter?.close_timestamp) && (
                <>
                  <Text fontSize="sm" fontWeight="subtle">
                    LEFT TO FUND
                  </Text>
                  <Text
                    fontSize={{ base: "lg", md: "2xl" }}
                    fontWeight="bold"
                    lineHeight="8"
                  >
                    {timeLeftToFund(kickstarter?.close_timestamp)}
                  </Text>
                </>
              )}
            {!isOpenPeriod(kickstarter?.open_timestamp) && (
              <>
                <Text fontSize="sm" fontWeight="subtle">
                  OPEN IN
                </Text>
                <Text
                  fontSize={{ base: "lg", md: "2xl" }}
                  fontWeight="bold"
                  lineHeight="8"
                >
                  {timeLeftToFund(kickstarter?.open_timestamp)}
                </Text>
              </>
            )}
            {!timeLeftToFund(kickstarter?.close_timestamp) && (
              <>
                <Text fontSize="sm" fontWeight="subtle">
                  STATUS
                </Text>
                <Text
                  fontSize={{ base: "lg", md: "2xl" }}
                  fontWeight="bold"
                  lineHeight="8"
                >
                  Finished
                </Text>
              </>
            )}
          </Box>
          <Spacer />
          <Box>
            <Text fontSize="sm" fontWeight="subtle">
              TOKEN
            </Text>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight="bold"
              lineHeight="8"
            >
              {tokenSymbol}
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};

export default FundingStatusCard;
