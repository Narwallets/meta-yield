import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  HStack,
  VStack,
  Button,
  useToast
} from "@chakra-ui/react";
import * as React from "react";
import { getVotes, voteProject } from "../../../lib/near";
import { ntoy, yton } from "../../../lib/util";
import { useEffect, useState } from "react";
import { FinalExecutionOutcome } from "near-api-js/lib/providers";
import TxErrorHandler from "../TxErrorHandler";

interface Props {
  project: any;
}

const ProjectVoteItem = (props: Props) => {
  const { project } = props;
  const [votes, setVotes] = useState("0");
  const [finalExecutionOutcome, setFinalExecutionOutcome] =   useState<FinalExecutionOutcome | null>(null);
  const toast = useToast();
  const vote = (slug: string, amount?: any) => {
    voteProject(slug, ntoy(1)).then((result)=> {
      setVotes("0");
      setFinalExecutionOutcome(result);
    })  
    .catch((error) => {
      toast({
        title: "Transaction error.",
        description: error,
        status: "error",
        duration: 9000,
        position: "top-right",
        isClosable: true,
      });
    });
  };

  useEffect(() => {
    (async () => {
      const myVotes = await getVotes(project.slug);
      setVotes(myVotes);
    })();
  }, [project]);

  if (!props || !project) return <></>;

  return (
    <>
    <TxErrorHandler finalExecutionOutcome={finalExecutionOutcome} />
    <Flex boxShadow={"xl"} m={5} p={10} w={"100%"} direction={"row"}>
      <Image alt="logo" h={"95px"} src={project.avatarUrl}></Image>
      <Text ml={5} fontSize={"2xl"} fontWeight={600}>
        {project.name}
      </Text>
      <Text ml={5} fontSize={"2xl"} fontWeight={600}>
        Votes {yton(votes)}
      </Text>
      <Button
        width={"100%"}
        colorScheme="indigo"
        onClick={() => vote(project.slug)}
      >
        Vote
      </Button>
    </Flex>
    </>
  );
};

export default ProjectVoteItem;
