import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  HStack,
  VStack,
  Icon,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
  StackDivider,
  Heading,
  useBreakpointValue,
  SimpleGrid,
  AvatarBadge,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Progress,
  Flex,
  Spacer,
  Input,
  Center,
  Circle,
} from "@chakra-ui/react";
import Card from "./Card";
// import Image from "next/image";
import { CaretRight, CircleWavyCheck } from "phosphor-react";
import { ProjectProps, TeamMemberProps } from "../../types/project.types";
import { useGetProjects, useGetProjectDetails } from "../../hooks/projects";
import parse from "html-react-parser";
import RewardsCalculator from "./RewardsCalculator";
import { useRouter } from "next/router";
import GoalsProgressCard from "./GoalsProgressCard";
import FundingStatusCard from "./FundingStatusCard";
import moment from "moment";
import {
  fundToKickstarter,
  getStNearPrice,
  getSupportedKickstarters,
  getSupporterEstimatedStNear,
  getWallet,
  withdrawAll,
} from "../../lib/near";
import { yoctoToStNear } from "../../lib/util";
import RewardsEstimated from "./RewardsEstimated";
import FundButton from "./FundButon";
const ProjectDetails = (props: { id: any }) => {
  const router = useRouter();
  const { isLoading, data: project } = useGetProjectDetails(parseInt(props.id));
  const tagsColor = useColorModeValue("gray.600", "gray.300");
  const [showFund, setShowFund] = useState(true);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showClaim, setShowClaim] = useState(false);
  const [showRewardsCalculator, setShowRewardsCalculator] = useState(true);
  const [showRewardEstimated, setShowRewardsEstimated] = useState(false);
  const [ammountWithdraw, setAmmountWithdraw] = useState("0");

  const totalRaisedColor = useColorModeValue("green.500", "green.500");

  const withdraw = async () => {
    // call to contract for withdraw
    const tempWallet = await getWallet();
    withdrawAll(tempWallet, parseInt(props.id)).then((val) => {
      console.log("Resurn withdrrawAll", val);
    });
  };
  const claim = () => {
    // call to contract for claiming the rewards
  };

  const getWithdrawAmmount = async (wallet: any, id: number, price: string) =>
    getSupporterEstimatedStNear(wallet, id, price);

  useEffect(() => {
    (async () => {
      if (project) {
        const tempWallet = await getWallet();
        const walletId = tempWallet.getAccountId();
        if (walletId) {
          const projectFounded: any[] = await getSupportedKickstarters(walletId);
  
          if (
            projectFounded &&
            projectFounded.length &&
            projectFounded.find((val: any) => (val.id = project.kickstarter.id))
          ) {
            setShowFund(false);
            setShowRewardsCalculator(false);
            setShowRewardsEstimated(true);
          }
  
          if (!project.kickstarter.active) {
            // if project is not active (not able to fund) hide rewards calculator and fund button
            setShowFund(false);
            setShowRewardsCalculator(false);
            if (project.kickstarter.successful) {
              setShowWithdraw(true);
              const price = await getStNearPrice();
              const ammount =
                parseInt(project.kickstarter.stnear_price_at_unfreeze) > 0
                  ? project.kickstarter.stnear_price_at_unfreeze
                  : await getWithdrawAmmount(
                      tempWallet,
                      parseInt(props.id),
                      price.toString()
                    );
              if (ammount) {
                setAmmountWithdraw(yoctoToStNear(parseInt(ammount)).toFixed(5));
              }
            }
          }
        }
        
      }
    })();
  }, [props, project]);

  useEffect(() => {
    if (project) {
      if (
        project.kickstarter.goals.lenght &&
        moment().diff(moment(project.kickstarter.close_timestamp)) <= 0
      ) {
        setShowFund(true);
      }
    }
  }, [project]);

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
            <Stack align="center">
              <FundButton
                show={showFund}
                isFullWidth
                size="lg"
                onClick={() => router.push(`/project/fund/${project?.id}`)}
              ></FundButton>
              {showWithdraw && (
                <Button
                  colorScheme="blue"
                  isFullWidth
                  size="lg"
                  onClick={withdraw}
                >
                  Withdraw (stNEAR {ammountWithdraw})
                </Button>
              )}
              {showClaim && (
                <Button
                  colorScheme="blue"
                  isFullWidth
                  size="lg"
                  onClick={claim}
                >
                  Claim Rewards
                </Button>
              )}
            </Stack>
            {showRewardsCalculator && (
              <RewardsCalculator kickstarter={project?.kickstarter} />
            )}

            {showRewardEstimated && (
              <RewardsEstimated
                kickstarter={project?.kickstarter} 
              ></RewardsEstimated>
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
