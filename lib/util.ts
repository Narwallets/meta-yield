import moment from "moment";

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

export const stNearToYocto = (value: number): string => {
  const tenexp5 = new BN(10).pow(new BN(5));
  return new BN(
    new BN(value).mul(tenexp5).mul(new BN(10).pow(new BN(24)).div(tenexp5))
  ).toString();
};

export const yoctoToStNearStr = (
  value: Number,
  decimals: number = 5
): string => {
  if (value) {
    return (new BN(value) / 10 ** 24).toFixed(decimals); // convert to BN arithmetic operation
  }
  return "NAN";
};

export const yoctoToStNear = (value: Number): number => {
  if (value) {
    return Number(value) / (10 ** 24);
  }
  return 0;
};

export const yoctoToDollarStr = (
  value: string,
  nearPrice: number,
  decimals: number = 2
) => {
  const result = new BN(value).div(new BN(10).pow(new BN(24))).mul(new BN(nearPrice))
  return result.toString();
};

export const timeLeftToFund = (time: any)=> {
  if (!time || moment(time).diff(moment()) < 0) {
    return ''
  }
  const timeMoment = moment(time);
  const now = moment();

  return timeMoment.diff(now, "days") > 0 ? 
  `${timeMoment.diff(now, "days")} days` : 
    timeMoment.diff(now, "hours") > 1 ? 
    `${timeMoment.diff(now, "hours")} hours` :
    `${timeMoment.diff(now, "minutes")} minutes`    

}
