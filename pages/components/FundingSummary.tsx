import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Text,
  SimpleGrid,
  Avatar,
  Link,
  Flex,
  Spacer,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
  Square,
  Image,
  Divider,
} from "@chakra-ui/react";
import Card from "./Card";
import { Alien } from "phosphor-react";
import { CaretLeft, CaretRight, CircleWavyCheck } from "phosphor-react";
import { KickstarterGoalProps } from "../../types/project.types";
import { useGetProjectDetails } from "../../hooks/projects";
import { useRouter } from "next/router";
import moment from "moment";
import { fundToKickstarter, getBalance } from "../../lib/near";
import { useStore } from "./../../stores/wallet";
import { getCurrentFundingGoal, yton } from "../../lib/util";
import { useFormik } from "formik";
import fundKickstarterSchema from "../../validation/fundSchemaValidation";

const FundingSummary = (props: { id: any }) => {
  const kickstarter_id: number = props.id;
  const router = useRouter();
  const { wallet } = useStore();

  const { isLoading, data: project } = useGetProjectDetails(kickstarter_id);
  const [amount, setamount] = useState<number>(0);
  const [fundingNeeded, setFundingNeeded] = useState<number | undefined>(
    undefined
  );
  const [lockUpPeriod, setLockUpPeriod] = useState<number | undefined>(
    undefined
  );

  const [currentFundingGoal, setCurrentFundingGoal] =
    useState<KickstarterGoalProps>();
  const [estimatedRewards, setEstimatedRewards] = useState<number>(0);
  const handleChange = (event: any) => setamount(event.target.value);

  const onMaxClick = async (event: any) =>
    formik.setFieldValue("amount", await getBalance(wallet!));

  const initialValues: any = {
    amount: 0,
    balance: 0,
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: fundKickstarterSchema,
    validateOnMount: true,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values: any) => {
      const result = await fundToKickstarter(
        wallet!,
        kickstarter_id,
        values.amount
      );
      router.push(`/project/success/${project.id}`);
    },
  });

  useEffect(() => {
    if (project) {
      const current = getCurrentFundingGoal(
        project.kickstarter.goals,
        project.kickstarter.total_deposited
      );
      setCurrentFundingGoal(current);
      if (current) {
        setFundingNeeded(parseInt(current.desired_amount) / 10 ** 24);
        const lockup = moment(current.unfreeze_timestamp).diff(
          moment(project?.kickstarter?.close_timestamp),
          "months"
        );
        setLockUpPeriod(lockup);
      }
    }
  }, [project]);

  useEffect(() => {
    if (currentFundingGoal) {
      const tokenAwardPerStnear: string =
        currentFundingGoal.tokens_to_release_per_stnear;
      setEstimatedRewards(yton(tokenAwardPerStnear) * amount);
    }
  }, [amount]);

  useEffect(() => {
    async function setBalance() {
      formik.setFieldValue("balance", await getBalance(wallet!));
    }

    setBalance();
  }, []);

  if (isLoading && !project) return <></>;
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
                    {lockUpPeriod} month/s
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
                    <Square minW="30px">
                      <Image
                        boxSize="20px"
                        objectFit="cover"
                        src="/stnear.svg"
                        alt="stnear"
                      />
                    </Square>
                  </InputLeftAddon>
                  <Input
                    id="amount"
                    name="amount"
                    placeholder="0"
                    value={formik.values.amount}
                    onPaste={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={onMaxClick}>
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
                          {project.kickstarter.project_token_symbol} Tokens
                          (Rewards)
                        </Text>
                        <Spacer />
                        <Text
                          fontSize="md"
                          lineHeight="6"
                          fontWeight="bold"
                          color="gray.900"
                        >
                          {estimatedRewards}
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
                          {moment(
                            currentFundingGoal?.unfreeze_timestamp
                          ).format("MMMM Do, YYYY")}
                        </Text>
                      </Flex>
                    </Stack>
                  </Stack>
                </Card>
              </Stack>
            </Card>

            <Stack align="center">
              <Button
                colorScheme="indigo"
                isFullWidth
                size="lg"
                onClick={(e: any) => formik.handleSubmit(e)}
                disabled={!formik.isValid}
              >
                Invest {formik.values.amount} stNEAR from{" "}
                {wallet?.getAccountId()}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default FundingSummary;
