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
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Circle,
  Flex,
  VStack,
  Grid,
  GridItem,
  css,
  useBreakpointValue,
  Container,
  Spacer,
  Link,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  ModalHeader,
  Modal,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import {
  KickstarterGoalProps,
  TeamMemberProps,
} from "../../types/project.types";
import { useGetProjectDetails } from "../../hooks/projects";
import parse from "html-react-parser";
import RewardsCalculator from "./RewardsCalculator";
import GoalsProgressCard from "./GoalsProgressCard";
import FundingStatusCard from "./FundingStatusCard";
import moment from "moment";
import {
  claimAll,
  getBalanceOfTokenForSupporter,
  getStNearPrice,
  getSupporterEstimatedStNear,
  getWallet,
  storageDepositOfTokenForSupporter,
  withdrawAll,
} from "../../lib/near";
import {
  getMyProjectsFounded,
  getPeriod,
  getWinnerGoal,
  isOpenPeriod,
  PERIOD,
  yton,
} from "../../lib/util";

import RewardsEstimated from "./RewardsEstimated";
import ConnectButton from "./ConnectButton";

import { useStore } from "../../stores/wallet";
import Funding from "./Funding";
import FAQ from "./FAQ";
import Documents from "./Documents";
import PageLoading from "./PageLoading";
import { colors } from "../../constants/colors";
import { ArrowSquareOut, Link as LinkI, TwitterLogo } from "phosphor-react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

export enum ProjectStatus {
  NOT_LOGGIN,
  LOGGIN,
  FUTURE,
  ACTIVE,
  CLOSE,
  FUNDED,
  SUCCESS,
  UNSUCCESS,
}

const ProjectDetails = (props: { id: any }) => {
  const { isLoading, data: project } = useGetProjectDetails(parseInt(props.id));
  const tagsColor = useColorModeValue("gray.600", "gray.300");
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();
  const [showFund, setShowFund] = useState<boolean>(true);
  const [showWithdraw, setShowWithdraw] = useState<boolean>(false);
  const [showClaim, setShowClaim] = useState<boolean>(false);
  const [showApprove, setShowApprove] = useState<boolean>(false);
  const [showRewardsCalculator, setShowRewardsCalculator] =
    useState<boolean>(true);
  const [showRewardEstimated, setShowRewardsEstimated] =
    useState<boolean>(false);

  const [status, setStatus] = useState<ProjectStatus>(ProjectStatus.NOT_LOGGIN);
  const [ammountClaim, setRewards] = useState<any>(0);
  const [lockupDate, setLockupDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [cliffDate, setCliffDate] = useState<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [myProjectFounded, setMyProjectFounded] = useState<any>();
  const [ammountWithdraw, setAmmountWithdraw] = useState(0);

  const { wallet, isLogin } = useStore();
  const totalRaisedColor = useColorModeValue("green.500", "green.500");

  const onCloseModal = () => {
    onClose();
    router.push("/");
  };
  const tabListCss = useBreakpointValue({
    base: css({
      scrollbarWidth: "none",
      "::-webkit-scrollbar": { display: "none" },
      "-webkit-overflow-scrolling": "touch",
      boxShadow: "inset 0 -2px 0 rgba(0, 0, 0, 0.1)",
      border: "0 none",
    }),
    lg: css({}),
  });

  const withdrawAllStnear = async () => {
    // call to contract for withdraw
    const tempWallet = await getWallet();
    withdrawAll(tempWallet, parseInt(props.id)).then((val) => {
      console.log("Return withdrawAll", val);
    });
  };

  const claim = async () => {
    const tempWallet = await getWallet();
    const readyToClaim = await isReadyForClaimPToken();
    if (!readyToClaim) {
      storageDepositOfTokenForSupporter(
        tempWallet,
        project.kickstarter.token_contract_address
      );
    } else {
      claimAll(tempWallet, parseInt(props.id));
    }
  };

  const refreshStatus = (project: any, thisProjectFounded: any) => {
    if (isLogin) {
      setStatus(ProjectStatus.LOGGIN);
      if (isOpenPeriod(project.kickstarter)) {
        if (project.kickstarter.active) {
          setStatus(ProjectStatus.ACTIVE);
          if (
            thisProjectFounded &&
            parseInt(thisProjectFounded.supporter_deposit) > 0
          ) {
            setStatus(ProjectStatus.FUNDED);
          }
        } else {
          if (project.kickstarter.successful && thisProjectFounded) {
            setStatus(ProjectStatus.SUCCESS);
          } else {
            setStatus(ProjectStatus.UNSUCCESS);
          }
        }
      } else {
        if (getPeriod(project.kickstarter) === PERIOD.CLOSE) {
          if (project.kickstarter.successful && thisProjectFounded) {
            setStatus(ProjectStatus.SUCCESS);
          } else {
            setStatus(ProjectStatus.UNSUCCESS);
          }
        } else {
          // The project is not yet open
          setStatus(ProjectStatus.FUTURE);
        }
      }
    }
  };

  const getWithdrawAmmount = async (wallet: any, id: number, price: string) =>
    getSupporterEstimatedStNear(wallet, id, price);

  const calculateAmmountToWithdraw = async () => {
    if (
      project.kickstarter.successful &&
      !project.kickstarter.active &&
      myProjectFounded
    ) {
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

  const calculateTokensToClaim = () => {
    const winnerGoal: KickstarterGoalProps = getWinnerGoal(project.kickstarter);

    if (winnerGoal && myProjectFounded) {
      const formatDate = "YYYY/MM/DD HH:MM";
      const rewards = yton(myProjectFounded.available_rewards.toString());
      setRewards(rewards);
      setLockupDate(moment(winnerGoal.unfreeze_timestamp).format(formatDate));
      setEndDate(moment(winnerGoal.end_timestamp).format(formatDate));
      setCliffDate(moment(winnerGoal.cliff_timestamp).format(formatDate));
    }
  };

  const isReadyForClaimPToken = async () => {
    const tempWallet = await getWallet();
    return await getBalanceOfTokenForSupporter(
      tempWallet,
      project.kickstarter.token_contract_address
    );
  };

  const isUnfreeze = () => {
    const winnerGoal: KickstarterGoalProps = getWinnerGoal(project.kickstarter);
    const now = Date.now();
    // const result = moment.utc().diff(moment(winnerGoal.unfreeze_timestamp)) > 0;
    return now > winnerGoal.unfreeze_timestamp;
  };

  const isCliffOpen = () => {
    const winnerGoal: KickstarterGoalProps = getWinnerGoal(project.kickstarter);
    const now = Date.now();
    return now > winnerGoal.cliff_timestamp;
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

      case ProjectStatus.FUTURE:
        break;

      case ProjectStatus.ACTIVE:
        setShowFund(true);
        break;

      case ProjectStatus.FUNDED:
        calculateAmmountToWithdraw();
        setShowFund(true);
        setShowRewardsEstimated(true);
        break;

      case ProjectStatus.SUCCESS:
        calculateAmmountToWithdraw();
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
    if (
      project &&
      project.projectDisabled &&
      project.projectDisabled.disabled == true
    ) {
      onOpen();
    }
  }, [project]);
  useEffect(() => {
    (async () => {
      if (project && isLogin) {
        const thisProjectFounded = await getMyProjectsFounded(
          project.kickstarter.id,
          wallet
        );
        setMyProjectFounded(thisProjectFounded);
        refreshStatus(project, thisProjectFounded);
        const isApproved = await isReadyForClaimPToken();
        setShowApprove(isApproved === null);
      }
    })();
  }, [wallet, props, project]);

  if (isLoading) return <PageLoading />;

  return (
    <> {project.projectDisabled && 
      (<Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={() => onCloseModal()}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{project.projectDisabled.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack fontSize={"xl"} textAlign="center">
              <div
                dangerouslySetInnerHTML={{
                  __html: project.projectDisabled.bodyHtml,
                }}
              ></div>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                onCloseModal();
              }}
            >
              Back to projets
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>)}
      <Container maxW="container.xl">
        <Grid
          as="section"
          templateRows={{ base: "1fr", lg: "1fr" }}
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap={"2rem"}
        >
          <GridItem>
            <HStack alignItems={{ base: "center", md: "flex-start" }}>
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

              <Text
                as="h2"
                fontWeight="bold"
                fontSize={{ base: "xl", md: "4xl" }}
              >
                {project?.name}
              </Text>
              {/* {project?.verified && (
              <Image
                src={"/check.svg"}
                alt="check"
                width={"16px"}
                height={"16px"}
              />
            )} */}
            </HStack>
            <Text display={isMobile ? "none" : "initial"} mt="2">
              {project?.motto}
            </Text>
            <HStack alignItems="center" mt="5">
              {!isMobile && (
                <>
                  <Wrap shouldWrapChildren color={tagsColor}>
                    {project?.tags &&
                      project?.tags.map((tag: string) => (
                        <Tag key={tag} color="inherit" px="3">
                          {tag}
                        </Tag>
                      ))}
                  </Wrap>
                  <Spacer />
                </>
              )}

              <HStack>
                <Link href={project?.projectUrl} isExternal>
                  <Button
                    colorScheme="gray"
                    leftIcon={<LinkI />}
                    variant="outline"
                  >
                    Website
                  </Button>
                </Link>
                {project?.twitter && (
                  <Link href={project?.twitter} isExternal>
                    <Button colorScheme="gray" variant="outline" rounded="full">
                      <TwitterLogo weight="fill" />
                    </Button>
                  </Link>
                )}
              </HStack>
            </HStack>
            <Image
              mt={5}
              src={project?.imageUrl}
              alt="project"
              borderRadius="xl"
              fit="cover"
            />
          </GridItem>
          <GridItem rowSpan={{ base: 0, lg: 2 }}>
            <Box
              px={{ base: "0", md: "6" }}
              py={{ base: "0", md: "6" }}
              borderRadius="lg"
            >
              <Stack spacing={{ base: "3", md: "3" }}>
                <FundingStatusCard kickstarter={project?.kickstarter} />
                {project?.kickstarter.goals &&
                  project?.kickstarter.goals.length > 0 && (
                    <GoalsProgressCard
                      projectStatus={status}
                      kickstarter={project?.kickstarter}
                    />
                  )}
                {showRewardEstimated && isLogin && (
                  <RewardsEstimated
                    kickstarter={project?.kickstarter}
                  ></RewardsEstimated>
                )}
                <Stack w={"100%"}>
                  {isLogin && (showFund || showWithdraw) && (
                    <Funding
                      project={project}
                      showOnlyWithdraw={showWithdraw}
                      supportedDeposited={
                        myProjectFounded && myProjectFounded.supporter_deposit
                          ? yton(myProjectFounded.supporter_deposit)
                          : 0
                      }
                    ></Funding>
                  )}
                  {!isLogin && (
                    <ConnectButton
                      text={"Connect wallet to fund"}
                    ></ConnectButton>
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
                              <Stack
                                direction={{ base: "column", md: "row" }}
                                spacing={"1rem"}
                                p={3}
                                boxShadow="lg"
                                justifyContent={"space-between"}
                                alignItems={"center"}
                              >
                                <Stack
                                  direction={"row"}
                                  w={{ base: "full", md: "auto" }}
                                  justifyContent={{
                                    base: "space-around",
                                    md: "space-between",
                                  }}
                                  alignItems="center"
                                >
                                  <Image
                                    boxSize={{ base: "80px", md: "40px" }}
                                    objectFit="cover"
                                    src="/near_icon.svg"
                                    alt="near"
                                  />
                                  <VStack h={"80px"}>
                                    <Text
                                      color={"grey"}
                                      fontSize={"xxs"}
                                      fontWeight={700}
                                    >
                                      NEAR{" "}
                                    </Text>
                                    <Text color={"black"} fontWeight={700}>
                                      {yton(myProjectFounded.deposit_in_near)}{" "}
                                    </Text>
                                    <Text>{} </Text>
                                  </VStack>
                                </Stack>
                                <Stack
                                  direction={"row"}
                                  w={{ base: "full", md: "auto" }}
                                  justifyContent={{
                                    base: "space-around",
                                    md: "space-between",
                                  }}
                                  alignItems="center"
                                >
                                  <VStack h={"80px"}>
                                    <Text
                                      color={"grey"}
                                      fontSize={"xxs"}
                                      fontWeight={700}
                                    >
                                      BOND DUE
                                    </Text>
                                    <Text fontWeight={700} fontSize={"14px"}>
                                      {lockupDate}
                                    </Text>
                                  </VStack>
                                  <VStack h={"80px"}>
                                    <Text
                                      color={"grey"}
                                      fontSize={"xxs"}
                                      fontWeight={700}
                                    >
                                      AVAILABLE{" "}
                                    </Text>
                                    <Text>
                                      {yton(myProjectFounded.deposit_in_near)}{" "}
                                    </Text>
                                  </VStack>
                                </Stack>
                                <Button
                                  disabled={
                                    !isUnfreeze() ||
                                    myProjectFounded.deposit_in_near <= 0
                                  }
                                  colorScheme="blue"
                                  size="lg"
                                  onClick={withdrawAllStnear}
                                  w={{ base: "full", md: "min-content" }}
                                >
                                  Claim
                                </Button>
                              </Stack>
                            )
                        }

                        {
                          // show if there are pending rewards tokens to claim
                          myProjectFounded && myProjectFounded.rewards > 0 && (
                            <Stack
                              direction={{ base: "column", md: "row" }}
                              spacing={"1rem"}
                              p={3}
                              boxShadow="lg"
                              justifyContent={"space-between"}
                              alignItems={"center"}
                            >
                              <Stack
                                direction={"row"}
                                w={{ base: "full", md: "auto" }}
                                justifyContent={{
                                  base: "space-around",
                                  md: "space-between",
                                }}
                                alignItems="center"
                              >
                                <Image
                                  boxSize={{ base: "80px", md: "40px" }}
                                  objectFit="cover"
                                  src={project.kickstarter.project_token_icon}
                                  alt="ptoken"
                                />
                                <VStack h={"80px"} justify={"space-between"}>
                                  <Text
                                    color={"grey"}
                                    fontSize={"xxs"}
                                    fontWeight={700}
                                  >
                                    {project.kickstarter.project_token_symbol}{" "}
                                  </Text>
                                  <Text
                                    color={"black"}
                                    fontSize={"xxs"}
                                    fontWeight={700}
                                  >
                                    {yton(myProjectFounded.rewards)}{" "}
                                  </Text>
                                </VStack>
                              </Stack>
                              <Stack
                                direction={"row"}
                                w={{ base: "full", md: "auto" }}
                                justifyContent={{
                                  base: "space-around",
                                  md: "space-between",
                                }}
                                alignItems="center"
                              >
                                <VStack h={"80px"} justify={"space-between"}>
                                  <Text
                                    color={"grey"}
                                    fontSize={"xxs"}
                                    fontWeight={700}
                                  >
                                    BOND DUE
                                  </Text>
                                  <Text fontWeight={700} fontSize={"14px"}>
                                    {cliffDate} TO <br></br> {endDate}{" "}
                                  </Text>
                                </VStack>
                                <VStack h={"80px"} justify={"space-between"}>
                                  <Text
                                    color={"grey"}
                                    fontSize={"xxs"}
                                    fontWeight={700}
                                  >
                                    AVAILABLE{" "}
                                  </Text>
                                  <Text>
                                    {yton(myProjectFounded.available_rewards)}{" "}
                                  </Text>
                                </VStack>
                              </Stack>
                              <Button
                                disabled={
                                  !isCliffOpen ||
                                  myProjectFounded.available_rewards <= 0
                                }
                                colorScheme="blue"
                                size="lg"
                                onClick={claim}
                                w={{ base: "full", md: "min-content" }}
                              >
                                {showApprove ? "Approve" : "Claim"}
                              </Button>
                            </Stack>
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
          </GridItem>
          <GridItem>
            <Tabs>
              <TabList
                overflowX={{ base: "auto", lg: "visible" }}
                css={tabListCss}
                w={{ base: "calc(100vw - 4rem)", lg: "full" }}
                my={{ base: "auto" }}
                minW={{ base: "0", lg: "0" }}
                maxW={{ base: "none", lg: "none" }}
              >
                <Tab>Campaign</Tab>
                <Tab>Team</Tab>
                <Tab>FAQ</Tab>
                <Tab>Roadmap</Tab>
                <Tab>Documents</Tab>
                <Tab>About</Tab>
              </TabList>

              <TabPanels minHeight="580px">
                <TabPanel>
                  <Text fontSize="sm" fontWeight="subtle">
                    CAMPAIGN
                  </Text>
                  <Stack mt={5}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: project?.campaignHtml,
                      }}
                    ></div>
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <Team team={project?.team} />
                </TabPanel>
                <TabPanel>
                  <FAQ data={project?.faq} />
                </TabPanel>
                <TabPanel>
                  <Box>
                    <Text fontSize="sm" fontWeight="subtle">
                      ROADMAP
                    </Text>
                    <Stack mt={5}>
                      <Image
                        src={project?.roadmap.imageUrl}
                        alt="project"
                        width="400"
                        objectFit="cover"
                      />
                      <Link href={project?.roadmap.linkUrl} isExternal>
                        Full Roadmap <ExternalLinkIcon mx="2px" />
                      </Link>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Documents data={project?.documents} />
                </TabPanel>
                <TabPanel>
                  <Text fontSize="sm" fontWeight="subtle">
                    ABOUT
                  </Text>
                  <Stack mt={5}>
                    <div
                      dangerouslySetInnerHTML={{ __html: project?.about }}
                    ></div>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

const Team = (props: { team: TeamMemberProps[] }) => {
  const team = props.team;
  return (
    <>
      <Text fontSize="sm" fontWeight="subtle">
        TEAM
      </Text>
      <Stack divider={<StackDivider />} spacing="4" mt="5">
        {team.map((member, index) => (
          <Stack key={index} fontSize="sm" px="4" spacing="4">
            <Stack direction="row" justify="space-between" spacing="4">
              <HStack spacing="3">
                <Avatar
                  src={member.avatar ? member.avatar : ""}
                  name={member.name}
                  boxSize="10"
                />
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
    </>
  );
};

export default ProjectDetails;
