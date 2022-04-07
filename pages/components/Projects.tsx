import { Box, Text, Stack } from "@chakra-ui/react";
import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectProps } from "../Home";
import { useGetProjects } from "../hooks/projects";
export const Projects = (props: {}) => {
  const { data, isLoading } = useGetProjects();
  if (isLoading) return <>Loading...</>;
  return (
    <Box
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
      as="section"
      id="projects"
    >
      <Stack spacing="10">
        <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
          Other Projects
        </Text>
        <ProjectGrid>
          {data
            .filter((project: ProjectProps) => !project.active)
            .map((project: ProjectProps) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </ProjectGrid>
      </Stack>
    </Box>
  );
};
