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
import * as React from "react";
import { getVotes, voteProject } from '../../../lib/near';
import { useStore as useWallet} from '../../../stores/wallet';
import { ntoy, yton } from '../../../lib/util';
import { useEffect, useState } from 'react';

interface Props {
  project: any
}

const ProjectVoteItem = (props: Props) => {
  const { project  } = props;
  const { wallet } = useWallet();
  const [votes, setVotes] = useState('0');

  const vote = (slug: string, amount?: any)=>{
    voteProject(slug,  ntoy(1), wallet);
  }

  useEffect( ()=>{
    (async ()=>{
      const myVotes = await getVotes(project.slug);
      setVotes(myVotes);
    })()
  }, [project]);

  if (!props || !project) return <></>;

  return (
    <Flex boxShadow={'xl'} m={5} p={10} w={'100%'} direction={'row'}>
        <Image alt='logo' h={'95px'} src={project.avatarUrl}></Image>
        <Text ml={5} fontSize={'2xl'} fontWeight={600}>{project.name}</Text>
        <Text ml={5} fontSize={'2xl'} fontWeight={600}>Votes {yton(votes)}</Text>
        <Button width={'100%'} colorScheme="indigo" onClick={() => vote(project.slug)}>
          Vote
        </Button>
    </Flex>
  );
};

export default ProjectVoteItem;
