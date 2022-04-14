import { Hero } from "./components/Hero";
import { ActiveProject } from "./components/ActiveProject";
import { Projects } from "./components/Projects";
import { HowItWorks } from "./components/HowItWorks";
import { Box, Text } from "@chakra-ui/react";
import * as React from "react";
import { useGetActiveProjects } from "./hooks/projects";
const Home = () => {
  const { data, isLoading } = useGetActiveProjects();
  if (isLoading) return <>Loading...</>;
  return (
    <>
      <Box pr={123} pl={123}>
        <Hero />
          <Box
            as="section"
            pt={{ base: "50", md: "100" }}
            pb={{ base: "12", md: "24" }}
          >
            <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
              Current Project
            </Text>
            {data.open.map((p: any) => (
              <div  key={p.kickstarter.id}>
                <ActiveProject data={p} />
              </div>
            ))}
          </Box>

        <Projects data={data.open} />
        <HowItWorks />
      </Box>
    </>
  );
};

export default Home;
