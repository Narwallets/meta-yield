import Hero from "./components/Hero";
import ActiveProject from "./components/ActiveProject";
import Projects from "./components/Projects";
import HowItWorks from "./components/HowItWorks";
import { Box, Container, Text } from "@chakra-ui/react";
import * as React from "react";
import { useComingSoonProjects, useGetActiveProjects, useGetFinishedProjects } from "./../hooks/projects";
import ErrorHandlerHash from "./components/ErrorHandlerHash";
import PageLoading from "./components/PageLoading";
import FrequentlyAskQuestion from "./components/FrequentlyAskQuestion";

const Home = () => {
  const { data, isLoading } = useGetActiveProjects();
  const { data: dataFinished, isLoading: isLoadingFinished } = useGetFinishedProjects();
  const { data: comingSoon, isLoading: comingSoonFinished } = useComingSoonProjects();

  // check if data is still loading
  if (isLoading && isLoadingFinished) return <PageLoading />;

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
          <>
            <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
              Funding Completed 
            </Text>
            {dataFinished.map((p: any) => (
              <div key={p.kickstarter.id}>
                <ActiveProject data={p} />
              </div>
            ))}
          </>
        )}
        <HowItWorks />
        <FrequentlyAskQuestion shortVersion={true}/>
      </Container>
    </>
  );
};

export default Home;
