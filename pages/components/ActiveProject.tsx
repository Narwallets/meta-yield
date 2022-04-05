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
              <Text as="h2" mr={'10px'} fontWeight="bold" fontSize="2xl">
                {project.name}
              </Text>
              <Image
                    src={'/check.svg'}
                    alt="check"
                    width={'16px'}
                    height={'16px'}
                  />
            </Stack>
            <Text mt="2">{project.description}</Text>
            <Wrap
              shouldWrapChildren
              mt="5"
              fontWeight={700}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {project.tags && project.tags.map((tag) => (
                <Tag backgroundColor={"indigo.100"} key={tag} color="inherit" px="3">
                  {tag}
                </Tag>
              ))}
            </Wrap>
          </Box>
          <Box>
            <Stack minW={190} spacing="10">
              <VStack align="flex-start" spacing="1 ">
                <Text fontSize="xs" fontWeight="700">
                  {" "}
                  TIME LEFT
                </Text>
                <Text fontSize="md" color="emphasized">
                  14 days
                </Text>
              </VStack>
              <Stack align="flex-start" spacing="1">
                <Text fontSize="xs" fontWeight="700">
                  TOKENOMICS
                </Text>
                <Text mt={14} fontSize="md" color="emphasized">
                  <b>$12,3456,678 </b> raised
                </Text>
                <Text mt={14} color="emphasized" fontSize="md">
                  <b>3,526</b> supporters
                </Text>
                {project.verified && <CircleWavyCheck size={24} />}
              </Stack>
              <Stack align="flex-start" spacing="4">
                <Button
                  w={'100%'}
                  h={'48px'}
                  size={'md'}
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
