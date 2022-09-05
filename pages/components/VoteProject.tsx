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
  Spacer,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { yton } from "../../lib/util";

const VoteProject = (props: { data: any, position: number }) => {
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
      position={'relative'}
      direction={{ base: "column", lg: "row" }}
      key={projectData.slug}
      minW= {{base: '100%' ,md: '100%'}}
      maxW= {{base: '100%' ,md: '100%'}}
      p={5}
      transform={props.position === 0 ? 'scale(1.03)' : ''}
      boxShadow="sm"
      border={'1px'}
      borderColor={'lightgray'}
      rounded="lg"
      alignItems={{base: 'flex-start', md: 'center'}}
      justify={{base: 'flex-start', md: 'space-between'}}
      align={'center'}
      onClick={() => router.push(`/vote/${projectData.id}`)}
      cursor={'pointer'}
      >

      <HStack justify={{base: 'flex-start', md: 'inherit'}} spacing={{base: 0 , md:10}}>
        <Stack  hidden={isMobile}   direction={{ base: "column", lg: "row" }}>
          <Text order={{base: 3 , md: 0}} bg={'#F0F0F0'} fontWeight={600} fontSize={{base:'16px',md:"24px"} }borderRadius={100} px={'16px'} py={'8px'}>{props.position +1 }</Text>
          <Spacer />

          <Circle order={{base: 0 , md: 3}} boxShadow="xl" >
            <Circle  >
              {projectData.avatarUrl && (
                <Avatar src={projectData.avatarUrl} boxSize="10" />
              )}
            </Circle>
          </Circle>
        </Stack>
        <VStack align={'flex-start'}>
          <HStack>
            <Text hidden={!isMobile} bg={'#F0F0F0'} fontWeight={600} fontSize={{base:'16px',md:"24px"} }borderRadius={100} px={'16px'} py={'8px'}>{props.position +1 }</Text>

            <Circle hidden={!isMobile}   boxShadow="xl" >
              <Circle  >
                {projectData.avatarUrl && (
                  <Avatar src={projectData.avatarUrl} boxSize="10" />
                )}
              </Circle>
            </Circle>            
            <Text as="h2" mr={"10px"} fontWeight="bold" fontSize={{base:'16px',md:"24px"}}>
              {projectData.name}
            </Text>
          </HStack>
          <Text as="h2" mr={"10px"} fontWeight={500} color={'#26274E'} fontSize={{base:'12px',md:"16px"}}>
            {projectData.motto}
          </Text>
        </VStack>
      </HStack>
      <Spacer />
      <HStack
        align={{ base: "center", lg: "center" }}
        alignSelf={{base: 'flex-end', md: 'inherit'}}
        px={'15px'}
        py={'5px'}
        bg={'#F0F0F0'}
        borderRadius={'20px'}
        spacing={5}>
        <Text fontSize={{base: 'lg', md:'24px'}} color="emphasized">
          <b>{yton(projectData.votes).toFixed(2)} </b>
        </Text>
        <Text  fontSize={"12px"} color={'#9CA3AF'} fontWeight="700">
          VOTES
        </Text>
      </HStack>
            
      <Button
          px={'40px'}
          py={'10px'}
          w={{base: '100%', md: 'inherit'}}
          colorScheme={"indigo"}
          onClick={() => router.push(`/vote/${projectData.id}`)}
        >
          Vote now
      </Button>
    </Stack>
  );
};

export default VoteProject;
