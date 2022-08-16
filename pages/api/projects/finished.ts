// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Project, data } from "../_data";
import {
  getActiveProjects,
  getKickstarters,
  getProjectDetails,
} from "../../../lib/near";
import { getPeriod, isOpenPeriod, PERIOD } from "../../../lib/util";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let result: Array<any> = [];

  const finishedProjects = await getKickstarters();
  // TODO check active and successful flags to filter projects accordantly
  if (finishedProjects) {
    for (const project of finishedProjects) {
      const projectOnChain = await getProjectDetails(project.id);
      const projectStatic = data.find((sp) => sp.id === project.id);
      if (projectStatic) {
        result.push({
          ...projectStatic,
          kickstarter: projectOnChain,
        });
      }
    }
    // filter the close projects
    result = result.filter((val:any)=>{
      return getPeriod(val.kickstarter) === PERIOD.CLOSE;
    })
  }

  // sort by open timestamp
  res.status(200).json(result.sort((x, y)=>{
    return x.kickstarter.open_timestamp - y.kickstarter.open_timestamp;
  }));
}
