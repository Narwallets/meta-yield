import Hero from "./components/Hero";
import ActiveProject from "./components/ActiveProject";
import Projects from "./components/Projects";
import HowItWorks from "./components/HowItWorks";
import { Box, Text } from "@chakra-ui/react";
import * as React from "react";
import { useGetActiveProjects } from "./../hooks/projects";
import ErrorHandlerHash from "./components/ErrorHandlerHash";
const Home = () => {
  const { data, isLoading } = useGetActiveProjects();
  if (isLoading) return <></>;
  return (
    <>
      <ErrorHandlerHash></ErrorHandlerHash>
      <Box px={{ base: "2rem", lg: "8rem" }}>
        <Hero />
        <Box
          id="projects"
          as="section"
          pt={{ base: "50", md: "100" }}
          pb={{ base: "12", md: "24" }}
        >
          <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
            Current Projects
          </Text>
          {data.open.map((p: any) => (
            <div key={p.kickstarter.id}>
              <ActiveProject data={p} />
            </div>
          ))}
        </Box>
        {data.active.length > 0 && <Projects data={data.active} />}

        <HowItWorks />
      </Box>
    </>
  );
};

export default Home;
