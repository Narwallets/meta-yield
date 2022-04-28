import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  HStack,
  VStack,
  Icon,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
  StackDivider,
  Heading,
  useBreakpointValue,
  SimpleGrid,
  AvatarBadge,
  Square,
  Flex,
  Circle,
  AspectRatio,
  Spacer,
} from "@chakra-ui/react";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";
import { CaretRight, CircleWavyCheck } from "phosphor-react";
import { ProjectProps } from "../../types/project.types";
import { useRouter } from "next/router";
import { truncateText } from "../../utils/textHandlers";
import { useGetProjectDetails, useGetProjects } from "../../hooks/projects";
import moment from "moment";
import { timeLeftToFund, yoctoToDollarStr } from "../../lib/util";
import { fetchNearPrice } from "../../queries/prices";
import FundButton from "./FundButon";

const ActiveProject = (props: { data: ProjectProps }) => {
  const projectData = props.data;
  const [totalRaised, setTotalRaised] = useState("");
  const avatarColor = useColorModeValue("white", "gray.700");
  const iconColor = useColorModeValue("indigo.500", "indigo.200");
  const tagColor = useColorModeValue("gray.600", "gray.300");
  const borderRadius = useBreakpointValue({ base: "md", md: "xl" });
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const nearPrice = await fetchNearPrice();
      if (projectData?.kickstarter?.total_deposited) {
        setTotalRaised(
          yoctoToDollarStr(projectData?.kickstarter?.total_deposited, nearPrice)
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
    <Card key={projectData.slug} p={0} mt={10}>
      <Flex>
        <Box
          borderRadius={borderRadius}
          minW={400}
          minH={310}
          backgroundColor={"black"}
        >
          <Flex alignItems={"center"} height={310}>
            {projectData.imageUrl && (
              <Image
                src={projectData.imageUrl}
                alt="project"
                width="400"
                height={"100%"}
                layout={"fixed"}
              />
            )}
          </Flex>
        </Box>
        <Box mr="10" ml="10">
          <Stack
            spacing={{ base: "1", md: "2" }}
            direction={{ base: "column", md: "row" }}
          >
            <Circle boxShadow="xl" ml="-8" mb="2">
              <Circle m="2" overflow={"hidden"}>
                {projectData.avatarUrl && (
                  <Image
                    src={projectData.avatarUrl}
                    alt="project"
                    width="60"
                    height="60"
                  />
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
            <VStack align="flex-start" spacing="1 ">
              {
                timeLeftToFund(projectData.kickstarter?.close_timestamp) && (
                  <>
                    <Text fontSize="xs" fontWeight="700">
                      {" "}
                      TIME LEFT
                    </Text>
                    <Text fontSize="md" color="emphasized">
                      {
                        timeLeftToFund(projectData.kickstarter?.close_timestamp)
                      }
                    </Text></>
                )
              }

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
      </Flex>
    </Card>
  );
};

export default ActiveProject;
