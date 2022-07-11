import { 
  Box,
   Container, 
   Flex, 
   Heading, 
   Text,
   Image,
   HStack,
   VStack,
   Button
  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useGetProjectsToVote } from '../../../hooks/projects';
import { voteProject, getVotes  } from '../../../lib/near';
import { ntoy } from '../../../lib/util';
import { useStore as useWallet} from '../../../stores/wallet';
import ProjectVoteItem from './ProjectVoteItem';


const VoteListSection = () => {

  const { data, isLoading } = useGetProjectsToVote();
  const { wallet } = useWallet();



  return (
    <section  id="vote-list">
      <Container>
        <Flex justifyContent={{ base: 'center', md: 'center' }} flexDirection={{ base: 'column', md: 'column' }} >
          <Heading lineHeight={'133%'} textAlign={'center'} fontWeight={700} color="gray.900" fontSize={'3xl'}> Projects to vote</Heading>
          <Text mt={8} textAlign={'center'} fontWeight={400} color="gray.500" fontSize={'lg'}>List of projects to vote...</Text>   
        </Flex>
        <VStack>
          {
            data && data.map( (project:any, index: any)=>{
              return ( 
                <ProjectVoteItem key={index} project={project} ></ProjectVoteItem>
              )
            })
          }
        </VStack>
      </Container>
    </section>
  );
};

export default VoteListSection;
