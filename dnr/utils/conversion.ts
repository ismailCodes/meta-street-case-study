export const secondsToDays = (seconds: string) => {
  const parsedSeconds = parseInt(seconds, 10);

  if (isNaN(parsedSeconds)) {
    return "Invalid input";
  }

  const days = parsedSeconds / (60 * 60 * 24);
  return `${days}d`;
};

export const gweiToEth = (gwei: number | string): string => {
  const GWEI_IN_ETH = 1e9;
  const amountInEth = Number(gwei) / GWEI_IN_ETH;
  return amountInEth.toString();
};

export const weiToWeth = (wei: string): string => {
  const WEI_IN_ETH = 1e18;
  const amountInEth = Number(wei) / WEI_IN_ETH;
  return amountInEth.toString();
};

export const bigintToNumber = (value: bigint): string => {
  if (
    value <= BigInt(Number.MAX_SAFE_INTEGER) &&
    value >= BigInt(Number.MIN_SAFE_INTEGER)
  ) {
    return value.toString();
  } else {
    throw new Error("The value is outside the safe integer range.");
  }
};

export const convertInterestRate = (rate: number): string => {
  const readableRate = rate / 1e18;
  return `${readableRate}%`;
};
