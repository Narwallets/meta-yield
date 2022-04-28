import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Text,
  Spacer,
  Input,
  InputGroup,
  InputRightElement,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  InputLeftElement,
  InputLeftAddon,
  Square,
  Image,
  Badge,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { KickstarterGoalProps } from "../../types/project.types";
import { useRouter } from "next/router";
import moment from "moment";
import { fundToKickstarter, getBalance, withdraw } from "../../lib/near";
import { useStore } from "../../stores/wallet";
import { getCurrentFundingGoal, ntoy, yton } from "../../lib/util";
import { useFormik } from "formik";
import depositSchemaValidation from "../../validation/fundSchemaValidation";
import withdrawSchemaValidation from "../../validation/withdrawSchemaValidation";
const Funding = (props: { project: any; supportedDeposited: number }) => {
  const project = props.project;
  const supportedDeposited = props.supportedDeposited;
  const isWithdrawEnabled = supportedDeposited > 0;
  const router = useRouter();
  const { wallet } = useStore();

  const [amountDeposit, setAmountDeposit] = useState<number>(0);
  const [fundingNeeded, setFundingNeeded] = useState<number | undefined>(
    undefined
  );
  const [lockUpPeriod, setLockUpPeriod] = useState<number | undefined>(
    undefined
  );
  const [currentFundingGoal, setCurrentFundingGoal] =
    useState<KickstarterGoalProps>();
  const [estimatedRewards, setEstimatedRewards] = useState<number>(0);
  const handleChangeDeposit = (event: any) =>
    setAmountDeposit(event.target.value);

  const onMaxClickDeposit = async (event: any) =>
    formikDeposit.setFieldValue("amount_deposit", await getBalance(wallet!));
  const onMaxClickWithdraw = async (event: any) =>
    formikWithdraw.setFieldValue("amount_withdraw", supportedDeposited);

  const initialValuesDeposit: any = {
    amount_deposit: 0,
    balance: 0,
  };
  const formikDeposit = useFormik({
    initialValues: initialValuesDeposit,
    validationSchema: depositSchemaValidation,
    validateOnMount: true,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values: any) => {
      const result = await fundToKickstarter(
        wallet!,
        project.id,
        values.amount_deposit
      );
    },
  });

  const initialValuesWithdraw: any = {
    amount_withdraw: 0,
    supporterDeposited: 0,
  };

  const formikWithdraw = useFormik({
    initialValues: initialValuesWithdraw,
    validationSchema: withdrawSchemaValidation,
    validateOnMount: true,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values: any) => {
      const result = await withdrawAmount(ntoy(values.amount_withdraw));
    },
  });

  const withdrawAmount = async (amount: string) => {
    withdraw(wallet!, project.id, amount).then((val) => {
      console.log("Return withdraw", val);
    });
  };
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
    console.log("amount change", amountDeposit);
    if (currentFundingGoal) {
      const tokenAwardPerStnear: string =
        currentFundingGoal.tokens_to_release_per_stnear;
      setEstimatedRewards(yton(tokenAwardPerStnear) * amountDeposit);
    }
  }, [amountDeposit, currentFundingGoal]);

  useEffect(() => {
    async function setBalance() {
      formikDeposit.setFieldValue("balance", await getBalance(wallet!));
    }

    setBalance();
  }, []);

  if (!project) return <></>;
  return (
    <Tabs defaultIndex={isWithdrawEnabled ? 0 : 1}>
      <TabList>
        <Tab>Deposit</Tab>
        <Tab isDisabled={!isWithdrawEnabled}>Withdraw</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <HStack>
            <InputGroup>
              <InputLeftAddon>
                <Square minW="30px">
                  <Avatar boxSize="30px" objectFit="cover" src="/stnear.svg" />
                </Square>
              </InputLeftAddon>
              <Input
                id="amount_deposit"
                name="amount_deposit"
                placeholder="0"
                value={formikDeposit.values.amount_deposit}
                onPaste={formikDeposit.handleChange}
                onBlur={formikDeposit.handleBlur}
                onChange={(e) => {
                  handleChangeDeposit(e);
                  formikDeposit.handleChange(e);
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={onMaxClickDeposit}>
                  Max
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              colorScheme="blue"
              isFullWidth
              size="lg"
              disabled={!formikDeposit.isValid}
              onClick={(e: any) => formikDeposit.handleSubmit(e)}
            >
              Deposit
            </Button>
          </HStack>
          <Stack mt={4}>
            <Text
              fontSize="md"
              lineHeight="6"
              fontWeight="semibold"
              color="gray.500"
            >
              ESTIMATED REWARDS: {estimatedRewards}{" "}
              {project.kickstarter.project_token_symbol}
            </Text>
          </Stack>
        </TabPanel>
        <TabPanel>
          <HStack>
            <InputGroup>
              <InputLeftAddon>
                <Square minW="30px">
                  <Avatar boxSize="30px" objectFit="cover" src="/stnear.svg" />
                </Square>
              </InputLeftAddon>
              <Input
                id="amount_withdraw"
                name="amount_withdraw"
                placeholder="0"
                value={formikWithdraw.values.amount_withdraw}
                onPaste={formikWithdraw.handleChange}
                onBlur={formikWithdraw.handleBlur}
                onChange={formikWithdraw.handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={onMaxClickWithdraw}>
                  Max
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              colorScheme="blue"
              isFullWidth
              size="lg"
              disabled={!formikWithdraw.isValid}
              onClick={(e: any) => {
                formikWithdraw.handleSubmit(e);
              }}
            >
              Withdraw
            </Button>
          </HStack>
          <Stack mt={4}>
            <Text
              fontSize="md"
              lineHeight="6"
              fontWeight="semibold"
              color="gray.500"
            >
              CURRENT DEPOSITS: {supportedDeposited} STNEAR
            </Text>
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Funding;
