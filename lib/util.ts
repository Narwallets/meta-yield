import moment from "moment";
import { KickstarterGoalProps } from "../types/project.types";
import { getSupportedKickstarters } from "./near";

const BN = require("bn.js");
export const decodeJsonRpcData = (data: any) => {
  let res = "";
  for (let i = 0; i < data.length; i++) {
    res += String.fromCharCode(data[i]);
  }
  return JSON.parse(res);
};

export const encodeJsonRpcData = (data: any) => {
  return Buffer.from(JSON.stringify(data)).toString("base64");
};

/**
 * convert nears expressed as a js-number with MAX 4 decimals into a yoctos-string
 * @param n amount in near MAX 6 DECIMALS
 */
export function ntoy(n: number) {
  let by1e6 = Math.round(n * 1e6).toString(); // near * 1e6 - round
  let yoctosText = by1e6 + "0".repeat(18); //  mul by 1e18 => yoctos = near * 1e(6+18)
  return yoctosText;
}

/**
 * returns amount truncated to 4 decimal places
 * @param yoctos amount expressed in yoctos
 */
export function yton(yoctos: string) {
  if (!yoctos) return 0;
  if (yoctos.indexOf(".") !== -1)
    throw new Error("a yocto string can't have a decimal point: " + yoctos);
  let negative = false;
  if (yoctos.startsWith("-")) {
    negative = true;
    yoctos = yoctos.slice(1);
  }
  let padded = yoctos.padStart(25, "0"); //at least 0.xxx
  let nearsText = padded.slice(0, -24) + "." + padded.slice(-24, -20); //add decimal point. Equivalent to near=yoctos/1e24 and truncate to 4 dec places
  return Number(nearsText) * (negative ? -1 : 1);
}

/**
 * returns near amount in dollars. Result is truncated, default to 2 decimal places
 * @param value amount expressed in yoctos
 * @param nearPrice near price in dollars
 * @param decimals decimals to truncate result value. default to 2
 */
export const yoctoToDollarStr = (
  value: string,
  nearPrice: number,
  decimals: number = 2
) => {
  // const result = new BN(value).div(new BN(10).pow(new BN(24))).mul(new BN(nearPrice))
  const result = yton(value) * nearPrice;
  return result.toFixed(decimals);
};

export const timeLeftToFund = (time: any) => {
  if (!time || moment(time).diff(moment()) < 0) {
    return "";
  }
  const timeMoment = moment(time);
  const now = moment();

  return timeMoment.diff(now, "days") > 0
    ? `${timeMoment.diff(now, "days")} days`
    : timeMoment.diff(now, "hours") > 1
    ? `${timeMoment.diff(now, "hours")} hours`
    : `${timeMoment.diff(now, "minutes")} minutes`;
};

export const getMyProjectsFounded = async (id: string, wallet: any) => {
  const projectsFounded: any[] = await getSupportedKickstarters(
    wallet.getAccountId()
  );
  if (!projectsFounded) {
    return [];
  }
  return (
    projectsFounded &&
    projectsFounded.find((val: any) => val.kickstarter_id === id)
  );
};

export const getCurrentFundingGoal = (goals: any, total_deposited: any) => {
  const [currentFundingGoal] = goals.filter(
    (g: KickstarterGoalProps) => parseInt(g.desired_amount) >= total_deposited
  );
  if (!currentFundingGoal) {
    return goals[goals.length - 1];
  }
  return currentFundingGoal;
};
