import React, { useEffect, useState } from "react";
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
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Link,
  Flex,
  Spacer,
  Input,
  Center,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputLeftAddon,
  Divider,
} from "@chakra-ui/react";
import { Card } from "./Card";
import { Alien } from "phosphor-react";
// import Image from "next/image";
import { CaretLeft, CaretRight, CircleWavyCheck } from "phosphor-react";
import { ProjectProps, TeamMemberProps } from "../types/project.types";
import { useGetProjectDetails } from "../hooks/projects";
import { useRouter } from "next/router";
import moment from "moment";
const FundingSummary = (props: { id: number }) => {
  const router = useRouter();
  const { isLoading, data: project } = useGetProjectDetails(props.id);

  const [amountToFund, setAmountToFund] = useState<number>(0);
  const [fundingNeeded, setFundingNeeded] = useState<number | undefined>(
    undefined
  );
  const [lockUpPeriod, setLockUpPeriod] = useState<number | undefined>(
    undefined
  );
  const handleChange = (event: any) => setAmountToFund(event.target.value);

  useEffect(() => {
    if (project) {
      const [currentFundingGoal] = project.kickstarter.goals.filter(
        (g) => g.desired_amount > project.kickstarter.total_deposited
      );
      const raised =
        project.kickstarter.id === 0
          ? project.kickstarter.total_deposited
          : currentFundingGoal.desired_amount -
            project.kickstarter.total_deposited;
      setFundingNeeded(parseInt(currentFundingGoal.desired_amount) / 10 ** 24);
      const lockup = moment(currentFundingGoal.unfreeze_timestamp).diff(
        moment(project.kickstarter?.close_timestamp),
        "months"
      );
      setLockUpPeriod(lockup);
    }
  }, [project]);

  if (isLoading) return <>Loading</>;

  return (
    <Box as="section" p={{ base: "3", md: "10" }}>
      <Link
        color="indigo.500"
        fontSize={"sm"}
        onClick={() => router.push(`/project/${project.id}`)}
      >
        <Flex>
          <CaretLeft size={20} /> Back to project
        </Flex>
      </Link>
      <Text
        mt="22"
        fontSize="3xl"
        lineHeight="9"
        fontWeight="semibold"
        color="gray.500"
      >
        Staking summary
      </Text>
      <SimpleGrid columns={2} spacing={30}>
        <Box>
          <Card>
            <Stack>
              <Stack
                spacing={{ base: "1", md: "2" }}
                direction={{ base: "column", md: "row" }}
              >
                <Avatar src={project.avatarUrl} boxSize="20" />
                <Text as="h2" fontWeight="bold" fontSize="xl">
                  {project.name}
                </Text>
                {project.verified && <CircleWavyCheck size={24} />}
              </Stack>
              <Text mt="2">{project.motto}</Text>
              <Spacer />
              <Flex>
                <Box>
                  <Text>FUNDING NEEDED</Text>
                  <Text fontSize="2xl" lineHeight="8" fontWeight="bold">
                    {fundingNeeded?.toFixed(2)}
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Text>LOCKUP PERIOD</Text>
                  <Text fontSize="2xl" lineHeight="8" fontWeight="bold">
                    {lockUpPeriod} days
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Card>
        </Box>
        <Box
          px={{ base: "4", md: "6" }}
          py={{ base: "5", md: "6" }}
          borderRadius="lg"
        >
          <Stack spacing={{ base: "3", md: "10" }}>
            <Card bg="light">
              <Stack>
                <Text fontSize="3xl" lineHeight="9" fontWeight="medium">
                  Your investment
                </Text>
                <Text
                  fontSize="md"
                  lineHeight="8"
                  fontWeight="medium"
                  color="gray.400"
                >
                  Amount of stNEAR to fund
                </Text>
                <InputGroup>
                  <InputLeftAddon>
                    <Alien size={32} color="indigo" />
                  </InputLeftAddon>
                  <Input
                    placeholder="0"
                    value={amountToFund}
                    onChange={handleChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm">
                      Max
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text
                  fontSize="sm"
                  lineHeight="5"
                  fontWeight="normal"
                  color="gray.500"
                >
                  This is the total amount to invest taken of your available
                  stNEARs. If you wish to add more, please stake more NEAR
                  first.
                </Text>
                <Card>
                  <Stack spacing="4">
                    <Text fontSize="large" color="gray.400">
                      YOUR RETURNS
                    </Text>
                    <Stack>
                      <Flex>
                        <Text
                          fontSize="md"
                          lineHeight="6"
                          fontWeight="semibold"
                          color="gray.500"
                        >
                          $GLA Tokens (Rewards)
                        </Text>
                        <Spacer />
                        <Text
                          fontSize="md"
                          lineHeight="6"
                          fontWeight="bold"
                          color="gray.900"
                        >
                          0
                        </Text>
                      </Flex>
                      <Divider />
                      <Flex>
                        <Text
                          fontSize="md"
                          lineHeight="6"
                          fontWeight="semibold"
                          color="gray.500"
                        >
                          Lockup end date
                        </Text>
                        <Spacer />
                        <Text
                          fontSize="md"
                          lineHeight="6"
                          fontWeight="bold"
                          color="gray.900"
                        >
                          {moment(project.kickstarter?.close_timestamp).format(
                            "MMMM Do, YYYY"
                          )}
                        </Text>
                      </Flex>
                    </Stack>
                  </Stack>
                </Card>
              </Stack>
            </Card>

            <Stack align="center">
              <Button
                colorScheme="blue"
                isFullWidth
                size="lg"
                onClick={() => router.push(`/project/success/${project.id}`)}
              >
                Invest {amountToFund} stNEAR from {}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default FundingSummary;
