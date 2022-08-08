// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../_data";
import {
  getKickstarters,
  getProjectDetails,
} from "../../../lib/near";
import { getPeriod, PERIOD } from "../../../lib/util";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let result: Array<any> = [];

  const comingProjects = await getKickstarters();
  // TODO check active and successful flags to filter projects accordantly
  if (comingProjects) {
    for (const project of comingProjects) {
      const projectOnChain = await getProjectDetails(project.id);
      const projectStatic = data.find((sp) => sp.id === project.id);
      if (projectStatic) {
        result.push({
          ...projectStatic,
          kickstarter: projectOnChain,
        });
      }
    }
    // filter the not open projects
    result = result.filter((val:any)=>{
      return getPeriod(val.kickstarter) === PERIOD.NOT_OPEN;
    })
    // console.log("result", result)
  }

  // sort by open timestamp
  res.status(200).json(result.sort((x, y)=>{
    return x.kickstarter.open_timestamp - y.kickstarter.open_timestamp;
  }));
}
