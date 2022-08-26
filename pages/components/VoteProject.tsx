import React from "react";
import {
  Box,
  VStack,
  Stack,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Flex,
  Circle,
  Avatar,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { yton } from "../../lib/util";

const VoteProject = (props: { data: any }) => {
  const projectData = props.data;
  const tagColor = useColorModeValue("gray.600", "gray.300");
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (!projectData)
    return (
      <Box
        as="section"
        pt={{ base: "50", md: "100" }}
        pb={{ base: "12", md: "24" }}
      >
        <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
          No Active Project
        </Text>
      </Box>
    );

  return (
    <Stack
      direction={{ base: "row", lg: "row" }}
      key={projectData.slug}
      minW= {{base: '100%' ,md:'100%'}}
      maxW= {{base: '100%' ,md:'100%'}}
      p={5}
      boxShadow="sm"
      border={'1px'}
      borderColor={'lightgray'}
      rounded="lg"
      justify={'space-between'}
      align={'center'}>

      <HStack spacing={10}>
        <Circle boxShadow="xl" >
          <Circle  >
            {projectData.avatarUrl && (
              <Avatar src={projectData.avatarUrl} boxSize="10" />
            )}
          </Circle>
        </Circle>
        <VStack align={'flex-start'}>
          <Text as="h2" mr={"10px"} fontWeight="bold" fontSize="24px">
            {projectData.name}
          </Text>
          <Text as="h2" mr={"10px"} fontWeight={500} color={'#26274E'} fontSize="16px">
            {projectData.motto}
          </Text>
        </VStack>
      </HStack>
      <HStack
        align={{ base: "center", lg: "center" }}
        px={'15px'}
        py={'5px'}
        bg={'#F0F0F0'}
        borderRadius={'20px'}
        spacing={5}>
        <Text fontSize={{base: 'lg', md:'24px'}} color="emphasized">
          <b>{yton(projectData.votes)} </b>
        </Text>
        <Text  fontSize={"12px"} color={'#9CA3AF'} fontWeight="700">
          VOTES
        </Text>
      </HStack>
            
      <Button
          px={'40px'}
          py={'10px'}

          colorScheme={"indigo"}
          onClick={() => router.push(`/vote/${projectData.id}`)}
        >
          Vote now
        </Button>
    </Stack>
  );
};

export default VoteProject;
