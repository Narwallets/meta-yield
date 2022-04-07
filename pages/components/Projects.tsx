import { Box, Text, Stack } from "@chakra-ui/react";
import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectProps } from "../Home";
export const Projects = (props: { projects: ProjectProps[] }) => {
  const { projects } = props;
  return (
    <Box
      mx="auto"
      
      py={{ base: "6", md: "8", lg: "12" }}
      as="section"
      id="projects"
    >
      <Stack spacing="10">
        <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
          Other Projects
        </Text>
        <ProjectGrid>
          {projects
            .filter((project: ProjectProps) => !project.active)
            .map((project: ProjectProps) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </ProjectGrid>
      </Stack>
    </Box>
  );
};
