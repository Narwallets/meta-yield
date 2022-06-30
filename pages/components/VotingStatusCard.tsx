import React, { useEffect, useState } from "react";
import {  Stack, Text, Spacer, Box, VStack, Button, InputGroup, Input, InputLeftAddon, HStack, Square, Avatar, InputRightElement, toast, useToast } from "@chakra-ui/react";
import Card from "./Card";
import { CaretRight } from "phosphor-react";
import {
  getEndVotingPeriod,
  ntoy,
  yton,
} from "../../lib/util";

import { getVotes, voteProject } from '../../lib/near';
import { useStore as useWallet} from '../../stores/wallet';
import { useFormik } from "formik";


const VotingStatusCard = (props: { project: any }) => {
  const project = props.project;
  const [votes, setVotes] = useState('0');
  const [votingPower, setVotingPower] = useState('0');

  const { wallet } = useWallet();
  const toast = useToast();
  const vote = ( amount: any)=>{
    voteProject(project.slug,  amount, wallet);
  }

  const onMaxClick = async (event: any) =>
    formikVote.setFieldValue("amount", votingPower);

  const formikVote = useFormik({
    initialValues: {
      amount: '0'
    },
    // validationSchema: withdrawSchemaValidation,
    validateOnMount: true,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values: any) => {
      if (values.amount <= 0) {
        toast({
          title: "Transaction error.",
          description: "The amount to vote must be greater than 0",
          status: "error",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
      } else {
        const result = await vote(values.amount);
      }
    },
  });

  
  useEffect(() => {
    (async () => {
      const myVotes = await getVotes(project.slug);
      setVotes(myVotes);
    })();
  }, [project]);

  return (
    <>
    <Card w={"100%"} mx="0">
      <Stack spacing={4}>
        <Stack direction="row">
          <Box>
            <Text fontSize={'xs'} color="gray.400" fontWeight="700">
              VOTES
            </Text>
            <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" lineHeight="8">
              {yton(votes)}
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Text fontSize={'xs'} color="gray.400" fontWeight="700">
              ENDS IN
            </Text>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight="bold"
              lineHeight="8"
            >
              {getEndVotingPeriod()}
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Card>
    <Card>
      <VStack align={'flex-start'}>
          <VStack align={'flex-start'}>
            <Text fontSize={'xs'} color="gray.400" fontWeight="700">
              YOUR VOTING POWER
            </Text>
            <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" lineHeight="8">
              {yton(votes)}
            </Text>
          </VStack>
          <VStack align={'flex-start'}>
            <Text fontSize={'xs'} color="gray.400" fontWeight="700">
              IN USE
            </Text>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight="bold"
              lineHeight="8"
              color={'red'}
            >
              {yton(votes)}
            </Text>
          </VStack>
          <Button
                w={"100%"}
                h={"48px"}
                colorScheme={"indigo"}
                rightIcon={<CaretRight />}
                onClick={() => {}}
              >
                Get Voting Power
              </Button>
        </VStack>
        
    </Card>
    <Card>
      <VStack align={'flex-start'}>
        <Text fontSize={'xs'} color="gray.400" fontWeight="700">
            VOTE
        </Text>
        <HStack>
          <InputGroup>
            <InputLeftAddon>
              <Square minW="30px">
                <Avatar size={'xs'}   src="/stNEAR_token-white_dark_purple-circle.svg" />
                <Text fontSize={'xs'}  fontWeight={600} color="gray.400" ml={2}>Voting Power</Text>
              </Square>
            </InputLeftAddon>
            <Input
              id="amount_deposit"
              name="amount_deposit"
              placeholder="0"
              value={formikVote.values.amount}
              onPaste={formikVote.handleChange}
              onBlur={formikVote.handleBlur}
              onChange={(e) => {
                formikVote.handleChange(e);
              }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={onMaxClick}>
                Max
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            colorScheme="indigo"
            size="lg"
            // disabled={!formikDeposit.isValid}
            onClick={(e: any) => formikVote.handleSubmit(e)}
          >
            Vote
          </Button>
        </HStack>
      </VStack>
    </Card>
    </>
  );
};

export default VotingStatusCard;
