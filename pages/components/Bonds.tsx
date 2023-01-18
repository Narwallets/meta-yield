import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Text, Link, Stack, Image, VStack } from "@chakra-ui/react";
import * as React from "react";
import { getConfig } from "../../config";
import { yton } from "../../lib/util";
interface Props {
  supporter_deposit: string;
  rewards: string;
  available_rewards: string;
  deposit_in_near: string;
  isUnfreeze: boolean;
  lockupDate: string;
  project: any;
  cliffDate: string;
  endDate: string;
}

const Bonds = ({
  supporter_deposit,
  rewards,
  available_rewards,
  deposit_in_near,
  isUnfreeze,
  lockupDate,
  project,
  cliffDate,
  endDate,
}: Props) => {
  const nearConfig = getConfig(
    process.env.NEXT_PUBLIC_VERCEL_ENV || "production"
  );
  return (
    <>
      <Stack w={"100%"}>
        {(yton(supporter_deposit) > 0 || yton(rewards) > 0) && (
          <Text>BONDS</Text>
        )}
        {
          // show if there are deposits left to claim
          yton(supporter_deposit) > 0 ? (
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={"1rem"}
              p={3}
              boxShadow="lg"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack
                direction={"row"}
                w={{ base: "full", md: "auto" }}
                justifyContent={{
                  base: "space-around",
                  md: "space-between",
                }}
                alignItems="center"
              >
                <Image
                  boxSize={{ base: "80px", md: "40px" }}
                  objectFit="cover"
                  src="/near_icon.svg"
                  alt="near"
                />
                <VStack h={"80px"}>
                  <Text color={"grey"} fontSize={"xxs"} fontWeight={700}>
                    NEAR{" "}
                  </Text>
                  <Text color={"black"} fontWeight={700}>
                    {yton(deposit_in_near)}{" "}
                  </Text>
                  <Text>{} </Text>
                </VStack>
              </Stack>
              <Stack
                direction={"row"}
                w={{ base: "full", md: "auto" }}
                justifyContent={{
                  base: "space-around",
                  md: "space-between",
                }}
                alignItems="center"
              >
                <VStack h={"80px"}>
                  <Text color={"grey"} fontSize={"xxs"} fontWeight={700}>
                    BOND DUE
                  </Text>
                  <Text fontWeight={700} fontSize={"14px"}>
                    {lockupDate}
                  </Text>
                </VStack>

                <VStack h={"80px"}>
                  <Text color={"grey"} fontSize={"xxs"} fontWeight={700}>
                    AVAILABLE{" "}
                  </Text>
                  <Text>{isUnfreeze ? yton(deposit_in_near) : 0} </Text>
                </VStack>
              </Stack>
            </Stack>
          ) : null
        }
        {
          // show if there are pending rewards tokens to claim
          yton(rewards) > 0 ? (
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={"1rem"}
              p={3}
              boxShadow="lg"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack
                direction={"row"}
                w={{ base: "full", md: "auto" }}
                justifyContent={{
                  base: "space-around",
                  md: "space-between",
                }}
                alignItems="center"
              >
                <Image
                  boxSize={{ base: "80px", md: "40px" }}
                  objectFit="cover"
                  src={project.kickstarter.project_token_icon}
                  alt="ptoken"
                />
                <VStack h={"80px"} justify={"space-between"}>
                  <Text color={"grey"} fontSize={"xxs"} fontWeight={700}>
                    {project.kickstarter.project_token_symbol}{" "}
                  </Text>
                  <Text color={"black"} fontSize={"xxs"} fontWeight={700}>
                    {yton(rewards)}{" "}
                  </Text>
                </VStack>
              </Stack>
              <Stack
                direction={"row"}
                w={{ base: "full", md: "auto" }}
                justifyContent={{
                  base: "space-around",
                  md: "space-between",
                }}
                alignItems="center"
              >
                <VStack h={"80px"} justify={"space-between"}>
                  <Text color={"grey"} fontSize={"xxs"} fontWeight={700}>
                    BOND DUE
                  </Text>
                  <Text fontWeight={700} fontSize={"14px"}>
                    {cliffDate} TO <br></br> {endDate}{" "}
                  </Text>
                </VStack>
                <VStack h={"80px"} justify={"space-between"}>
                  <Text color={"grey"} fontSize={"xxs"} fontWeight={700}>
                    AVAILABLE{" "}
                  </Text>
                  <Text>{yton(available_rewards)} </Text>
                </VStack>
              </Stack>
            </Stack>
          ) : null
        }
        {yton(supporter_deposit) > 0 || yton(rewards) > 0 ? (
          <Stack alignItems="flex-end">
            <Link href={nearConfig.metabondUrl} isExternal>
              See and manage your bonds in Meta Bonds{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Stack>
        ) : null}
      </Stack>
    </>
  );
};

export default Bonds;
