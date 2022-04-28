import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
  StackDivider,
  SimpleGrid,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Circle,
  Link,
  Flex,
  VStack,
  Input,
  Icon,
} from "@chakra-ui/react";
import Card from "./Card";
// import Image from "next/image";
import {
  KickstarterGoalProps,
  TeamMemberProps,
} from "../../types/project.types";
import { useGetProjectDetails } from "../../hooks/projects";
import parse from "html-react-parser";
import RewardsCalculator from "./RewardsCalculator";
import { useRouter } from "next/router";
import GoalsProgressCard from "./GoalsProgressCard";
import FundingStatusCard from "./FundingStatusCard";
import moment from "moment";
import {
  claimAll,
  getStNearPrice,
  getSupporterEstimatedStNear,
  getWallet,
  withdraw,
  withdrawAll,
} from "../../lib/near";
import {
  getCurrentFundingGoal,
  getMyProjectsFounded,
  yton,
} from "../../lib/util";

import RewardsEstimated from "./RewardsEstimated";
import FundButton from "./FundButon";
import ConnectButton from "./ConnectButton";

import { useStore } from "../../stores/wallet";
import { useFormik } from "formik";
import * as Yup from "yup";
import Funding from "./Funding";

export enum ProjectStatus {
  NOT_LOGGIN,
  LOGGIN,
  ACTIVE,
  CLOSE,
  FUNDED,
  SUCCESS,
  UNSUCCESS,
}

const ProjectDetails = (props: { id: any }) => {
  const router = useRouter();
  const { isLoading, data: project } = useGetProjectDetails(parseInt(props.id));
  const tagsColor = useColorModeValue("gray.600", "gray.300");

  const [showFund, setShowFund] = useState<boolean>(true);
  const [showWithdraw, setShowWithdraw] = useState<boolean>(false);
  const [showClaim, setShowClaim] = useState<boolean>(false);
  const [showRewardsCalculator, setShowRewardsCalculator] =
    useState<boolean>(true);
  const [showRewardEstimated, setShowRewardsEstimated] =
    useState<boolean>(false);

  const [status, setStatus] = useState<ProjectStatus>(ProjectStatus.NOT_LOGGIN);
  const [ammountClaim, setRewards] = useState<any>(0);
  const [lockupDate, setLockupDate] = useState<any>();

  const [myProjectFounded, setMyProjectFounded] = useState<any>();
  const [ammountWithdraw, setAmmountWithdraw] = useState(0);

  const { wallet, isLogin } = useStore();
  const totalRaisedColor = useColorModeValue("green.500", "green.500");

  const withdrawAllStnear = async () => {
    // call to contract for withdraw
    const tempWallet = await getWallet();
    withdrawAll(tempWallet, parseInt(props.id)).then((val) => {
      console.log("Return withdrawAll", val);
    });
  };

  const claim = async () => {
    // call to contract for claiming the rewards
    const tempWallet = await getWallet();
    claimAll(tempWallet, parseInt(props.id)).then((val) => {
      console.log("Return claimAll", val);
    });
  };

  const refreshStatus = (project: any, thisProjectFounded: any) => {
    if (isLogin) {
      setStatus(ProjectStatus.LOGGIN);
      if (project.kickstarter.active) {
        setStatus(ProjectStatus.ACTIVE);
        if (
          thisProjectFounded &&
          parseInt(thisProjectFounded.supporter_deposit) > 0
        ) {
          setStatus(ProjectStatus.FUNDED);
        }
      } else {
        // setStatus(ProjectStatus.CLOSE);
        if (project.kickstarter.successful && thisProjectFounded) {
          setStatus(ProjectStatus.SUCCESS);
        } else {
          setStatus(ProjectStatus.UNSUCCESS);
        }
      }
    }
  };

  const getWithdrawAmmount = async (wallet: any, id: number, price: string) =>
    getSupporterEstimatedStNear(wallet, id, price);

  const calculateAmmountToWithdraw = async () => {
    if (!project.kickstarter.active) {
      calculateTokensToClaim();
      const price = await getStNearPrice();
      const amount =
        parseInt(project.kickstarter.stnear_price_at_unfreeze) > 0
          ? project.kickstarter.stnear_price_at_unfreeze
          : await getWithdrawAmmount(
              wallet,
              parseInt(props.id),
              price.toString()
            );
      if (amount) {
        setAmmountWithdraw(yton(amount));
      }
    } else {
      setAmmountWithdraw(
        myProjectFounded && myProjectFounded.supporter_deposit
          ? yton(myProjectFounded.supporter_deposit)
          : 0
      );
    }
  };

  const isPeriodEnded = () => {
    return moment().diff(moment(project.kickstarter.close_timestamp)) < 0;
  };

  const calculateTokensToClaim = () => {
    const winnerGoal: KickstarterGoalProps = getCurrentFundingGoal(
      project.kickstarter.goals,
      project.kickstarter.total_deposited
    );

    if (winnerGoal && myProjectFounded) {
      const rewards = yton(myProjectFounded.available_rewards.toString());
      setRewards(rewards);
      setLockupDate(
        moment(winnerGoal.unfreeze_timestamp).format("MMMM Do, YYYY")
      );
    }
  };

  useEffect(() => {
    setShowWithdraw(false);
    setShowClaim(false);
    setShowFund(false);
    setShowRewardsCalculator(false);

    switch (status) {
      case ProjectStatus.LOGGIN:
        // is login true
        break;

      case ProjectStatus.ACTIVE:
        setShowFund(true);
        break;

      case ProjectStatus.FUNDED:
        calculateAmmountToWithdraw();
        setShowFund(true);
        setShowWithdraw(true);
        setShowRewardsEstimated(true);
        break;

      case ProjectStatus.SUCCESS:
        calculateAmmountToWithdraw();
        setShowWithdraw(false);
        setShowFund(false);
        setShowClaim(true);
        break;

      case ProjectStatus.UNSUCCESS:
        calculateAmmountToWithdraw();
        setShowWithdraw(true);
        break;
    }
  }, [status]);

  useEffect(() => {
    (async () => {
      if (project && isLogin) {
        const thisProjectFounded = await getMyProjectsFounded(
          project.kickstarter.id,
          wallet
        );
        setMyProjectFounded(thisProjectFounded);
        refreshStatus(project, thisProjectFounded);
      }
    })();
  }, [wallet, props, project]);

  if (isLoading) return <></>;
  return (
    <Box pr={123} pl={123} as="section" mx="auto">
      <SimpleGrid columns={2} spacing={30}>
        <Box>
          <Stack
            spacing={{ base: "1", md: "2" }}
            direction={{ base: "column", md: "row" }}
          >
            <Circle
              position={"relative"}
              backgroundColor={"white"}
              maxH={"55px"}
              maxW={"55px"}
              mr={2}
              boxShadow="xl"
            >
              <Circle maxW={"60px"} m="2" overflow={"hidden"}>
                <Image
                  src={project?.avatarUrl}
                  alt="project"
                  width="48px"
                  height="48px"
                />
              </Circle>
            </Circle>

            <Text as="h2" fontWeight="bold" fontSize="4xl">
              {project?.name}
            </Text>
            {project?.verified && (
              <Image
                src={"/check.svg"}
                alt="check"
                width={"16px"}
                height={"16px"}
              />
            )}
          </Stack>
          <Text mt="2">{project?.motto}</Text>
          <Wrap shouldWrapChildren mt="5" color={tagsColor}>
            {project?.tags &&
              project?.tags.map((tag: string) => (
                <Tag key={tag} color="inherit" px="3">
                  {tag}
                </Tag>
              ))}
          </Wrap>
          <Stack
            mt={5}
            mb={10}
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "3", md: "10" }}
            align="flex-start"
          >
            <Image
              src={project?.imageUrl}
              alt="project"
              borderRadius="xl"
              fit="cover"
            />
          </Stack>
          <Stack
            spacing={{ base: "1", md: "2" }}
            direction={{ base: "column", md: "row" }}
          >
            <Box>
              <Tabs>
                <TabList>
                  <Tab>Campaign</Tab>
                  <Tab>Team</Tab>
                  <Tab>FAQ</Tab>
                  <Tab>Roadmap</Tab>
                  <Tab>Documents</Tab>
                  <Tab>About</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Text fontSize="sm" fontWeight="subtle">
                      CAMPAIGN
                    </Text>
                    <Text fontSize="lg" fontWeight="extrabold">
                      Our Vision
                    </Text>
                    {parse(project?.campaignHtml)}
                  </TabPanel>
                  <TabPanel>
                    <Text fontSize="sm" fontWeight="subtle">
                      TEAM
                    </Text>
                    <Text fontSize="lg" fontWeight="extrabold">
                      Our founding team
                    </Text>
                    <Team team={project?.team} />
                  </TabPanel>
                  <TabPanel>
                    <Text fontSize="sm" fontWeight="subtle">
                      FAQ
                    </Text>
                  </TabPanel>
                  <TabPanel>
                    <Text fontSize="sm" fontWeight="subtle">
                      ROADMAP
                    </Text>
                    <Text fontSize="lg" fontWeight="extrabold">
                      Our Timeline
                    </Text>
                    <Image
                      src={project?.roadmapImageUrl}
                      alt="project"
                      width="400"
                      height={"100%"}
                      objectFit="cover"
                    />
                  </TabPanel>
                  <TabPanel>
                    <Text fontSize="sm" fontWeight="subtle">
                      DOCUMENTS
                    </Text>
                  </TabPanel>
                  <TabPanel>
                    <Text fontSize="sm" fontWeight="subtle">
                      ABOUT
                    </Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Stack>
        </Box>
        <Box
          px={{ base: "4", md: "6" }}
          py={{ base: "5", md: "6" }}
          borderRadius="lg"
        >
          <Stack spacing={{ base: "3", md: "10" }}>
            <FundingStatusCard kickstarter={project?.kickstarter} />
            {project?.kickstarter.goals &&
              project?.kickstarter.goals.length > 0 && (
                <GoalsProgressCard kickstarter={project?.kickstarter} />
              )}
            {showRewardEstimated && isLogin && (
              <RewardsEstimated
                kickstarter={project?.kickstarter}
              ></RewardsEstimated>
            )}
            <Stack w={"100%"}>
              {isLogin && showFund && (
                <Funding
                  project={project}
                  supportedDeposited={
                    myProjectFounded && myProjectFounded.supporter_deposit
                      ? yton(myProjectFounded.supporter_deposit)
                      : 0
                  }
                ></Funding>
              )}
              {!isLogin && (
                <ConnectButton text={"Connect wallet to fund"}></ConnectButton>
              )}

              {showClaim && isLogin && (
                <>
                  <Stack w={"100%"}>
                    {myProjectFounded &&
                      (myProjectFounded.supporter_deposit > 0 ||
                        myProjectFounded.rewards > 0) && <Text>BONDS</Text>}
                    {
                      // show if there are deposits left to claim
                      myProjectFounded &&
                        myProjectFounded.supporter_deposit > 0 && (
                          <Flex
                            p={3}
                            boxShadow="lg"
                            justifyContent={"space-between"}
                            alignItems={"center"}
                          >
                            <Image
                              boxSize="40px"
                              objectFit="cover"
                              src={project.kickstarter.project_token_icon}
                              alt="near"
                            />
                            <VStack>
                              <Text fontSize={"xxs"} fontWeight={700}>
                                NEARS{" "}
                              </Text>
                              <Text>
                                {yton(myProjectFounded.deposit_in_near)}{" "}
                              </Text>
                              <Text>{} </Text>
                            </VStack>
                            <VStack>
                              <Text fontSize={"xxs"} fontWeight={700}>
                                BOND DUE
                              </Text>
                              <Text>{lockupDate}</Text>
                            </VStack>

                            <Button
                              colorScheme="blue"
                              size="lg"
                              onClick={withdrawAllStnear}
                            >
                              Claim
                            </Button>
                          </Flex>
                        )
                    }

                    {
                      // show if there are pending rewards to claim
                      myProjectFounded && myProjectFounded.rewards > 0 && (
                        <Flex
                          p={3}
                          boxShadow="lg"
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Image
                            boxSize="40px"
                            objectFit="cover"
                            src={project.kickstarter.project_token_icon}
                            alt="ptoken"
                          />
                          <VStack>
                            <Text fontSize={"xxs"} fontWeight={700}>
                              {project.kickstarter.project_token_symbol}{" "}
                            </Text>
                            <Text>{yton(myProjectFounded.rewards)} </Text>
                          </VStack>
                          <VStack>
                            <Text fontSize={"xxs"} fontWeight={700}>
                              BOND DUE
                            </Text>
                            <Text>{lockupDate}</Text>
                          </VStack>
                          <VStack>
                            <Text fontSize={"xxs"} fontWeight={700}>
                              AVAILABLE{" "}
                            </Text>
                            <Text>
                              {yton(myProjectFounded.available_rewards)}{" "}
                            </Text>
                          </VStack>
                          <Button colorScheme="blue" size="lg" onClick={claim}>
                            Claim
                          </Button>
                        </Flex>
                      )
                    }
                  </Stack>
                </>
              )}
            </Stack>
            {showRewardsCalculator && (
              <RewardsCalculator kickstarter={project?.kickstarter} />
            )}
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

const Team = (props: { team: TeamMemberProps[] }) => {
  const team = props.team;
  return (
    <Stack divider={<StackDivider />} spacing="4">
      {team.map((member) => (
        <Stack key={member.id} fontSize="sm" px="4" spacing="4">
          <Stack direction="row" justify="space-between" spacing="4">
            <HStack spacing="3">
              <Avatar src={member.avatarUrl} boxSize="10" />
              <Box>
                <Text fontWeight="medium" color="emphasized">
                  {member.name}
                </Text>
                {/* <Text color="muted">{member.handle}</Text> */}
              </Box>
            </HStack>
          </Stack>
          <Text
            color="muted"
            sx={{
              "-webkit-box-orient": "vertical",
              "-webkit-line-clamp": "2",
              overflow: "hidden",
              display: "-webkit-box",
            }}
          >
            {member.bio}
          </Text>
        </Stack>
      ))}
    </Stack>
  );
};

export default ProjectDetails;
