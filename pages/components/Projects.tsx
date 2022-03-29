import { Box } from "@chakra-ui/react";
import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectProps } from "./Home";
export const Projects = (props: { projects: ProjectProps[] }) => {
  const { projects } = props;
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <ProjectGrid>
        {projects.filter((project: ProjectProps) => !project.active).map((project: ProjectProps) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </Box>
  );
};
