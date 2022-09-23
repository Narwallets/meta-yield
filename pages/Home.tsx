import Hero from "./components/Hero";
import ActiveProject from "./components/ActiveProject";
import HowItWorks from "./components/HowItWorks";
import {
  AlertDialogOverlay,
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Spacer,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import {
  useComingSoonProjects,
  useGetActiveProjects,
  useGetFinishedProjects,
  useGetProjectsToVote,
  useGetProjectsVotes,
} from "./../hooks/projects";
import ErrorHandlerHash from "./components/ErrorHandlerHash";
import PageLoading from "./components/PageLoading";
import FrequentlyAskQuestion from "./components/FrequentlyAskQuestion";
import VoteProject from "./components/VoteProject";
import { useStoreProjects } from "../stores/projects";
import { useEffect, useState } from "react";
import { getVotes } from "../lib/near";
import { getEndVotingPeriod, yton } from "../lib/util";
import Marquee from "react-fast-marquee";

const Home = () => {
  const { data, isLoading } = useGetActiveProjects();
  const { data: dataFinished, isLoading: isLoadingFinishedProjects } =
    useGetFinishedProjects();
  const { data: projectsToVote, isLoading: isLoadingVotes } =
    useGetProjectsVotes();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { data: comingSoon, isLoading: comingSoonFinished } =
    useComingSoonProjects();

  if (isLoading || isLoadingFinishedProjects || isLoadingVotes) return <PageLoading />;
  return (
    <>
      <Hero />
      <Box overflow={"hidden"} m={0} py={0} minW={"100%"}>
        <ErrorHandlerHash></ErrorHandlerHash>
        <VStack spacing={100}>
          {data && data.length > 0 && (
            <Stack
              p={{ base: 5, md: 30 }}
              id="fund"
              w={"100%"}
              spacing={{ base: 5, md: 30 }}
              as="section"
            >
              <Text
                textAlign={{ base: "center", md: "start" }}
                fontSize="4xl"
                lineHeight="10"
                fontWeight="bold"
              >
                Funding Now!
              </Text>
              {data.map((p: any) => (
                <div key={p.kickstarter.id}>
                  <ActiveProject data={p} />
                </div>
              ))}
            </Stack>
          )}

          {projectsToVote && projectsToVote.length > 0 && (
            <Stack
              id="vote"
              p={{ base: 5, md: 30 }}
              w={"100%"}
              spacing={{ base: 5, md: 50 }}
              bg={"#F9FAFB"}
              mb={50}
              as="section"
            >
              <VStack align={"flex-start"}>
                <Text fontSize={"16px"} color={"#120E28"}>
                  META VOTE
                </Text>
                <Text
                  w={{ base: "100%", md: "50%" }}
                  textAlign={{ base: "center", md: "start" }}
                  fontSize={{ base: "2xl", md: "4xl" }}
                  lineHeight="10"
                  fontWeight="bold"
                >
                  Vote for your Favorite Project to Launch a Fundraising
                  Campaign
                </Text>
              </VStack>
              <Box
                borderTop={"1px solid #000000"}
                borderBottom={"1px solid #000000"}
                bg={"#FEE75C"}
                py={"10px"}
                w={"110vw"}
                position={"relative"}
                left={-10}
              >
                <Marquee gradient={false}>
                  <Text fontWeight={500}>
                    - 💰 Winner starts with 20,000 stNEAR 📣 - 💰 Winner starts
                    with 20,000 stNEAR 📣 - 💰 Winner starts with 20,000 stNEAR
                    📣 - 💰 Winner starts with 20,000 stNEAR 📣 - 💰 Winner
                    starts with 20,000 stNEAR 📣 -
                  </Text>
                </Marquee>
              </Box>

              <Flex
                align={"center"}
                direction={{ base: "column", md: "row" }}
                justify={{ base: "center", md: "space-between" }}
              >
                <Text w={{ base: "100%", md: "439px" }} fontSize={"16px"}>
                  The Project in the Leaderboard with the most votes will become
                  an active Fundraising Campaign with an initial 20,000 stNEAR
                  in financial support.
                </Text>
                <VStack mr={200}>
                  <Text
                    hidden={isMobile}
                    textAlign={{ base: "center", md: "start" }}
                    opacity={0.5}
                    fontSize={"lg"}
                    lineHeight="10"
                    fontWeight="bold"
                  >
                    Voting ends in
                  </Text>
                  <Text
                    hidden={isMobile}
                    textAlign={{ base: "center", md: "start" }}
                    fontSize={"40px"}
                    lineHeight="10"
                    fontWeight="bold"
                  >
                    {getEndVotingPeriod()}
                  </Text>
                </VStack>
              </Flex>

              <VStack hidden={!isMobile}>
                <Text
                  textAlign={{ base: "center", md: "start" }}
                  opacity={0.5}
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                >
                  ENDS IN{" "}
                </Text>
                <Text
                  textAlign={{ base: "center", md: "start" }}
                  fontSize={{ base: "4xl", md: "40px" }}
                  fontWeight="bold"
                >
                  {getEndVotingPeriod()}
                </Text>
              </VStack>
              <Stack
                px={{ base: 5, md: "80px" }}
                spacing={1}
                flexWrap={"wrap"}
                direction={{ base: "column", md: "column" }}
              >
                {projectsToVote.map((p: any, index: number) => {
                  return (
                    <Box key={p.id} scale={index === 0 ? 1.1 : 1}>
                      <VoteProject position={index} data={p} />
                    </Box>
                  );
                })}
              </Stack>
            </Stack>
          )}
          {comingSoon && comingSoon.length > 0 && (
            <Box
              p={{ base: 5, md: 30 }}
              id="projects"
              as="section"
              pb={{ base: "12", md: "24" }}
            >
              <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
                Coming soon
              </Text>
              {comingSoon.map((p: any) => (
                <div key={p.kickstarter.id}>
                  <ActiveProject data={p} />
                </div>
              ))}
            </Box>
          )}
          {dataFinished && dataFinished.length > 0 && (
            <Box id="completed" p={{ base: 5, md: 30 }} as="section">
              <Text
                textAlign={{ base: "center", md: "start" }}
                fontSize={{ base: "2xl", md: "4xl" }}
                lineHeight="10"
                fontWeight="bold"
              >
                Funding Completed
              </Text>
              {dataFinished.map((p: any) => (
                <div key={p.kickstarter.id}>
                  <ActiveProject data={p} />
                </div>
              ))}
            </Box>
          )}
        </VStack>

        <HowItWorks />
        <FrequentlyAskQuestion shortVersion={true} />
      </Box>
    </>
  );
};

export default Home;
