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
  useGetWinnerVotedProjects,
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
import WinnerProject from "./components/WinnerProject";
import LatestNews from "./components/LatestNews";

const Home = ({news}: any) => {
  const { data, isLoading } = useGetActiveProjects();
  const { data: dataFinished, isLoading: isLoadingFinished } =
    useGetFinishedProjects();
  const { data: dataToVote, isLoading: isLoadingVote } = useGetProjectsToVote();
  const { data: projectsToVote, isLoading: isLoadingVotes } =
    useGetProjectsVotes();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { data: comingSoon, isLoading: comingSoonFinished } =
    useComingSoonProjects();
  
  const { data: winner, isLoading: winnerFinished } =
    useGetWinnerVotedProjects();
  
  console.log("news", news)

  if (isLoading && isLoadingFinished && isLoadingVote) return <PageLoading />;
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
                <div hidden={p.hidden} key={p.kickstarter.id}>
                  <ActiveProject data={p} />
                </div>
              ))}
            </Stack>
          )}

          {
          /* DISABLED UNTIL THE ZOOMLAND CAMPAING START */
          /* winner && winner.length > 0 && (
            <Box
              p={{ base: 5, md: 30 }}
              id="fund"
              as="section"
            >
              <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
                Coming soon ...
              </Text>
              {winner.map((p: any, index: number) => (
                <div key={index}>
                  <WinnerProject data={p} />
                </div>
              ))}
            </Box>
              )*/
          }

          {projectsToVote && projectsToVote.length > 0 && (
            <Stack
              hidden={false}
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
                  Vote for your favorite project and help it start its campaign with a boost!
                </Text>
              </VStack>
              {/* The Marquee was hidden until resuming the campaing */}
              <Box
                borderTop={"1px solid #000000"}
                borderBottom={"1px solid #000000"}
                bg={"#FEE75C"}
                py={"10px"}
                w={"110vw"}
                position={"relative"}
                left={-10}
                hidden={false} 
              >
                <Marquee gradient={false}>
                  <Text fontWeight={500}>
                    - 💰 1st place: gets 50,000 stNEAR  📣 - 💰 2nd place: gest 20,000 stNEAR 📣 - 💰 1st place: gets 50,000 stNEAR  📣 - 💰 2nd place: gest 20,000 stNEAR 📣 - 💰 1st place: gets 50,000 stNEAR  📣 - 💰 2nd place: gest 20,000 stNEAR 📣
                  </Text>
                </Marquee>
              </Box>

              <Flex
                align={"center"}
                direction={{ base: "column", md: "row" }}
                justify={{ base: "center", md: "flex-end" }}
              >
                <Text hidden={true} w={{ base: "100%", md: "439px" }} fontSize={"16px"}>
                  The Project in the Leaderboard with the most votes will become
                  an active Fundraising Campaign.
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
                <Box hidden={p.hidden} key={p.kickstarter.id}>
                  <ActiveProject data={p} />
                </Box>
              ))}
            </Box>
          )}
          {dataFinished && dataFinished.length > 0 && (
            <Box id="completed" p={{ base: 5, md: 30 }} as="section">
              <Text
                textAlign={{ base: "center", md: "start" }}
                fontSize={{ base: "2xl", md: "4xl" }}
                lineHeight="10"
                fontWeight="bold">
                Funding Completed
              </Text>
              {dataFinished.map((p: any) => (
                <Box hidden={p.hidden} key={p.kickstarter.id}>
                  <ActiveProject data={p} />
                </Box>
              ))}
            </Box>
          )}
        </VStack>
        <HowItWorks />
        {news && <LatestNews news={news}></LatestNews>}
        <FrequentlyAskQuestion shortVersion={true} />
      </Box>
    </>
  );
};

export default Home;
