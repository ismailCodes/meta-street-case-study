import { Address, erc20Abi } from "viem";
import { useReadContract } from "wagmi";

export const useAllowance = (
  tokenAddress: Address,
  ownerAddress: Address,
  spenderAddress: Address
) => {
  const { data: allowanceData, refetch } = useReadContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "allowance",
    args: [ownerAddress, spenderAddress],
    query: {
      enabled: !!ownerAddress,
    },
  });

  return { allowanceData, refetchAllowance: refetch };
};
