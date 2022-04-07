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
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Progress,
  Flex,
  Spacer,
  Input,
  Center,
  Circle,
} from "@chakra-ui/react";
import { Card } from "./Card";
// import Image from "next/image";
import { CaretRight, CircleWavyCheck } from "phosphor-react";
import { ProjectProps, TeamMemberProps } from "../Home";
import { useGetProjects } from "../hooks/projects";
import parse from "html-react-parser";
import { RewardsCalculator } from "./RewardsCalculator";
import { useRouter } from "next/router";
import { GoalsProgressCard } from "./GoalsProgressCard";
import { FundingStatusCard } from "./FundingStatusCard";
const ProjectDetails = (props: { id: number }) => {
  const router = useRouter();
  const { data, isLoading } = useGetProjects();
  const [project, setProject] = useState<ProjectProps | undefined>(undefined);
  const tagsColor = useColorModeValue("gray.600", "gray.300");
  const totalRaisedSize = useBreakpointValue({ base: "sm", md: "md" });
  const totalRaisedColor = useColorModeValue("green.500", "green.500");
  useEffect(() => {
    if (data) {
      setProject(data.find((p: ProjectProps) => p.id === props.id));
    }
  }, [data, props]);
  if (!project) return <>Loading...</>;
  return (
    <Box pr={123} pl={123} as="section" mx="auto" >
      <SimpleGrid columns={2} spacing={30}>
        <Box>
          <Stack
            spacing={{ base: "1", md: "2" }}
            direction={{ base: "column", md: "row" }}
          >
            <Circle position={'relative'} backgroundColor={'white'} maxH={'55px'} maxW={'55px'} mr={2} boxShadow='xl' >
              <Circle maxW={'60px'} m="2" overflow={'hidden'}>
                <Image
                  src={project.avatarUrl}
                  alt="project"
                  width="48px"
                  height="48px"
                />
              </Circle>
            </Circle>
          
            <Text as="h2" fontWeight="bold" fontSize="4xl">
              {project.name}
            </Text>
            {
                project.verified &&  <Image
                                            src={'/check.svg'}
                                            alt="check"
                                            width={'16px'}
                                            height={'16px'}
                                          />
              }
          </Stack>
          <Text mt="2">{project.motto}</Text>
          <Wrap shouldWrapChildren mt="5" color={tagsColor}>
            {project.tags &&
              project.tags.map((tag) => (
                <Tag key={tag} color="inherit" px="3">
                  {tag}
                </Tag>
              ))}
          </Wrap>
          <Stack
            mt={5}
            mb={10}
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "3", md: "10" }}
            align="flex-start"
          >
            <Image
              src={project?.imageUrl}
              alt="project"
              borderRadius="xl"
              fit="cover"
            />
          </Stack>
          <Stack
            spacing={{ base: "1", md: "2" }}
            direction={{ base: "column", md: "row" }}
          >
            <Box>
              <Tabs>
                <TabList>
                  <Tab>Campaign</Tab>
                  <Tab>Team</Tab>
                  <Tab>FAQ</Tab>
                  <Tab>Milestones</Tab>
                  <Tab>Documents</Tab>
                  <Tab>About</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Text fontSize="sm" fontWeight="subtle">
                      CAMPAIGN
                    </Text>
                    <Text fontSize="lg" fontWeight="extrabold">
                      Our Vision
                    </Text>
                    {parse(project.campaignHtml)}
                  </TabPanel>
                  <TabPanel>
                    <Text fontSize="sm" fontWeight="subtle">
                      TEAM
                    </Text>
                    <Text fontSize="lg" fontWeight="extrabold">
                      Our founding team
                    </Text>
                    <Team team={project.team} />
                  </TabPanel>
                  <TabPanel>
                    <Text fontSize="sm" fontWeight="subtle">
                      FAQ
                    </Text>
                  </TabPanel>
                  <TabPanel>
                    <Text fontSize="sm" fontWeight="subtle">
                      MIESTONES
                    </Text>
                    <Text fontSize="lg" fontWeight="extrabold">
                      Our Timeline
                    </Text>
                  </TabPanel>
                  <TabPanel>
                    <Text fontSize="sm" fontWeight="subtle">
                      DOCUMENTS
                    </Text>
                  </TabPanel>
                  <TabPanel>
                    <Text fontSize="sm" fontWeight="subtle">
                      ABOUT
                    </Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Stack>
        </Box>
        <Box
          px={{ base: "4", md: "6" }}
          py={{ base: "5", md: "6" }}
          borderRadius="lg"
        >
          <Stack spacing={{ base: "3", md: "10" }}>
            <FundingStatusCard />
            <GoalsProgressCard />
            <Stack align="center">
              <Button
                colorScheme="blue"
                isFullWidth
                size="lg"
                onClick={() => router.push(`/project/fund/${project.id}`)}
              >
                Fund Now
              </Button>
            </Stack>
            <RewardsCalculator />
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

const Team = (props: { team: TeamMemberProps[] }) => {
  const team = props.team;
  return (
    <Stack divider={<StackDivider />} spacing="4">
      {team.map((member) => (
        <Stack key={member.id} fontSize="sm" px="4" spacing="4">
          <Stack direction="row" justify="space-between" spacing="4">
            <HStack spacing="3">
              <Avatar src={member.avatarUrl} boxSize="10" />
              <Box>
                <Text fontWeight="medium" color="emphasized">
                  {member.name}
                </Text>
                {/* <Text color="muted">{member.handle}</Text> */}
              </Box>
            </HStack>
          </Stack>
          <Text
            color="muted"
            sx={{
              "-webkit-box-orient": "vertical",
              "-webkit-line-clamp": "2",
              overflow: "hidden",
              display: "-webkit-box",
            }}
          >
            {member.bio}
          </Text>
        </Stack>
      ))}
    </Stack>
  );
};

export default ProjectDetails;
