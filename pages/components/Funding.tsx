import React, { useEffect, useState } from "react";
import {
  Button,
  Stack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  InputLeftAddon,
  Square,
  Avatar,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import moment from "moment";
import { useFormik } from "formik";
import { KickstarterGoalProps } from "../../types/project.types";
import { fundToKickstarter, getBalance, withdraw } from "../../lib/near";
import { useStore as useWallet} from "../../stores/wallet";
import { useStore  as useBalance} from "../../stores/balance";
import { getCurrentFundingGoal, ntoy, yton } from "../../lib/util";
import depositSchemaValidation from "../../validation/fundSchemaValidation";
import withdrawSchemaValidation from "../../validation/withdrawSchemaValidation";

const Funding = (props: { project: any; supportedDeposited: number, showOnlyWithdraw: boolean }) => {
  const project = props.project;
  const supportedDeposited = props.supportedDeposited;
  const isWithdrawEnabled = supportedDeposited > 0;
  const router = useRouter();
  const { wallet } = useWallet();
  const { balance } = useBalance();
  const toast = useToast();
  const MINIMUM_TO_FUND = process.env.MINIMUM_AMOUNT_DEPOSIT ? process.env.MINIMUM_AMOUNT_DEPOSIT : 0;
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

  const onMaxClickDeposit = async (event: any) => {
    const balance = await getBalance(wallet!);
    formikDeposit.setFieldValue("amount_deposit", balance);
    setAmountDeposit(balance);
  }
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
      if (values.amount_deposit < MINIMUM_TO_FUND) {
        toast({
          title: "Transaction error.",
          description: `The amount to deposit must be at least ${MINIMUM_TO_FUND} stNEAR`,
          status: "error",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
      } else {
        const result = await fundToKickstarter(
          wallet!,
          project.id,
          values.amount_deposit
        );
      }
    },
  });

  const initialValuesWithdraw: any = {
    amount_withdraw:  props.showOnlyWithdraw ? supportedDeposited : 0,
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
      if (values.amount_deposit <= 0) {
        toast({
          title: "Transaction error.",
          description: "The amount to withdraw must be greater than 0",
          status: "error",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
      } else {
        const result = await withdrawAmount(ntoy(values.amount_withdraw));
      }
    },
  });

  const withdrawAmount = async (amount: string) => {
    withdraw(wallet!, project.id, amount).then((val) => {
      console.log("Return withdraw success", val);
    });
  };

  const getFormikError = ()=> {
    const error = formikDeposit.errors && formikDeposit.errors.amount_deposit ?  formikDeposit.errors.amount_deposit : '';
    return {
      __html: error as string
    }
  }

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
      setEstimatedRewards(yton(tokenAwardPerStnear) * amountDeposit);
    }
  }, [amountDeposit, currentFundingGoal]);

  useEffect(()=> {
    formikDeposit.setFieldValue("balance", balance);
  }, [balance])

  if (!project) return <></>;

  return (
    <Tabs defaultIndex={props.showOnlyWithdraw ? 1 : 0}>
      <TabList>
        <Tab isDisabled={props.showOnlyWithdraw} >Deposit</Tab>
        <Tab isDisabled={!isWithdrawEnabled}>Withdraw</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <HStack>
            <InputGroup>
              <InputLeftAddon>
                <Square minW="30px">
                  <Avatar size={'xs'}   src="/stNEAR_token-white_dark_purple-circle.svg" />
                  <Text fontSize={'xs'}  fontWeight={600} color="gray.400" ml={2}>stNEAR</Text>
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
              colorScheme="indigo"
              size="lg"
              // disabled={!formikDeposit.isValid}
              onClick={(e: any) => formikDeposit.handleSubmit(e)}
            >
              Deposit
            </Button>
          </HStack>
          {
            !formikDeposit.isValid && (
              <HStack mt={5}>
                <Text dangerouslySetInnerHTML={ getFormikError()}  color={'red'}></Text>
              </HStack>
            )
          }
          
          <Stack mt={4}>
            <HStack>
              <Text
                fontSize="xs"
                lineHeight="6"
                fontWeight="semibold"
                color="gray.400"
              >
                ESTIMATED REWARDS: 
              </Text>
              <Text
                fontSize="sm"
                lineHeight="6"
                fontWeight="semibold"
                color="gray.600"
              >{estimatedRewards}{" "}{project.kickstarter.project_token_symbol}</Text>
            </HStack>
          </Stack>
        </TabPanel>
        <TabPanel>
          <HStack>
            <InputGroup>
              <InputLeftAddon>
                <Square minW="30px">
                  <Avatar size={'xs'}   src="/stNEAR_token-white_dark_purple-circle.svg" />
                  <Text fontSize={'xs'} fontWeight={600}  color={'gray.400'} ml={2}>stNEAR</Text>
                </Square>
              </InputLeftAddon>
              <Input
                id="amount_withdraw"
                name="amount_withdraw"
                placeholder="0"
                isDisabled= {props.showOnlyWithdraw}
                value={formikWithdraw.values.amount_withdraw}
                onPaste={formikWithdraw.handleChange}
                onBlur={formikWithdraw.handleBlur}
                onChange={formikWithdraw.handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button isDisabled={props.showOnlyWithdraw} h="1.75rem" size="sm" onClick={onMaxClickWithdraw}>
                  Max
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              colorScheme="indigo"
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
            <HStack>
            <Text
              fontSize="xs"
              lineHeight="6"
              fontWeight="semibold"
              color="gray.400"
            >
              CURRENT DEPOSITS: 
            </Text>
            <Text
              fontSize="sm"
              lineHeight="6"
              fontWeight="semibold"
              color="gray.600"
            >
              {supportedDeposited} stNEAR
            </Text>
            </HStack>
            
            
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Funding;
