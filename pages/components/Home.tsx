import { Hero } from "./Hero";
import { ActiveProject } from "./ActiveProject";
import { Projects } from "./Projects";
import { useGetProjects } from "../hooks/projects";
import { Box } from "@chakra-ui/react";
export interface ProjectProps {
  id: string;
  name: string;
  motto: string;
  imageUrl: string;
  avatarUrl: string;
  description: string;
  verified: boolean;
  active: boolean;
  tags: string[];
  campaignText: string;
}

const Home = () => {
  const { data, isLoading } = useGetProjects();
  if (isLoading) return <>Loading...</>;
  return (
    <>
      <Box pr={123} pl={123}>
        <Hero />
        <ActiveProject
          projects={data.filter((project: ProjectProps) => project.active)}
        />
        <Projects projects={data} />
      </Box>
    </>
  );
};

export default Home;
