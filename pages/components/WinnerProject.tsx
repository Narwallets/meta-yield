import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
  useBreakpointValue,
  Flex,
  Circle,
  Image,
  Avatar,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ProjectProps } from "../../types/project.types";
import { getPeriod, isOpenPeriod, PERIOD, timeLeftToFund, yoctoToDollarStr } from "../../lib/util";
import { fetchStNearPrice } from "../../queries/prices";
import FundButton from "./FundButon";

const WinnerProject = (props: { data: ProjectProps }) => {
  const projectData = props.data;
  const [totalRaised, setTotalRaised] = useState("");
  const tagColor = useColorModeValue("gray.600", "gray.300");
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    (async () => {
      
    })();
  }, [projectData]);

  if (!projectData)
    return (
      <Box
        as="section"
        pt={{ base: "50", md: "100" }}
        pb={{ base: "12", md: "24" }}
      >
        <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
          No Project Data Provided ...
        </Text>
      </Box>
    );

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      key={projectData.slug}
      p={0}
      mt={10}
      boxShadow="sm"
      rounded="lg"
      position={'relative'}
      overflow={'hidden'}
    >
      <Flex
        borderRadius={{ base: "md", md: "lg" }}
        minW={{ base: "100%", lg: "300px", xl: "400px" }}
        minH={210}
        backgroundColor={"black"}
        alignItems={"center"}
      >
        <Image
          src={projectData.imageUrl}
          alt="project"
          borderRadius="xl"
          fit="cover"
          maxWidth={{ base: "100%", lg: "300px", xl: "400px" }}
        />
      </Flex>
      <Box
        pr={{ base: "4", lg: "4", xl: "10" }}
        pb={{ base: "4", lg: "4", xl: "10" }}
        pl={{ base: "4", lg: "4", xl: "10" }}
      >
        <Stack
          spacing={{ base: "1", md: "2" }}
          direction={{ base: "column", md: "row" }}
          hidden={isMobile}
        >
          <Circle boxShadow="xl" ml={{ base: 0, lg: "0", xl: "-8" }} mb="2">
            <Circle m="2" overflow={"hidden"}>
              {projectData.avatarUrl && (
                <Avatar src={projectData.avatarUrl} boxSize="10" />
              )}
            </Circle>
          </Circle>
        </Stack>
        <VStack
          spacing={{ base: "1", md: "2" }}
          align={'flex-start'}
          direction={{ base: "column", md: "row" }}
        >
          <Text as="h2" mr={"10px"} fontWeight="bold" fontSize="2xl">
            {projectData.name}
          </Text>
          <Text mr={"10px"} fontWeight="bold" fontSize="sm">
            {projectData.motto}
          </Text>
        </VStack>
        <Text noOfLines={{base: 2 , md: 10}} mt="2">{projectData.description}</Text>
        <Wrap shouldWrapChildren mt="5" fontWeight={700} color={tagColor}>
          {projectData.tags &&
            projectData.tags.map((tag: string) => (
              <Tag key={tag} variant={'outline'} colorScheme="indigo"  px="3">
                {tag}
              </Tag>
            ))}
        </Wrap>
      </Box>
      <Center position={'absolute'} transform={'rotate(45deg)'} right={-20} top={5} textAlign={'center'} width={'300px'} bg={'green.500'}>
              <Text lineHeight={2} transform={'translate(29.3%)'} fontSize={'sm'} color={'white'}> Metavote Winner</Text>
              
      </Center>
    </Stack>
  );
};

export default WinnerProject;
