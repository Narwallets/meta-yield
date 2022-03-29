import { useQuery } from "react-query";
import { fetchProjects } from "../queries/projects";

export const useGetProjects = () => {
  return useQuery("projects", () => fetchProjects(), {
    onError: (err) => {
      console.error(err);
    },
  });
};
