import {
  Button,
  Container,
  Heading,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  Link,
  Box,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import * as React from "react";
import { getWallet, METAPOOL_CONTRACT_ID } from "../../lib/near";
import { useStore } from "../../stores/wallet";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Hero = () => {
  const { wallet, setWallet } = useStore();
  const [isConnected, setIsConnected] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const onConnect = async () => {
    wallet!.requestSignIn(METAPOOL_CONTRACT_ID, "Metapool contract");
  };
  useEffect(() => {
    (async () => {
      const tempWallet = await getWallet();
      if (tempWallet.getAccountId()!) {
        setIsConnected(true);
      }
    })();
  }, []);

  return (
    <Square
      minHeight={{ base: 400, md: 600 }}
      borderRadius={16}
      as="section"
      bg="#F5F5FF"
    >
      <Container >
        <Stack spacing={{ base: "8", md: "10" }}>
          <Stack spacing={{ base: "4", md: "5" }} align="center">
            <Heading
              textAlign={"center"}
              fontWeight={700}
              lineHeight={{ base: "3rem", md: "4rem" }}
              size={useBreakpointValue({ base: "md", md: "2xl" })}>
              The launchpad of the NEAR ecosystem.
            </Heading>
            <Text
              color="on-accent-muteed"
              maxW="2xl"
              textAlign="center"
              fontSize="xl">
              Stake NEAR and use your tokens to support crypto-based projects, and earn their tokens.
            </Text>
          </Stack>
          <Stack
            spacing="3"
            direction={{ base: "column", sm: "row" }}
            justify="center"
            alignItems={"center"}>
            <Link  href="/#how-it-works">
              <Button borderColor={'indigo.500'} border={'2px'} borderRadius={5} fontWeight={600} color={'indigo.500'} pl={20} pr={20} variant='outline' size="lg" bg="#F5F5FF">
                HOW IT WORKS
              </Button>
            </Link>
          </Stack>
          <Stack
            spacing="3"
            direction={{ base: "column", sm: "row" }}
            justify="center"
            alignItems={"center"}
          >   
              {/* ************** MOBILE CARDS ************** */ }
              <Stack hidden={!isMobile} p={5} borderRadius={8} justify={'flex-start'} bg={'indigo.500'}>
                <HStack justify={'space-between'}>
                  <Heading
                    color={'white'}
                    fontWeight={700}
                    lineHeight={{ base: "3rem", md: "4rem" }}
                    size={useBreakpointValue({ base: "sm", md: "md" })}
                  >
                    Vote
                  </Heading>
                  <Link  bg={'#6172F3'} color={'white'} href="/#vote">
                    <Button p={0} variant="nav">
                      <ChevronRightIcon  fontWeight={100} fontSize={'2xl'}/>
                    </Button>
                  </Link>
                </HStack>
                <Text color={'white'} opacity={0.5}>Vote which project can be elegible to get funded.</Text>
              </Stack>
              <Stack hidden={!isMobile} p={5} borderRadius={8} justify={'flex-start'} bg={'indigo.500'}>
                <HStack justify={'space-between'}>
                  <Heading
                    color={'white'}
                    fontWeight={700}
                    lineHeight={{ base: "3rem", md: "4rem" }}
                    size={useBreakpointValue({ base: "sm", md: "md" })}
                  >
                    Fund
                  </Heading>
                  <Link  bg={'#6172F3'} color={'white'} href="/#fund">
                    <Button p={0} variant="nav">
                      <ChevronRightIcon  fontWeight={100} fontSize={'2xl'}/>
                    </Button>
                  </Link>
                </HStack>
                <Text color={'white'} opacity={0.5}>Stake NEAR and use your tokens to support crypto-based projects.</Text>
              </Stack>
              {/* ************** END MOBILE CARDS ************** */ }


              {/* ************** DESKTOP CARDS ************** */ }
              <Stack w={'40%'} spacing={0} hidden={isMobile} p={5} borderRadius={8} justify={'space-evenly'} align={'center'} bg={'white'}>
                <Heading
                  fontWeight={700}
                  lineHeight={{ base: "3rem", md: "4rem" }}
                  size={useBreakpointValue({ base: "sm", md: "md" })}>
                  Vote
                </Heading>
                <Text  textAlign={'center'} w={'70%'} opacity={0.5}>Vote which project can be elegible to get funded.</Text>
                <Link  href="/#vote" w={'100%'} >
                  <Button mt={'20px'} borderColor={'indigo.500'}  borderRadius={5} fontWeight={600} colorScheme={'indigo'} w={'100%'}  py={6} variant={'solid'}  >
                    Projects to Vote
                  </Button>
                </Link>
              </Stack>
              <Stack w={'40%'} spacing={0} hidden={isMobile} p={5} borderRadius={8} justify={'space-evenly'} align={'center'} bg={'white'}>
                <Heading
                  fontWeight={700}
                  lineHeight={{ base: "3rem", md: "4rem" }}
                  size={useBreakpointValue({ base: "sm", md: "md" })}>
                  Fund
                </Heading>
                <Text  textAlign={'center'} w={'70%'} opacity={0.5}>Stake NEAR and use your tokens to support crypto-based projects.</Text>
                <Link  href="/#vote" w={'100%'} >
                  <Button mt={'20px'} borderColor={'indigo.500'}  borderRadius={5} fontWeight={600} colorScheme={'indigo'} w={'100%'}  py={6} variant={'solid'}  >
                    Projects to Fund
                  </Button>
                </Link>
              </Stack>
              {/* ************** END DESKTOP CARDS ************** */ }
          </Stack>
        </Stack>
      </Container>
    </Square>
  );
};

export default Hero;
