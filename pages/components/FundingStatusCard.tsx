import React, { useEffect, useState } from "react";
import { HStack, Stack, Text, Flex, Spacer, Box } from "@chakra-ui/react";
import Card from "./Card";
import { KickstarterProps } from "../../types/project.types";
import {
  formatToLocaleNear,
  getPeriod,
  PERIOD,
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
          <Text fontSize={'xs'} color="gray.400" fontWeight="700">
            TOTAL DEPOSITED
          </Text>
          <Stack
            direction={{ base: "column", sm: "row" }}
            alignItems={{ base: "flex-start", sm: "center" }}
          >
            <HStack>
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                lineHeight="10"
                fontWeight="bold"
              >
                {formatToLocaleNear(yton(kickstarter?.total_deposited))} 
              </Text>
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                color="gray.400"
                lineHeight="10"
                fontWeight="bold"
              >
                stNEAR
              </Text>
            </HStack>
          </Stack>
          <Stack>
            <Text fontSize="md" fontWeight={500} color={'black'} whiteSpace={"nowrap"}>
            ~ ${totalRaised} USD
              </Text>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Box>
            <Text fontSize={'xs'} color="gray.400" fontWeight="700">
              SUPPORTERS
            </Text>
            <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" lineHeight="8">
              {kickstarter?.total_supporters}
            </Text>
          </Box>
          <Spacer />
          <Box>
            {getPeriod(kickstarter) === PERIOD.OPEN &&
              timeLeftToFund(kickstarter?.close_timestamp) && (
                <>
                  <Text fontSize={'xs'} color="gray.400" fontWeight="700">
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
            {getPeriod(kickstarter) === PERIOD.NOT_OPEN && (
              <>
                <Text fontSize={'xs'} color="gray.400" fontWeight="700">
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
            {getPeriod(kickstarter) === PERIOD.CLOSE && (
              <>
                <Text fontSize={'xs'} color="gray.400" fontWeight="700">
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
            <Text fontSize={'xs'} color="gray.400" fontWeight="700">
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
