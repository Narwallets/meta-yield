// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Project, data } from "../_data";
import { getProjectDetails } from "../../../lib/near";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query as { id: any };
  const project = data.find((p) => p.id == id);
  if (!project) {
    res.status(404).json({ message: "Project not found" });
  }
  const projectOnChain = await getProjectDetails(parseInt(id));
  res.status(200).json({ ...project, kickstarter: projectOnChain });
}
