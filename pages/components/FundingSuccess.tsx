import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Text,
  Flex,
  Spacer,
  Link,
  Divider,
} from "@chakra-ui/react";

// import Image from "next/image";
import { CaretLeft, CaretRight, } from "phosphor-react";

import { useGetProjects } from "../../hooks/projects";
import { useRouter } from "next/router";
import { ProjectProps } from "../../types/project.types";
const FundingSuccess = (props: { id: any }) => {
  const router = useRouter();
  const { data, isLoading } = useGetProjects();
  const [project, setProject] = useState<ProjectProps | undefined>(undefined);
 

  useEffect(() => {
    if (data) {
      setProject(data.find((p: ProjectProps) => p.id === props.id));
    }
  }, [data, props]);
  if (!project) return <></>;
  return (
    <Box as="section" p={{ base: "3", md: "10px 140px" }}>
      <Link
        color="indigo.500"
        fontSize={'sm'}
        onClick={() => router.push(`/project/${project.id}`)}>
        <Flex><CaretLeft size={20} /> Back to project</Flex> 
      </Link>
      <Text
        fontSize="3xl"
        lineHeight="9"
        fontWeight="semibold"
        color="gray.500"
      >
        Staking summary
      </Text>
      <Flex mt="65px" backgroundColor={'#F1F2F6'} justifyContent={'center'} >
        <Box
          px={{ base: "4", md: "6" }}
          py={{ base: "5", md: "6" }}
          borderRadius="lg"
        >
          <Stack w={'600px'} >
              <Stack>
                <Text textAlign={'center'} mb={'46px'} fontSize="3xl" lineHeight="9" fontWeight="medium">
                  You have successfully participated
                </Text>
               
                <Box backgroundColor={'white'}  p={'40px'} bg="light">
                  <Stack spacing="4">
                    <Text mb={'36px'} fontSize="xxs" fontWeight="700" color="gray.400">
                      SUMMARY
                    </Text>
                    <Stack spacing={4}>
                      <Flex >
                        <Text
                          fontSize="md"
                          lineHeight="6"
                          fontWeight="semibold"
                          color="gray.500"
                        >
                          Invested amount
                        </Text>
                        <Spacer />
                        <Text
                          fontSize="md"
                          lineHeight="6"
                          fontWeight="bold"
                          color="gray.900"
                        >
                          6,000 NEAR
                        </Text>
                      </Flex>
                      <Divider />
                      <Flex >
                        <Text
                          fontSize="md"
                          lineHeight="6"
                          fontWeight="semibold"
                          color="gray.500"
                        >
                          Rewards
                        </Text>
                        <Spacer />
                        <Text
                          fontSize="md"
                          lineHeight="6"
                          fontWeight="bold"
                          color="gray.900"
                        >
                          5,939 $GLA
                        </Text>
                      </Flex>
                      <Divider />
                      <Flex >
                        <Text
                          fontSize="md"
                          lineHeight="6"
                          fontWeight="semibold"
                          color="gray.500"
                        >
                          Lockup end date
                        </Text>
                        <Spacer />
                        <Text
                          fontSize="md"
                          lineHeight="6"
                          fontWeight="bold"
                          color="gray.900"
                        >
                          April 15th, 2022
                        </Text>
                      </Flex>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            <Stack align="center">
              <Button
                  w={"100%"}
                  h={"48px"}
                  size={"md"}
                  colorScheme="indigo"
                  rightIcon={<CaretRight size={20} />}
                  onClick={() => router.push(`/project/${project?.id}`)}>
                  Go to your Dashboard
                </Button>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default FundingSuccess;
