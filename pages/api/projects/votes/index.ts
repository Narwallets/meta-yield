// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getVotes } from "../../../../lib/near";
import { dataToVote } from "../../_data";
import { sortByVotes } from "../../../../lib/util";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let result: Array<any> = [];

  const promises: Array<Promise<any>> = [];
  if (dataToVote) {
    dataToVote.filter((project: any)=> !project.winner).map((project: any) => {
      promises.push(getVotes(project.id + "|" + project.slug));
    });
    const votesList = await Promise.all(promises);
    const dataWithVotes = dataToVote.filter((project: any)=> !project.winner).map((p: any, i: number) => {
      return { ...p, votes: votesList[i] };
    });
    result = sortByVotes(dataWithVotes);
  }

  res.status(200).json(result);
}
