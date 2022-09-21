import { useQuery } from "react-query";
import {
  fetchProjects,
  fetchProjectDetails,
  fetchActiveProjects,
  fetchSupportedProjects,
  fetchFinishedProjects,
  fetchComingSoonProjects,
  fetchVotedProjects,
  fetchProjectsVotes,
  fetchWinnerProject,
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
    refetchOnWindowFocus: false,
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

export const useComingSoonProjects = () => {
  return useQuery("comingsoon-projects", () => fetchComingSoonProjects(), {
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

export const useGetWinnerVotedProjects = () => {
  return useQuery("winner-projects", () => fetchWinnerProject(), {
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useGetSupportedProjects = (account_id: string) => {
  return useQuery(
    "supported-projects",
    () => fetchSupportedProjects(account_id),
    {
      onError: (err) => {
        console.error(err);
      },
    }
  );
};

export const useGetProjectsVotes = () => {
  // get votes refetch interval from env var, if does not exits set 5 seconds as default
  const refetchInterval = process.env.NEXT_PUBLIC_VOTES_REFETCH_INTERVAL
    ? parseInt(process.env.NEXT_PUBLIC_VOTES_REFETCH_INTERVAL)
    : 5000;
  return useQuery("projects-votes", () => fetchProjectsVotes(), {
    onError: (err) => {
      console.error(err);
    },
    refetchInterval: refetchInterval,
  });
};
