import {
  convertInterestRate,
  secondsToDays,
  weiToWeth,
} from "@root/utils/conversion";
import Link from "next/link";
import { formatUnits } from "viem";

export const TickCard = ({
  tokenName,
  limit,
  duration,
  rate,
  poolId,
  tickId,
  totalDeposits,
  poolCurrencySymbol,
}: {
  tokenName: string;
  limit: string;
  duration: string;
  rate: string;
  poolId: string;
  tickId: string;
  totalDeposits: string;
  poolCurrencySymbol: string;
}) => {
  return (
    <Link href={`/pools/${poolId}?tickId=${tickId}`} prefetch>
      <div
        className="flex flex-col w-full bg-indigo-400/10 rounded-xl overflow-hidden cursor-pointer
        hover:shadow-indigo-300 transition
          border-b-2 border-r-2 duration-200 hover:border-indigo-400/50 border-transparent"
      >
        <div className="flex justify-center items-center w-full min-h-12 bg-indigo-700 font-semibold text-sm text-center p-2">
          {tokenName.replace("MetaStreet V2 Deposit: ", "")}
        </div>
        <div className="flex flex-col w-full h-full p-4">
          <div className="flex w-full justify-between">
            {/* RATE */}
            <>
              <div className="flex w-full flex-col gap-1">
                <p className="text-xl text-indigo-500 font-semibold">
                  {convertInterestRate(
                    Number(formatUnits(BigInt(rate), 18))
                  ).slice(0, 5)}
                  %
                </p>
                <p className="text-[9px] text-gray-300 font-light">
                  Current APR
                </p>
              </div>
            </>

            {/* tag */}
            <div className="flex justify-center items-center gap-1 bg-indigo-600/60 px-4 h-7 rounded-full">
              <p className="text-gray-100 font-semibold text-sm">
                {secondsToDays(duration)}
              </p>
            </div>
          </div>
          <div className="flex w-full h-px bg-gray-300 my-3"></div>

          {/* Loan limit */}
          <div className="flex w-full justify-between">
            <p className="text-xs text-gray-300 font-normal">LOAN LIMITS</p>
            <p className="text-sm text-gray-200 font-semibold">
              {weiToWeth(limit)} {poolCurrencySymbol}
            </p>
          </div>

          {/* Loan limit */}
          <div className="flex w-full justify-between">
            <p className="text-xs text-gray-300 font-normal">TOTAL DEPOSITS</p>
            <p className="text-sm text-gray-200 font-semibold">
              {totalDeposits.slice(0, 5)} {poolCurrencySymbol}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
