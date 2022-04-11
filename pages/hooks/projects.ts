import { useQuery } from "react-query";
import { fetchProjects, fetchProjectDetails, fetchActiveProjects } from "../queries/projects";
import { getActiveProjects, getProjectDetails } from "../../lib/near";
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

// const fetchActiveProjectsData = async () => {
//   const projects = await fetchProjects();
//   const activeProjects = await getActiveProjects();

//   return activeProjects.active.map(async (ap: any) => {
//     return {
//       ...projects.find((p: ProjectProps) => p.id == ap.id),
//       kickstarter: await getProjectDetails(ap.id),
//     };
//   });
//   if (activeProjects && activeProjects.length > 0) {
//     let result = [];
//     for (var index: number = 0; index < activeProjects.length; index++) {
//       const projectDetails = await getProjectDetails(activeProjects[index].id);
//       result.push({
//         ...projects.find((p: ProjectProps) => p.id == activeProjects[index].id),
//         kickstarter: projectDetails,
//       });
//     }
//     return result;
//   } else {
//     return [];
//   }
// };

export const  useGetActiveProjects = () => {
  return useQuery("active-projects", () => fetchActiveProjects(), {
    onError: (err) => {
      console.error(err);
    },
  });
};
