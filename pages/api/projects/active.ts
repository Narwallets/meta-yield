// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Project, data } from "../_data";
import { getActiveProjects, getProjectDetails } from "../../../lib/near";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let result: { open: any[]; active: any[] } = { open: [], active: [] };

  const activeProjects = await getActiveProjects();
  if (activeProjects) {
    for (const project of activeProjects.open) {
      const projectOnChain = await getProjectDetails(project.id);
      const projectStatic = data.find((sp) => sp.id === project.id);
      result.open.push({
        ...projectStatic,
        kickstarter: projectOnChain,
      });
    }

    for (const project of activeProjects.active) {
      const projectOnChain = await getProjectDetails(project.id);
      const projectStatic = data.find((sp) => sp.id === project.id);
      result.active.push({
        ...projectStatic,
        kickstarter: projectOnChain,
      });
    }
  }
  res.status(200).json(result);
}
