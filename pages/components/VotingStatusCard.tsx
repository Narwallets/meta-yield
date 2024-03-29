import React, { useEffect, useState } from "react";
import {  Stack, Text, Spacer, Box, VStack, Button, InputGroup, Input, InputLeftAddon, HStack, Square, Avatar, InputRightElement, useToast, useBreakpointValue, Circle, Link, LinkOverlay, Center } from "@chakra-ui/react";
import Card from "./Card";
import { CaretRight } from "phosphor-react";
import {
  formatToLocaleNear,
  getEndVotingPeriod,
  ntoy,
  yton,
} from "../../lib/util";

import { getAvailableVotingPower, getInUseVotingPower, getMyVotesByProject, getNearConfig, getVotes, voteProject } from '../../lib/near';
import { useFormik } from "formik";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import voteSchemaValidation from "../../validation/voteSchemaValidation";
import ConnectButton from "./ConnectButton";
import { useWalletSelector } from "../../context/WalletSelectorContext";
const VotingStatusCard = (props: { project: any }) => {
  const project = props.project;
  const [votes, setVotes] = useState('0');
  const [myVotesInThisProject, setMyVotes] = useState('0');
  const [votingPower, setVotingPower] = useState('0');
  const [votingPowerInUse, setVotingPowerInUse] = useState('0');
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { selector, modal, accounts, accountId } = useWalletSelector();
  const toast = useToast();
  const vote = ( amount: any)=>{
    voteProject(project.id +'|' +project.slug,  ntoy(amount));
  }

  const ERROR_MESSAGES = {
    AMOUNT_ZERO: 'The amount to vote must be greater than 0',
    NOT_ENOUGH: 'You dont have enough Voting Power'
  }
  const REFETCH_INTERVAL:number = process.env.NEXT_PUBLIC_VOTES_REFETCH_INTERVAL ? parseInt(process.env.NEXT_PUBLIC_VOTES_REFETCH_INTERVAL) : 5000

  const onMaxClick = async (event: any) =>
    formikVote.setFieldValue("amount", yton(votingPower));

  const formikVote = useFormik({
    initialValues: {
      amount: '0'
    },
    validationSchema: voteSchemaValidation,
    validateOnMount: true,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values: any) => {
      if (values.amount <= 0 || values.amount > votingPower) {
        toast({
          title: "Transaction error.",
          description: values.amount <= 0  ? ERROR_MESSAGES.AMOUNT_ZERO : ERROR_MESSAGES.NOT_ENOUGH,
          status: "error",
          duration: 3000,
          position: "top-right",
          isClosable: true,
        });
      } else {
        const result = await vote(values.amount);
      }
    },
  });

  const updateVoteData = async () => {
    const id = project.id + '|'+project.slug;
    const currentVotes = await getVotes(id);
    setVotes(currentVotes);

    if(selector?.isSignedIn() ) {
      const myVotesInPrj = await getMyVotesByProject(id);
      setMyVotes(myVotesInPrj);

      const myVotingPower = await getAvailableVotingPower();
      setVotingPower(myVotingPower);

      const myVotingPowerInUse = await getInUseVotingPower();
      setVotingPowerInUse(myVotingPowerInUse);
    }
  }
  

  useEffect(() => {
   updateVoteData()
  }, [project, selector]);

  useEffect(() => {
    setInterval(async () => {
      updateVoteData();
    }, REFETCH_INTERVAL);
  }, []);

  return (
    <>
      <Card mt={150} w={"100%"} mx="0">
        <Stack spacing={4}>
          <Stack justify={'space-between'} direction="row">
            <Box>
              <Text fontSize={{ base: "xs", md: "xs" }} mb={4} color="gray.400" fontWeight="700">
                PROJECT VOTES
              </Text>
              <Text fontSize={{ base: "2xl", md: "2xl" }} fontWeight="bold" lineHeight="8">
                {formatToLocaleNear(yton(votes), 0 )}
              </Text>
            </Box>
            { selector?.isSignedIn() && (<Box>
              <Text fontSize={{ base: "xs", md: "xs" }} mb={4} color="gray.400" fontWeight="700">
                YOUR VOTE
              </Text>
              <Text fontSize={{ base: "2xl", md: "2xl" }} fontWeight="bold" lineHeight="8">
                {formatToLocaleNear(yton(myVotesInThisProject), 0 )}
              </Text>
            </Box>)}
            <Box>
              <Text fontSize={{ base: "xs", md: "xs" }} mb={4} color="gray.400" fontWeight="700">
                ENDS IN
              </Text>
              <Text
                fontSize={{ base: "2xl", md: "2xl" }}
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
        <VStack  align={'flex-start'}>
          <Text hidden={!isMobile} fontSize={'xs'} color="gray.400" fontWeight="700">
              VOTE
          </Text>
          {
              selector?.isSignedIn() ? ( <>
            <Stack  w={'100%'} direction={{base: 'column', md: 'row'}}>
              <InputGroup borderRadius={'6px'}>
                <InputLeftAddon hidden={isMobile}>
                  <Square minW="30px">
                    <Text fontSize={'xs'}  fontWeight={600} color="gray.400" mx={2}>VOTING POWER</Text>
                  </Square>
                </InputLeftAddon>
                <Input
                  id="amount"
                  name="amount"
                  textAlign={'end'}
                  type="number"
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
                  <Button  colorScheme={'indigo'} bg={{base: 'indigo.500', md: '#EEEFF8'}} p={2} variant={isMobile ? 'solid' : 'link'} h="1.75rem" size="sm" onClick={onMaxClick}>
                    {isMobile ? 'Max' : 'Use max' } 
                  </Button>
                </InputRightElement>
              </InputGroup>
              
              <Square hidden={!isMobile} minW="30px">
                    <Text fontSize={'md'}  fontWeight={600} color="gray.400" mx={2}>VOTING POWER</Text>
              </Square>
                  <Button
                    colorScheme="indigo"
                    size="md"
                    px={10}
                    onClick={(e: any) => formikVote.handleSubmit(e)}>
                    Vote
                  </Button>
            </Stack>
          </>
              ) :
              (
                <Center w={'100%'}>
                  <ConnectButton text="Connect Wallet to Vote"/>
                </Center>
                )
            }
          { formikVote.dirty && (
          <Stack w={'100%'} textAlign={'end'}>
            <Text fontSize={'xs'} color={'red'}> {formikVote.errors.amount} </Text>
          </Stack>)}
        </VStack>
      </Card>
      {
        selector?.isSignedIn() && (
<Card>
        <VStack hidden={!selector?.isSignedIn()} spacing={8} align={'flex-start'}>
            <Text fontSize={'xs'} color="gray.400" fontWeight="700">
                YOUR VOTING POWER
            </Text>
            <HStack align={'center'}  w={'100%'} justifyContent={'space-between'} >
              <HStack align={'center'}>
                <Text fontSize={'xl'}  >
                  Total
                </Text>
                <Text fontSize={{ base: "xl", md: "xl" }} fontWeight="bold" lineHeight="8">
                  {formatToLocaleNear((yton(votingPower) + yton(votingPowerInUse)), 0)}
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
                  {formatToLocaleNear(yton(votingPowerInUse), 0)}
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
                  {formatToLocaleNear(yton(votingPower), 0)}
                </Text>
              </HStack>
            </HStack>

            <Button
                  w={"100%"}
                  h={"48px"}
                  colorScheme={"indigo"}
                  rightIcon={<CaretRight />}
                  
                >
                  <LinkOverlay href={getNearConfig()?.metavoteUrl} isExternal>
                    Get Voting Power
                  </LinkOverlay>

            </Button>

          </VStack>
      </Card>
        )
      }
      
    </>
  );
};

export default VotingStatusCard;
