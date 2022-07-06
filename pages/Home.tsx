import Hero from "./components/Hero";
import ActiveProject from "./components/ActiveProject";
import Projects from "./components/Projects";
import HowItWorks from "./components/HowItWorks";
import { AlertDialogOverlay, Box, Container, Text } from "@chakra-ui/react";
import * as React from "react";
import { useGetActiveProjects, useGetFinishedProjects, useGetProjectsToVote } from "./../hooks/projects";
import ErrorHandlerHash from "./components/ErrorHandlerHash";
import PageLoading from "./components/PageLoading";
import FrequentlyAskQuestion from "./components/FrequentlyAskQuestion";
import VoteProject from "./components/VoteProject";
import { useStoreProjects } from "../stores/projects";
import { useEffect, useState } from "react";
import { getVotes } from "../lib/near";

const Home = () => {
  const { data, isLoading } = useGetActiveProjects();
  const { data: dataFinished, isLoading: isLoadingFinished } = useGetFinishedProjects();
  const { data: dataToVote, isLoading: isLoadingVote } = useGetProjectsToVote();
  const { projectsToVote, setProjects } = useStoreProjects();

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
        <Box
          id="projects"
          as="section"
          pt={{ base: "50", md: "100" }}
          pb={{ base: "12", md: "24" }}
        >

          {data && data.length > 0 && (
            <>
              <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
                Funding Now!
              </Text>
              {
                data.map((p: any) => (
                  <div key={p.kickstarter.id}>
                    <ActiveProject data={p} />
                  </div>
                ))
              }
            </>
          )}
        </Box>
        { dataFinished && dataFinished.length > 0 && (
          <Box id="projects"
            as="section"
            pb={{ base: "12", md: "24" }}>
            <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
              Funding Completed 
            </Text>
            {dataFinished.map((p: any) => (
              <div key={p.kickstarter.id}>
                <ActiveProject data={p} />
              </div>
            ))}
          </Box>
        )}
        { projectsToVote && projectsToVote.length > 0 && (
          <Box id="projects"
            as="section"
            pb={{ base: "12", md: "24" }}>
            <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
              Vote 
            </Text>
            {
              projectsToVote.map((p: any) => {
                const myVotes =  getVotes(p.id + '|' +p.slug);
                return (
                  <div key={p.id}>
                    <VoteProject data={p}/>
                  </div>
                )
              })
            }
          </Box>
        )}
        <HowItWorks />
        <FrequentlyAskQuestion shortVersion={true}/>
      </Container>
    </>
  );
};

export default Home;
