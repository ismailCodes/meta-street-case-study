"use client";

import { GetTickDataQuery } from "@/gql/graphql";
import { abi } from "@root/contract/abi";
import { MAX_ALLOWANCE } from "@root/utils/conversion";
import { useAllowance } from "@root/utils/useAllowance";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { Address, erc20Abi, formatEther, parseEther } from "viem";
import {
  useAccount,
  useBalance,
  useTransaction,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { Loader } from "./Loader";
import { notifyError, notifySuccess } from "./Notify";

interface DepositFormProps {
  tick: bigint;
  poolId: Address;
  depositSum: bigint;
  shares: bigint;
  pool: GetTickDataQuery["pool"];
  tickId: Address;
}

export const DepositForm: FC<DepositFormProps> = ({
  tick,
  poolId,
  depositSum,
  pool,
}) => {
  // UI STATE
  const [inputAmount, setInputAmount] = useState<number | null>(null);
  const [shownTransactionUi, setShownTransactionUi] = useState<
    "DEPOSIT" | "REDEEM"
  >("DEPOSIT");

  const [shouldCloseModal, setShouldCloseModal] = useState(false);

  const router = useRouter();

  // ACCOUNT STATE
  const { address } = useAccount();

  // SOMETIMES THE QUERY COMES BACK WITH MISSING DEPOSITS
  // SO I DECIDED TO GET THE BALANCE DIRECTLY FROM THE CONTRACT
  const { data: mlctTokenData } = useBalance({
    address,
    token: pool?.ticks[0].token?.id,
    query: {
      enabled: !!pool?.ticks[0].token && !!pool?.ticks[0].token.id && !!address,
      refetchOnWindowFocus: false,
    },
  });

  const { data, isLoading: isBalanceLoading } = useBalance({
    address,
    token: pool?.currencyToken.id,
    query: {
      // CHECKS THE BALANCE ONLY WHEN THE ACCOUNT IS CONNECTED
      enabled: !!address,
      refetchOnWindowFocus: false,
    },
  });

  // ALLOWANCE STATE
  const { allowanceData, refetchAllowance } = useAllowance(
    pool?.currencyToken.id,
    address!,
    poolId
  );

  const {
    data: hash,
    writeContract,
    error,
    isPending: isTransactionApprovalPending,
  } = useWriteContract();

  const {
    isFetching: isTransactionFetching,
    isLoading: isWriteContractLoading,
  } = useTransaction({
    hash,
    query: {
      enabled: !!hash,
    },
  });

  const {
    isSuccess,
    isError,
    isLoading: isTransactionLoading,
  } = useWaitForTransactionReceipt({
    confirmations: 1,
    hash,
    query: {
      enabled: !!hash,
      refetchInterval: 1000,
    },
  });

  const maxDepositAmount = parseFloat(formatEther(data?.value || BigInt(0)));
  const isAllowed =
    !!allowanceData &&
    allowanceData > parseEther(inputAmount?.toString() || "0");

  // WATCHES FOR TRANSACTION STATUS AND UPDATES UI
  useEffect(() => {
    if (isSuccess) {
      notifySuccess();
      setInputAmount(null);
      refetchAllowance();
      if (isAllowed && shouldCloseModal) {
        router.push(`/pools/${poolId}`);
      }
    } else if (isError || !!error) {
      notifyError();
      setInputAmount(null);
      if (isAllowed) {
        refetchAllowance();
        router.push(`/pools/${poolId}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, error]);

  const handleAllowanceApproval = () => {
    writeContract({
      abi: erc20Abi,
      address: pool?.currencyToken.id,
      functionName: "approve",
      args: [poolId, MAX_ALLOWANCE],
    });
  };

  const handleDeposit = (type: "DEPOSIT" | "REDEEM") => {
    writeContract({
      abi,
      address: poolId,
      functionName: type === "DEPOSIT" ? "deposit" : "redeem",
      args:
        type === "DEPOSIT"
          ? [tick, parseEther((inputAmount || "0").toString()), BigInt(0)]
          : [tick, parseEther((inputAmount || "0").toString())],
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = parseFloat(e.target.value);

    if (inputAmount > maxDepositAmount && shownTransactionUi === "DEPOSIT") {
      setInputAmount(maxDepositAmount < 0.001 ? 0 : maxDepositAmount);
    } else {
      if (isNaN(inputAmount)) {
        setInputAmount(null);
        return;
      }
      setInputAmount(inputAmount || 0);
    }
  };

  const isLoading =
    isBalanceLoading ||
    isTransactionFetching ||
    isWriteContractLoading ||
    isTransactionLoading ||
    isTransactionApprovalPending;

  return (
    <>
      {/* CURRENT ADDRESS BALANCE IN THIS TICK */}
      <div className="flex w-full justify-between items-center">
        <p className="text-xs text-gray-500 font-normal">mLCT BALANCE</p>
        <div className="flex gap-2 items-end">
          <p className="text-sm text-gray-900 font-medium">
            {mlctTokenData
              ? parseFloat(mlctTokenData?.formatted).toFixed(2)
              : 0}
          </p>
          <p className="text-xs text-gray-500 font-normal">
            {mlctTokenData?.symbol}
          </p>
        </div>
      </div>

      {/* TRANSACTION FORM */}
      <form className="flex w-full flex-col items-center mb-1 gap-4">
        {/*  TOGGLE BETWEEN DEPOSIT AND REDEED */}
        <div className="w-full flex gap-2">
          <button
            onClick={() => {
              setInputAmount(null);
              setShownTransactionUi("DEPOSIT");
            }}
            className={`w-full p-2 text-center font-medium text-l ${
              shownTransactionUi === "DEPOSIT"
                ? "border-b-2 border-indigo-500 pb-2 text-indigo-500"
                : " text-gray-300"
            }`}
            type="button"
          >
            Deposit
          </button>
          <button
            onClick={() => {
              setInputAmount(null);
              setShownTransactionUi("REDEEM");
            }}
            className={`w-full p-2 text-center font-medium text-l ${
              shownTransactionUi === "REDEEM"
                ? "border-b-2 border-indigo-500 pb-2 text-indigo-500"
                : " text-gray-300"
            }`}
            type="button"
          >
            Redeem
          </button>
        </div>

        {/* AMOUNT INPUT */}
        <div className="w-full flex items-center justify-between gap-8 relative mb-4">
          <p className="text-xs text-gray-500 font-normal">AMOUNT</p>
          <input
            className="w-full p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none 
                [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 
                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 
                [&::-webkit-inner-spin-button]:appearance-none pr-10 border border-indigo-500"
            placeholder="e.g 1.234"
            name="depositAmount"
            value={
              inputAmount === null ? "" : inputAmount === 0 ? 0 : inputAmount
            }
            onChange={handleInputChange}
            type="number"
            step="0.01"
            disabled={isBalanceLoading || !address}
          />

          <div className="absolute right-4 text-xs text-gray-500 font-medium">
            {pool?.currencyToken.symbol}
          </div>

          {/* CURRENT WALLET BALANCE AND MAX BUTTON */}
          {!!address && !isBalanceLoading && (
            <div className="absolute -bottom-6 right-2 text-xs text-indigo-500 font-medium hover:text-indigo-600">
              {shownTransactionUi === "DEPOSIT" && (
                <>
                  <span className="text-xs text-gray-500 font-normal mr-4">
                    BALANCE: {maxDepositAmount.toFixed(2)}
                  </span>
                  <button
                    onClick={() => {
                      setInputAmount(
                        maxDepositAmount < 0.001 ? 0 : maxDepositAmount
                      );
                    }}
                    className="text-xs text-indigo-500 font-medium hover:text-indigo-600"
                    type="button"
                  >
                    MAX
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* DEPOSIT / REDEEM BUTTONS */}
        <div className="w-full flex gap-2">
          {shownTransactionUi === "DEPOSIT" ? (
            <button
              onClick={() => {
                if (!isAllowed) {
                  handleAllowanceApproval();
                } else {
                  handleDeposit("DEPOSIT");
                  setShouldCloseModal(true);
                }
              }}
              type="button"
              className="bg-indigo-500 text-white p-2 rounded-md w-full hover:bg-indigo-600 
                            disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={
                isLoading || inputAmount === 0 || !address || !inputAmount
              }
            >
              {isAllowed ? "Deposit" : "Approve"}
            </button>
          ) : (
            <button
              onClick={() => handleDeposit("REDEEM")}
              type="button"
              className="bg-indigo-500 text-white p-2 rounded-md w-full hover:bg-indigo-600 
                            disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={
                isLoading ||
                depositSum === BigInt(0) ||
                !address ||
                inputAmount === 0 ||
                !inputAmount
              }
            >
              Redeem
            </button>
          )}
        </div>

        {isLoading && <Loader />}
      </form>
    </>
  );
};
