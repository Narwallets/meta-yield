import { useQuery } from "react-query";
import {
  fetchProjects,
  fetchProjectDetails,
  fetchActiveProjects,
  fetchSupportedProjects,
  fetchFinishedProjects,
  fetchComingSoonProjects,
} from "../queries/projects";
import { getActiveProjects, getProjectDetails } from "../lib/near";
import { number } from "yup";
import { ProjectProps } from "../types/project.types";
import { getFips } from "crypto";
export const useGetProjects = () => {
  return useQuery("projects", () => fetchProjects(), {
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useGetProjectDetails = (id: number) => {
  return useQuery("project-fund", () => fetchProjectDetails(id), {
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
