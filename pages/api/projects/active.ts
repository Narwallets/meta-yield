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
  for (const open of activeProjects.open) {
    const projectOnChain = await getProjectDetails(open.id);
    const projectStatic = data.find((sp) => sp.id === open.id);
    result.open.push({
      ...projectStatic,
      kickstarter: projectOnChain,
    });
  }

  for (const open of activeProjects.active) {
    const projectOnChain = await getProjectDetails(open.id);
    const projectStatic = data.find((sp) => sp.id === open.id);
    result.active.push({
      ...projectStatic,
      kickstarter: projectOnChain,
    });
  }
  res.status(200).json(result);
}
