// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {  dataToVote } from "../../_data";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query as { id: any };
  const project = dataToVote.find((p) => p.id == id);
  if (!project) {
    res.status(404).json({ message: "Project not found" });
  }

  res.status(200).json({ ...project, kickstarter: {}});
}
