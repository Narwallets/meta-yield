import { Hero } from "./components/Hero";
import { ActiveProject } from "./components/ActiveProject";
import { Projects } from "./components/Projects";
import { HowItWorks } from "./components/HowItWorks";
import { Box } from "@chakra-ui/react";
import * as React from "react";
import { useGetActiveProjects } from "./hooks/projects";
import { useState, useEffect } from "react";
import { useStore } from "./stores/wallet";
import { ProjectProps } from "./types/project.types";
const Home = () => {
  const { data, isLoading } = useGetActiveProjects();
  if (isLoading) return <>Loading...</>;
  return (
    <>
      <Box pr={123} pl={123}>
        <Hero />
        <ActiveProject data={data.active[0]} />;
        <Projects data={data.open} />
        <HowItWorks />
      </Box>
    </>
  );
};

export default Home;
