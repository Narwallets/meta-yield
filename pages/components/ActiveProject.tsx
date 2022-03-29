import * as React from "react";
import {
  Box,
  Button,
  HStack,
  VStack,
  Icon,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
  StackDivider,
  Heading,
  useBreakpointValue,
  SimpleGrid,
  AvatarBadge,
} from "@chakra-ui/react";
// import { HiCash, HiLocationMarker, HiShieldCheck } from "react-icons/hi";
import { Card } from "./Card";
import { Tags } from "./Tags";
import Image from "next/image";
// import { ProjectAvatar } from "./ProjectAvatar";
// import avatar from "../../public/avatar.png";
// import projectImage from "../project.png";
import { CaretRight, CircleWavyCheck } from "phosphor-react";
import { ProjectProps } from "./Home";
export const ActiveProject = (props: { projects: ProjectProps[] }) => {
  const project  = props.projects[0];
  const avatarColor = useColorModeValue("white", "gray.700");
  const iconColor = useColorModeValue("indigo.500", "indigo.200");
  const headerTextSize = useBreakpointValue({ base: "xs", lg: "sm" });
  return (
    <Box as="section" pt={{ base: "4", md: "8" }} pb={{ base: "12", md: "24" }}>
      <Text size={headerTextSize} fontWeight="medium">
        Active Project
      </Text>
      <Card>
        <SimpleGrid columns={3} spacing={10}>
          <Box>
            <Image
              src={project.imageUrl}
              alt="project"
              width="400"
              height="310"
              layout="responsive"
              objectFit="cover"
            />
          </Box>
          <Box>
            <Stack
              spacing={{ base: "1", md: "2" }}
              direction={{ base: "column", md: "row" }}
            >
              <Image
                src={project.avatarUrl}
                alt="project"
                width="60"
                height="60"
              />
            </Stack>
            <Stack
              spacing={{ base: "1", md: "2" }}
              direction={{ base: "column", md: "row" }}
            >
              <Text as="h2" fontWeight="bold" fontSize="xl">
                {project.name}
              </Text>
              <CircleWavyCheck size={24} />
            </Stack>
            <Text mt="2">{project.description}</Text>
            <Wrap
              shouldWrapChildren
              mt="5"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {project.tags && project.tags.map((tag) => (
                <Tag key={tag} color="inherit" px="3">
                  {tag}
                </Tag>
              ))}
            </Wrap>
          </Box>
          <Box>
            <Stack spacing="10">
              <VStack align="flex-start" spacing="1 ">
                <Text fontSize="sm" fontWeight="subtle">
                  {" "}
                  Time Left
                </Text>
                <Text fontSize="md" color="emphasized">
                  14 days
                </Text>
              </VStack>
              <VStack align="flex-start" spacing="1">
                <Text fontSize="sm" fontWeight="subtle">
                  TOKENOMICS
                </Text>
                <Text fontSize="md" color="emphasized">
                  $12,3456,678 raised
                </Text>
              </VStack>
              <Stack align="flex-start" spacing="4">
                <Text color="emphasized" fontSize="md">
                  3,526 supporters
                </Text>
              </Stack>
              <Stack align="flex-start" spacing="4">
                <Button
                  colorScheme="indigo"
                  rightIcon={<CaretRight size={20} />}
                >
                  Fund Now
                </Button>
              </Stack>
            </Stack>
          </Box>
        </SimpleGrid>
      </Card>
    </Box>
  );
};
