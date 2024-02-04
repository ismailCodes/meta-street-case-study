import { GetTickDataDocument, GetTickDataQuery } from "@/gql/graphql";
import {
  convertInterestRate,
  secondsToDays,
  sumDepositedAmounts,
  sumShares,
  weiToWeth,
} from "@root/utils/conversion";
import { getClient } from "@root/utils/serverSideGqlClient";
import { FC } from "react";
import { Address, formatEther } from "viem";
import { BaseModal } from "./BaseModal";
import { DepositForm } from "./DepositForm";

type Props = {
  poolId: string;
  tickId: string;
};

export const TickModal: FC<Props> = async ({ poolId, tickId }) => {
  const { data } = await getClient().query(
    GetTickDataDocument,
    {
      poolId,
      tickId,
    },
    {
      requestPolicy: "network-only",
    }
  );

  const depositSum = sumDepositedAmounts(
    data?.pool?.deposits.filter((deposit) => deposit.tick.id === tickId) || []
  );
  const sharesSum = sumShares(
    data?.pool?.deposits.filter((deposit) => deposit.tick.id === tickId) || []
  );

  return (
    <BaseModal onCloseRedirectTo={`/pools/${poolId}`}>
      <div className="flex flex-col w-full overflow-hidden">
        <h1 className="text-xl font-semibold text-indigo-500 tracking-wide mb-2 text-center">
          {data?.pool?.collateralToken.name}
        </h1>

        {/* divider */}
        <div className="w-full h-px bg-gray-300 my-1 mb-4"></div>

        <div className="flex w-full flex-col gap-4">
          {/* loan limits */}
          <div className="flex w-full justify-between items-center">
            <p className="text-xs text-gray-500 font-normal">LOAN LIMITS</p>
            <p className="text-sm text-gray-900 font-normal">
              {weiToWeth(data?.pool?.ticks[0].limit)}{" "}
              {data?.pool?.currencyToken.symbol}
            </p>
          </div>

          {/* loan duration */}
          <div className="flex w-full justify-between items-center">
            <p className="text-xs text-gray-500 font-normal">LOAN DURATION</p>
            <p className="text-sm text-gray-900 font-normal">
              {secondsToDays(data?.pool?.ticks[0].duration)}
            </p>
          </div>

          {/* APR assuming it's *10^-8 */}
          <div className="flex w-full justify-between items-center">
            <p className="text-xs text-gray-500 font-normal">APR</p>
            <p className="text-sm text-gray-900 font-normal">
              {convertInterestRate(data?.pool?.ticks[0].rate).slice(0, 5)}%
            </p>
          </div>

          {/* divider */}
          <div className="w-full h-px bg-gray-300 my-1" />

          {/* deposits */}
          <div className="flex w-full justify-between items-center">
            <p className="text-xs text-gray-500 font-normal">TOTAL DEPOSITS</p>
            <p className="text-sm text-gray-900 font-normal">
              {formatEther(depositSum).slice(0, 5)}{" "}
              {data?.pool?.currencyToken.symbol}
            </p>
          </div>

          {/* divider */}
          <div className="w-full h-px bg-gray-300 my-1" />

          <DepositForm
            tick={data?.pool?.ticks[0].raw}
            poolId={poolId as Address}
            depositSum={depositSum}
            shares={sharesSum}
            pool={data?.pool as GetTickDataQuery["pool"]}
            tickId={tickId as Address}
          />
        </div>
      </div>
    </BaseModal>
  );
};
