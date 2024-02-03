"use client";

import { abi } from "@root/contract/abi";
import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Address, formatEther, parseEther } from "viem";
import {
  useAccount,
  useBalance,
  useTransaction,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { Loader } from "./Loader";
import { GetTickDataQuery } from "@/gql/graphql";
import { sumDepositedAmounts } from "@root/utils/conversion";

type Props = {
  tick: bigint;
  poolId: Address;
  depositSum: bigint;
  shares: bigint;
  pool: GetTickDataQuery["pool"];
  tickId: Address;
};

export const DepositForm: FC<Props> = ({
  tick,
  poolId,
  depositSum,
  shares,
  pool,
  tickId,
}) => {
  const [inputAmount, setInputAmount] = useState<number | null>(null);
  const [shownTransactionUi, setShownTransactionUi] = useState<
    "DEPOSIT" | "REDEEM"
  >("DEPOSIT");

  const { address, status: accountStatus } = useAccount();
  const { data, isLoading: isBalanceLoading } = useBalance({
    address,
    query: {
      enabled: accountStatus === "connected",
      refetchOnWindowFocus: false,
    },
  });

  const {
    data: hash,
    writeContract,
    error,
    isPending: isWriteContractPending,
  } = useWriteContract();

  const { isFetching: isTransactionFetching } = useTransaction({
    hash,
    query: {
      enabled: !!hash,
    },
  });

  const { isSuccess, isError } = useWaitForTransactionReceipt({
    hash,
    query: {
      enabled: !!hash,
    },
  });

  const maxDepositAmount = parseFloat(formatEther(data?.value || BigInt(0)));

  const notifySuccess = () => toast("Transaction successful");
  const notifyError = () => toast("Transaction failed");

  useEffect(() => {
    if (isSuccess) {
      notifySuccess();
    } else if (isError || !!error) {
      notifyError();
      setInputAmount(0);
    }
  }, [isSuccess, isError, error]);

  const handleDeposit = (type: "DEPOSIT" | "REDEEM") => {
    writeContract({
      abi,
      address: poolId,
      functionName: type === "DEPOSIT" ? "deposit" : "redeem",
      args:
        type === "DEPOSIT"
          ? [tick, parseEther((inputAmount || "0").toString()), BigInt(0)]
          : [tick, shares],
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = parseFloat(e.target.value);

    if (inputAmount > maxDepositAmount && shownTransactionUi === "DEPOSIT") {
      setInputAmount(maxDepositAmount);
    } else if (
      inputAmount > parseFloat(formatEther(shares || BigInt(0))) &&
      shownTransactionUi === "REDEEM"
    ) {
      setInputAmount(parseFloat(formatEther(shares || BigInt(0))));
    } else {
      if (isNaN(inputAmount)) {
        console.log({ inputAmount });
        setInputAmount(null);
        return;
      }
      setInputAmount(inputAmount || 0);
    }
  };

  const userDeposits = sumDepositedAmounts(
    pool?.deposits.filter(
      (deposit) =>
        deposit.tick.id === tickId &&
        deposit.account === address?.toLocaleLowerCase()
    ) || []
  );

  const isLoading = isBalanceLoading || isTransactionFetching;
  return (
    <>
      <div className="flex w-full justify-between items-center">
        <p className="text-xs text-gray-500 font-normal">mLCT BALANCE</p>
        <p className="text-sm text-gray-900 font-normal">
          {formatEther(userDeposits).slice(0, 5)} {pool?.currencyToken.symbol}
        </p>
      </div>
      <form className="flex w-full flex-col items-center mb-1 gap-4">
        {/*  TOGGLE BETWEEN DEPOSIT AND REDEED */}
        <div className="w-full flex gap-2">
          <button
            onClick={() => {
              setInputAmount(null);
              setShownTransactionUi("DEPOSIT");
            }}
            className={`w-full p-2 text-center font-medium text-l 
                                ${
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
            className={`w-full p-2 text-center font-medium text-l 
                                ${
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
                [&::-webkit-inner-spin-button]:appearance-none pr-10"
            placeholder="Amount"
            name="depositAmount"
            value={
              inputAmount === null ? "" : inputAmount === 0 ? 0 : inputAmount
            }
            onChange={handleInputChange}
            type="number"
            step="0.01"
            disabled={isBalanceLoading || accountStatus !== "connected"}
          />

          <div className="absolute right-4 text-xs text-gray-500 font-medium">
            {data?.symbol}
          </div>

          {accountStatus === "connected" && !isBalanceLoading && (
            <div className="absolute -bottom-6 right-2 text-xs text-indigo-500 font-medium hover:text-indigo-600">
              {shownTransactionUi === "DEPOSIT" && (
                <span className="text-xs text-gray-500 font-normal mr-4">
                  BALANCE: {maxDepositAmount}
                </span>
              )}
              <button
                onClick={() => {
                  shownTransactionUi === "DEPOSIT"
                    ? setInputAmount(maxDepositAmount)
                    : setInputAmount(
                        parseFloat(formatEther(shares || BigInt(0)))
                      );
                }}
                className="text-xs text-indigo-500 font-medium hover:text-indigo-600"
                type="button"
              >
                MAX
              </button>
            </div>
          )}
        </div>
        {/* ACTION BUTTONS */}
        <div className="w-full flex gap-2">
          {shownTransactionUi === "DEPOSIT" ? (
            <button
              onClick={() => handleDeposit("DEPOSIT")}
              type="button"
              className="bg-indigo-500 text-white p-2 rounded-md w-full hover:bg-indigo-600 
                            disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={
                isLoading || inputAmount === 0 || accountStatus !== "connected"
              }
            >
              Deposit
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
                accountStatus !== "connected" ||
                inputAmount === 0
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
