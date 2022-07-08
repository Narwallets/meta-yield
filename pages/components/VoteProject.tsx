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
      direction={{ base: "column", lg: "column" }}
      key={projectData.slug}
      minW= {{base: '100%' ,md:'280px'}}
      maxW= {{base: '100%' ,md:'280px'}}
      p={5}
      mt={10}
      boxShadow="sm"
      border={'1px'}
      borderColor={'lightgray'}
      rounded="lg"
    >
      <Box
      >
        <Stack
          spacing={{ base: "1", md: "1" }}
          direction={{ base: "row", md: "row" }}
          justify={'space-between'}
        >

          <Circle boxShadow="xl" >
            <Circle  >
              {projectData.avatarUrl && (
                <Avatar src={projectData.avatarUrl} boxSize="10" />
              )}
            </Circle>
          </Circle>
          <Text as="h2" mr={"10px"} fontWeight="bold" fontSize="xl">
            {projectData.name}
          </Text>
        </Stack>

      </Box>
      <Flex alignItems={"center"} >
        <Stack minW={{ base: 160, xl: 160 }} w="full">
          <VStack
            align={{ base: "flex-end", lg: "flex-end" }}
            w="full"
          >
            <Stack
              align={{ base: "flex-end", lg: "flex-end" }}
              spacing={'1px'}
            >
              <Text  fontSize={"0.6rem"} opacity={0.5} fontWeight="700">
                VOTES
              </Text>
              <Text fontSize={{base: 'lg', md:'2xl'}} color="emphasized">
                <b>{yton(projectData.votes)} </b>
              </Text>
            </Stack>
            
            <Stack
              mt={"1rem"}
              align={{ base: "center", lg: "center" }}
              w="full"
              maxW="sm"
            >
              <Button
                w={"100%"}
                h={"48px"}
                colorScheme={"indigo"}
                onClick={() => router.push(`/vote/${projectData.id}`)}
              >
                Project details
              </Button>
            </Stack>
          </VStack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default VoteProject;
