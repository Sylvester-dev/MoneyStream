export const Framework = require("@superfluid-finance/sdk-core");
export const ethers = require("ethers");

// Ethers.js provider initialization
export const url =
  "https://polygon-mumbai.g.alchemy.com/v2/VWUvk7tr1s58aCHMxAgRqeyiyjcfRmSW";
export const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
