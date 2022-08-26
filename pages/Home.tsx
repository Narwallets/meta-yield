import Hero from "./components/Hero";
import ActiveProject from "./components/ActiveProject";
import Projects from "./components/Projects";
import HowItWorks from "./components/HowItWorks";
import { AlertDialogOverlay, Box, Container, Divider, Flex, HStack, Spacer, Stack, StackDivider, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import * as React from "react";
import { useComingSoonProjects, useGetActiveProjects, useGetFinishedProjects, useGetProjectsToVote } from "./../hooks/projects";
import ErrorHandlerHash from "./components/ErrorHandlerHash";
import PageLoading from "./components/PageLoading";
import FrequentlyAskQuestion from "./components/FrequentlyAskQuestion";
import VoteProject from "./components/VoteProject";
import { useStoreProjects } from "../stores/projects";
import { useEffect, useState } from "react";
import { getVotes } from "../lib/near";
import { getEndVotingPeriod } from "../lib/util";

const Home = () => {
  const { data, isLoading } = useGetActiveProjects();
  const { data: dataFinished, isLoading: isLoadingFinished } = useGetFinishedProjects();
  const { data: dataToVote, isLoading: isLoadingVote } = useGetProjectsToVote();
  const { projectsToVote, setProjects } = useStoreProjects();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { data: comingSoon, isLoading: comingSoonFinished } = useComingSoonProjects();

  // check if data is still loading
  const sortByVotes = (projects: any) =>
     projects.sort(function (a: any, b: any) {
      if (a.votes > b.votes) {
        return -1;
      }
      if (a.votes < b.votes) {
        return 1;
      }
      return 0;
    });
  

  useEffect(() => {
      (async () => {
        if (dataToVote) {
          const promises: Array<Promise<any>> = [];
          // Data of projects to vote from _data.ts
          dataToVote.map((project: any)=>{
            // Create array of getVotes promises for each project to vote
            promises.push(getVotes(project.id + '|' +project.slug))
          })
          const votesList = await Promise.all(promises)
          // add votes to the projects
          const dataWithVotes = dataToVote.map((p: any, i:number)=> { return {...p, votes: votesList[i]}})
          setProjects(sortByVotes(dataWithVotes));
        }
      })();
  },[dataToVote])

  if (isLoading && isLoadingFinished && isLoadingVote) return <PageLoading />;
  return (
    <>
      <ErrorHandlerHash></ErrorHandlerHash>
      <Container maxW="container.xl">
        <Hero />
        <VStack mt={'150px'} spacing={100}>
          

          {data && data.length > 0 && (
            <Stack
            id="fund"
            w={'100%'}
            spacing={{base: 5, md: 30}}
            as="section"
          >
              <Text textAlign={{base:'center', md: 'start'}} fontSize="4xl" lineHeight="10" fontWeight="bold">
                Funding Now!
              </Text>
              {
                data.map((p: any) => (
                  <div key={p.kickstarter.id}>
                    <ActiveProject data={p} />
                  </div>
                ))
              }
            </Stack>
          )}
          
          { projectsToVote && projectsToVote.length > 0 && (
            <Stack id="vote"               
              w={'100%'}
              spacing={{base: 5, md: 30}}
              as="section">
              <HStack justify={{base:'center', md: 'space-between'}}>
                <Text  w={'50%'}  textAlign={{base:'center', md: 'start'}}  fontSize={{base:'2xl', md:"4xl"}} lineHeight="10" fontWeight="bold">
                    You Next Favorite Project to Launch a Fundraising Campaign
                </Text>
                <Box  w={'389px'}  p={'35px'} bg={'#2B2B2B'}>
                  <Text fontSize={'24px'} fontWeight={500} color={'white'}>Fundraising Campaign Kick Start of 20,000 stNEAR</Text>
                </Box>
              </HStack>
              <HStack justify={{base:'center', md: 'space-between'}}>
                <Text w={'439px'} fontSize={'16px'}>
                  Every week, the Project of the Leaderboard with the most votes will become an active Fundraising Campaign with an initial 20,000 stNEAR in financial support.
                </Text>
                <VStack >
                  <Text hidden={isMobile} textAlign={{base:'center', md: 'start'}} opacity={0.5} fontSize={"lg"} lineHeight="10" fontWeight="bold">Voting ends in</Text>
                  <Text hidden={isMobile} textAlign={{base:'center', md: 'start'}} fontSize={"2xl"} lineHeight="10" fontWeight="bold">{getEndVotingPeriod()}</Text>
                </VStack>
              </HStack>
              
              <VStack hidden={!isMobile}>
                <Text textAlign={{base:'center', md: 'start'}} opacity={0.5} fontSize={{base:'xl', md:"2xl"}}  fontWeight="bold">ENDS IN </Text>
                <Text  textAlign={{base:'center', md: 'start'}} fontSize={{base:'4xl', md:"40px"}}  fontWeight="bold">{getEndVotingPeriod()}</Text>
              </VStack>
              <Stack spacing={1} flexWrap={'wrap'} direction={{base: 'column', md: 'column'}}>
              {
                projectsToVote.map((p: any) => {
                  const myVotes =  getVotes(p.id + '|' +p.slug);
                  return (
                      <VoteProject key={p.id} data={p}/>
                  )
                })
              }
              </Stack>
            </Stack>
          )}
          { comingSoon && comingSoon.length > 0 && (
            <Box
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
          { dataFinished && dataFinished.length > 0 && (
            <Box id="completed"
              as="section">
              <Text textAlign={{base:'center', md: 'start'}} fontSize={{base:'2xl', md:"4xl"}} lineHeight="10" fontWeight="bold">
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
        <FrequentlyAskQuestion shortVersion={true}/>
      </Container>
    </>
  );
};

export default Home;
