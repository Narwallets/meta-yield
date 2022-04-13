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

export const stNearToYocto = (value: number): Number => {
  return value * 10 ** 24;
};

export const yoctoToStNear = (value: Number, decimals: number = 5): string => {
  if (value) {
    return (new BN(value) / 10 ** 24).toFixed(decimals);
  }
  return 'NAN';
};
