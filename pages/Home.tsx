import { Hero } from "./components/Hero";
import { ActiveProject } from "./components/ActiveProject";
import { Projects } from "./components/Projects";
import { HowItWorks } from "./components/HowItWorks";
import { Box } from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect } from "react";
import { useStore } from "./stores/wallet";
export interface TeamMemberProps {
  id: number;
  name: string;
  bio: string;
  avatarUrl: string;
  handle: string;
}
export interface KickstarterGoalProps {
  cliff_timestamp: number;
  desired_amount: number;
  end_timestamp: number;
  id: number;
  name: string;
  tokens_to_release: string;
  unfreeze_timestamp: number;
}
export interface KickstarterProps {
  close_timestamp: number;
  goals: KickstarterGoalProps[];
  id: number;
  open_timestamp: number;
  token_contract_address: string;
  total_deposited: number;
  total_supporters: number;
}
export interface ProjectProps {
  id: number;
  name: string;
  motto: string;
  imageUrl: string;
  avatarUrl: string;
  description: string;
  verified: boolean;
  active: boolean;
  tags: string[];
  campaignHtml: string;
  team: TeamMemberProps[];
  kickstarter?: KickstarterProps;
}

const Home = () => {
  return (
    <>
      <Box pr={123} pl={123}>
        <Hero />

        <ActiveProject />
        <Projects />
        <HowItWorks />
      </Box>
    </>
  );
};

export default Home;
