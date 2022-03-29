// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Project, data } from "./_data";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  const id = req.query.id;
  res.status(200).json(data);
}
