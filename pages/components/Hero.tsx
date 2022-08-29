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
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useWalletSelector } from "../../context/WalletSelectorContext";
import ConnectButton from "./ConnectButton";

const Hero = () => {
  const { selector, modal, accounts, accountId } = useWalletSelector();
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Square
      minHeight={{ base: 400, md: 600 }}
      borderRadius={16}
      as="section"
      bg="#F5F5FF"
      position={'relative'}
      top={'-100px'}
      paddingTop={{ base: "102px", md: "204px" }}
      paddingBottom={{ base: "32px", md: "50px" }}
      px={{ base: "102px", md: "204px" }}
    >
      <Container >
        <Stack spacing={{ base: "8", md: "10" }}>
          <Stack spacing={{ base: "4", md: "5" }} align="center">
            <Heading
              textAlign={"center"}
              fontWeight={700}
              lineHeight={{ base: "3rem", md: "4rem" }}
              size={useBreakpointValue({ base: "md", md: "xl" })}>
              The Lossless Staking Rewards-based Crowdfunding NEAR Launchpad
            </Heading>
            <Text
              color="on-accent-muteed"
              maxW="2xl"
              textAlign="center"
              fontSize="24px">
              Why participate in an IDO, when you can <Text as={'b'}>support</Text> crypto projects & mint native tokens or NFTs <Text as={'b'}>with your staking rewards, not your crypto assets</Text> .
            </Text>
          </Stack>
          {/* <Stack
            spacing="3"
            direction={{ base: "column", sm: "row" }}
            justify="center"
            alignItems={"center"}>
            <Link  href="/#how-it-works">
              <Button borderColor={'indigo.500'} border={'2px'} borderRadius={5} fontWeight={600} color={'indigo.500'} pl={20} pr={20} variant='outline' size="lg" bg="#F5F5FF">
                HOW IT WORKS
              </Button>
            </Link> </Stack> */ }
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
                <Text color={'white'} opacity={0.5}>Vote which project can be eligible to get funded.</Text>
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
              <Stack w={'40%'} minH={'270px'} spacing={0} hidden={isMobile} p={5} borderRadius={8} justify={'space-between'} align={'center'} bg={'white'}>
                <Heading
                  fontWeight={700}
                  lineHeight={{ base: "3rem", md: "4rem" }}
                  size={useBreakpointValue({ base: "sm", md: "md" })}>
                  Vote
                </Heading>
                <Text  textAlign={'center'} w={'70%'} opacity={0.5}>Vote for your favorite project to help it kickstart a fundraising campaign with 20,000 stNEAR</Text>
                <Link  href="/#vote" w={'100%'} >
                  <Button mt={'20px'} borderColor={'indigo.500'}  borderRadius={5} fontWeight={600} colorScheme={'indigo'} w={'100%'}  py={6} variant={'solid'}  >
                    Projects to Vote
                  </Button>
                </Link>
              </Stack>
              <Stack w={'40%'} minH={'270px'} spacing={0} hidden={isMobile} p={5} borderRadius={8} justify={'space-between'} align={'center'} bg={'white'}>
                <Heading
                  fontWeight={700}
                  lineHeight={{ base: "3rem", md: "4rem" }}
                  size={useBreakpointValue({ base: "sm", md: "md" })}>
                  Fund
                </Heading>
                <Text  textAlign={'center'} w={'70%'} opacity={0.5}>Financially support NEAR projects with you stNEAR tokens and get rewards</Text>
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
