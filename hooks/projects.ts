import { useQuery } from "react-query";
import {
  fetchProjects,
  fetchProjectDetails,
  fetchActiveProjects,
  fetchSupportedProjects,
  fetchFinishedProjects,
  fetchVotedProjects,
} from "../queries/projects";

export const useGetProjects = () => {
  return useQuery("projects", () => fetchProjects(), {
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useGetProjectDetails = (id: number, votingMode?: boolean) => {
  return useQuery("project-fund", () => fetchProjectDetails(id, votingMode), {
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useGetActiveProjects = () => {
  return useQuery("active-projects", () => fetchActiveProjects(), {
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useGetFinishedProjects = () => {
  return useQuery("finished-projects", () => fetchFinishedProjects(), {
    onError: (err) => {
      console.error(err);
    },
  });
};
    export const useGetProjectsToVote = () => {
  return useQuery("vote-projects", () => fetchVotedProjects(), {
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useGetSupportedProjects = (wallet_id: string) => {
  return useQuery(
    "supported-projects",
    () => fetchSupportedProjects(wallet_id),
    {
      onError: (err) => {
        console.error(err);
      },
    }
  );
};
