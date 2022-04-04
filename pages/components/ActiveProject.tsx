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
  Square,
  Flex,
  Circle,
} from "@chakra-ui/react";
import { Card } from "./Card";
import Image from "next/image";
import Link from "next/link";
import { CaretRight, CircleWavyCheck } from "phosphor-react";
import { ProjectProps } from "../Home";
import { useRouter } from "next/router";
export const ActiveProject = (props: { projects: ProjectProps[] }) => {
  const project = props.projects[0];
  const avatarColor = useColorModeValue("white", "gray.700");
  const iconColor = useColorModeValue("indigo.500", "indigo.200");
  const router = useRouter();
  return (
    <Box as="section" pt={{ base: "50", md: "100" }} pb={{ base: "12", md: "24" }}>
      <Text fontSize="4xl"  lineHeight="10" fontWeight="bold">
        Current Project
      </Text>
      <Card p={0} mt={10}>
        <Flex>
          <Box borderRadius={useBreakpointValue({ base: "md", md: "xl" })} minW={400} minH={310} backgroundColor={'black'}>
            <Flex  alignItems={'center'} height={310}>
              <Image
                src={project.imageUrl}
                alt="project"
                width="400"
                height={'100%'}
                layout={'fixed'}
              />
            </Flex>
          </Box>
          <Box mr="10" ml="10">
            <Stack
              spacing={{ base: "1", md: "2" }}
              direction={{ base: "column", md: "row" }}
            >
              <Circle boxShadow='xl'  ml="-8" mb="2" >
                <Circle m="2" overflow={'hidden'}>
                  <Image
                    src={project.avatarUrl}
                    alt="project"
                    width="60"
                    height="60"
                  />
                </Circle>
              </Circle>
            </Stack>
            <Stack
              spacing={{ base: "1", md: "2" }}
              direction={{ base: "column", md: "row" }}
            >
              <Text as="h2" fontWeight="bold" fontSize="24px">
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
                {project.verified && <CircleWavyCheck size={24} />}
              </Stack>
              <Stack align="flex-start" spacing="4">
                <Button
                  w={'100%'}
                  colorScheme="indigo"
                  rightIcon={<CaretRight size={20} />}
                  onClick={() => router.push(`/project/${project.id}`)}
                >
                  Fund Now
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};
