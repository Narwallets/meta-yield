import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
  useBreakpointValue,
  Flex,
  Circle,
  Image,
  Avatar,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ProjectProps } from "../../types/project.types";
import { isOpenPeriod, timeLeftToFund, yoctoToDollarStr } from "../../lib/util";
import { fetchStNearPrice } from "../../queries/prices";
import FundButton from "./FundButon";

const ActiveProject = (props: { data: ProjectProps }) => {
  const projectData = props.data;
  const [totalRaised, setTotalRaised] = useState("");
  const tagColor = useColorModeValue("gray.600", "gray.300");
  const borderRadius = useBreakpointValue({ base: "md", md: "xl" });
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const stNEARPrice = await fetchStNearPrice();
      if (projectData?.kickstarter?.total_deposited) {
        setTotalRaised(
          yoctoToDollarStr(
            projectData?.kickstarter?.total_deposited,
            stNEARPrice
          )
        );
      }
    })();
  }, [projectData]);

  if (!projectData)
    return (
      <Box
        as="section"
        pt={{ base: "50", md: "100" }}
        pb={{ base: "12", md: "24" }}
      >
        <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
          No Active Project
        </Text>
      </Box>
    );

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      key={projectData.slug}
      p={0}
      mt={10}
      boxShadow="sm"
      rounded="lg"
    >
      <Flex
        borderRadius={borderRadius}
        minW={{ base: "100%", lg: "400px" }}
        minH={310}
        backgroundColor={"black"}
        alignItems={"center"}
      >
        <Image
          src={projectData.imageUrl}
          alt="project"
          borderRadius="xl"
          fit="cover"
          maxWidth={{ base: "100%", lg: "400px" }}
        />
      </Flex>
      <Box mr="10" ml="10">
        <Stack
          spacing={{ base: "1", md: "2" }}
          direction={{ base: "column", md: "row" }}
        >
          <Circle boxShadow="xl" ml="-8" mb="2">
            <Circle m="2" overflow={"hidden"}>
              {projectData.avatarUrl && (
                <Avatar src={projectData.avatarUrl} boxSize="10" />
              )}
            </Circle>
          </Circle>
        </Stack>
        <Stack
          spacing={{ base: "1", md: "2" }}
          direction={{ base: "column", md: "row" }}
        >
          <Text as="h2" mr={"10px"} fontWeight="bold" fontSize="2xl">
            {projectData.name}
          </Text>
          <Image
            src={"/check.svg"}
            alt="check"
            width={"16px"}
            height={"16px"}
          />
        </Stack>
        <Text mt="2">{projectData.description}</Text>
        <Wrap shouldWrapChildren mt="5" fontWeight={700} color={tagColor}>
          {projectData.tags &&
            projectData.tags.map((tag: string) => (
              <Tag
                backgroundColor={"indigo.100"}
                key={tag}
                color="inherit"
                px="3"
              >
                {tag}
              </Tag>
            ))}
        </Wrap>
      </Box>
      <Box>
        <Stack minW={190} spacing="10">
          <VStack align="flex-start" spacing="1">
            {isOpenPeriod(projectData.kickstarter?.open_timestamp) &&
              timeLeftToFund(projectData.kickstarter?.close_timestamp) && (
                <>
                  <Text fontSize="xs" fontWeight="700">
                    {" "}
                    TIME LEFT
                  </Text>
                  <Text fontSize="md" color="emphasized">
                    {timeLeftToFund(projectData.kickstarter?.close_timestamp)}
                  </Text>
                </>
              )}

            <Stack align="flex-start" spacing="4">
              <Text mt={5} fontSize="xs" fontWeight="700">
                TOKENOMICS
              </Text>
              <Text mt={14} fontSize="md" color="emphasized">
                <b>${totalRaised} </b> raised
              </Text>
              <Text mt={14} color="emphasized" fontSize="md">
                <b>{projectData.kickstarter?.total_supporters}</b> supporters
              </Text>
              {
                // projectData?.verified && <CircleWavyCheck size={24} />
              }
            </Stack>

            <Stack mt={10} align="flex-start" spacing="4">
              <FundButton
                show={true}
                completed={!!projectData.kickstarter?.active}
                onClick={() => router.push(`/project/${projectData.id}`)}
              ></FundButton>
            </Stack>
          </VStack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ActiveProject;
