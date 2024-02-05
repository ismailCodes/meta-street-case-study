export const MAX_ALLOWANCE = BigInt(2 ** 256 - 1) - 1n;

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
  const readableRate = rate / 1e8;
  return `${readableRate}%`;
};

export const sumDepositedAmounts = (
  deposits: Array<{
    depositedAmount: bigint;
  }>
) => {
  const depositsSum = deposits.reduce((acc: bigint, deposit: any) => {
    const depositAmount = BigInt(deposit.depositedAmount);
    return acc + depositAmount;
  }, 0n);

  return depositsSum;
};

export const sumShares = (shares: any) => {
  if (shares.length === 0) {
    return 0n;
  }
  return shares.reduce((acc: bigint, share: any) => {
    const shareAmount = BigInt(share.shares);
    return acc + shareAmount;
  }, 0n);
};

export const calculatePercentageBigInt = (
  numerator: bigint,
  denominator: bigint
): number => {
  if (denominator === 0n) {
    return NaN;
  }
  const percentage = Number((numerator * 100n) / denominator);
  return percentage;
};
