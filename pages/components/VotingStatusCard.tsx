import React, { useEffect, useState } from "react";
import {  Stack, Text, Spacer, Box, VStack, Button, InputGroup, Input, InputLeftAddon, HStack, Square, Avatar, InputRightElement, useToast, useBreakpointValue, Circle } from "@chakra-ui/react";
import Card from "./Card";
import { CaretRight } from "phosphor-react";
import {
  getEndVotingPeriod,
  ntoy,
  yton,
} from "../../lib/util";

import { getAvailableVotingPower, getInUseVotingPower, getMyVotesByProject, getVotes, voteProject } from '../../lib/near';
import { useStore as useWallet} from '../../stores/wallet';
import { useFormik } from "formik";
import { InfoOutlineIcon } from "@chakra-ui/icons";

const VotingStatusCard = (props: { project: any }) => {
  const project = props.project;
  const [votes, setVotes] = useState('0');
  const [myVotesInThisProject, setMyVotes] = useState('0');
  const [votingPower, setVotingPower] = useState('0');
  const [votingPowerInUse, setVotingPowerInUse] = useState('0');
  const isMobile = useBreakpointValue({ base: true, md: false });

  const { wallet } = useWallet();
  const toast = useToast();
  const vote = ( amount: any)=>{
    voteProject(project.id +'|' +project.slug,  ntoy(amount), wallet);
  }

  const onMaxClick = async (event: any) =>
    formikVote.setFieldValue("amount", yton(votingPower));

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
      if(wallet && wallet.isSignedIn()) {
        const id = project.id + '|'+project.slug;
        const myVotes = await getVotes(id);
        setVotes(myVotes);

        const myVotesInPrj = await getMyVotesByProject(id, wallet);
        setMyVotes(myVotesInPrj);

        const myVotinPower = await getAvailableVotingPower(wallet);
        setVotingPower(myVotinPower);

        const myVotinPowerInUse = await getInUseVotingPower(wallet);
        setVotingPowerInUse(myVotinPowerInUse);
      }
    })();
  }, [project, wallet]);

  return (
    <>
      <Card w={"100%"} mx="0">
        <Stack spacing={4}>
          <Stack justify={'space-between'} direction="row">
            <Box>
              <Text fontSize={{ base: "xs", md: "md" }} mb={4} color="gray.400" fontWeight="700">
                PROJECT VOTES
              </Text>
              <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" lineHeight="8">
                {yton(votes)}
              </Text>
            </Box>
            <Box>
              <Text fontSize={{ base: "xs", md: "md" }} mb={4} color="gray.400" fontWeight="700">
                YOUR VOTE
              </Text>
              <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" lineHeight="8">
                {yton(myVotesInThisProject)}
              </Text>
            </Box>
            <Box>
              <Text fontSize={{ base: "xs", md: "md" }} mb={4} color="gray.400" fontWeight="700">
                ENDS IN
              </Text>
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
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
          <Text hidden={!isMobile} fontSize={'xs'} color="gray.400" fontWeight="700">
              VOTE
          </Text>
          <Stack w={'100%'} direction={{base: 'column', md: 'row'}}>
            <InputGroup border={'1px'} borderColor={'#E5E7EB'} borderRadius={'6px'}>
              <InputLeftAddon hidden={isMobile}>
                <Square minW="30px">
                  <Text fontSize={'xs'}  fontWeight={600} color="gray.400" mx={2}>VOTING POWER <InfoOutlineIcon  fontSize={'md'} ml={2}/></Text>
                </Square>
              </InputLeftAddon>
              <Input
                id="amount"
                name="amount"
                textAlign={'end'}
                placeholder="0"
                fontSize={'xl'} 
                fontWeight={'bold'}
                pr={{base: '70px' , md : '80px'}}
                value={formikVote.values.amount}
                onPaste={formikVote.handleChange}
                onBlur={formikVote.handleBlur}
                onChange={(e) => {
                  formikVote.handleChange(e);
                }}
              />
              <InputRightElement width="4.5rem">
                <Button colorScheme={'indigo'} bg={{base: 'indigo.500', md: '#EEEFF8'}} p={2} variant={isMobile ? 'solid' : 'link'} h="1.75rem" size="sm" onClick={onMaxClick}>
                  {isMobile ? 'Max' : 'Use max' } 
                </Button>
              </InputRightElement>
            </InputGroup>
            <Square hidden={!isMobile} minW="30px">
                  <Text fontSize={'md'}  fontWeight={600} color="gray.400" mx={2}>VOTING POWER <InfoOutlineIcon  fontSize={'md'} ml={2}/></Text>
            </Square>
            <Button
              colorScheme="indigo"
              size="lg"
              px={10}
              py={5}
              // disabled={!formikDeposit.isValid}
              onClick={(e: any) => formikVote.handleSubmit(e)}
            >
              Vote
            </Button>
          </Stack>
        </VStack>
      </Card>
      <Card>
        <VStack spacing={8} align={'flex-start'}>
            <Text fontSize={'md'} color="gray.400" fontWeight="700">
                YOUR VOTING POWER
            </Text>
            <HStack align={'center'}  w={'100%'} justifyContent={'space-between'} >
              <HStack align={'center'}>
                <Text fontSize={'xl'}  >
                  Total
                </Text>
                <Text fontSize={{ base: "xl", md: "xl" }} fontWeight="bold" lineHeight="8">
                  {yton(votingPower) + yton(votingPowerInUse)}
                </Text>
              </HStack>
              <HStack align={'center'}>
                <Text fontSize={'xl'}  >
                  Used
                </Text>
                <Text
                  fontSize={{ base: "xl", md: "xl" }}
                  fontWeight="bold"
                  lineHeight="8"
                >
                  {yton(votingPowerInUse)}
                </Text>
              </HStack>
              <HStack  align={'center'}>
                <Circle size={'15px'} bg={'lightgreen'}></Circle>
                <Text fontSize={'xl'}  >
                  Available
                </Text>
                <Text
                  fontSize={{ base: "xl", md: "xl" }}
                  fontWeight="bold"
                  lineHeight="8"
                >
                  {yton(votingPower)}
                </Text>
              </HStack>
            </HStack>
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
    </>
  );
};

export default VotingStatusCard;
