import { GetTicksByPoolDocument } from "@/gql/graphql";
import { weiToWeth } from "@root/utils/conversion";
import { getClient } from "@root/utils/serverSideGqlClient";
import Image from "next/image";
import { FC } from "react";
import { TickCard } from "./TickCard";

interface ReservoirCollection {
  collections: Array<{ image: string }>;
}

interface TicksByPoolProps {
  poolId: string;
}

export const TicksByPool: FC<TicksByPoolProps> = async ({ poolId }) => {
  const { data } = await getClient().query(GetTicksByPoolDocument, {
    poolId,
  });

  const collectionData = await fetch(
    `${process.env.SEPOLIA_RESERVOIR_API_BASE_URL}?id=${data?.pool?.collateralToken.id}`,
    {
      headers: {
        accept: "*/*",
        "x-api-key": process.env.RESERVOIR_API_KEY || "",
      },
    }
  )
    .then(async (res) => {
      const data: ReservoirCollection = await res.json();
      return data.collections[0];
    })
    .catch((e) => console.log(e));

  const ticks = data?.pool?.ticks;

  if (ticks?.length === 0) {
    return (
      <div className="flex flex-col w-full max-w-5xl overflow-hidden p-3">
        <h1 className="text-2xl font-semibold text-gray-100 tracking-widest">
          No Ticks Available in this pool
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full max-w-5xl overflow-hidden p-3">
      <div className="flex items-center w-full mb-4 gap-2">
        {/* COLLECTION INFORMATION */}
        <div className="relative w-14 h-14 rounded-full overflow-hidden border border-indigo-100">
          <Image
            src={collectionData?.image || ""}
            alt="Reservoir Collection"
            fill
          />
        </div>
        <h1 className="text-2xl font-semibold text-gray-100 tracking-widest">
          Ticks{" |  "}
          {data?.pool?.collateralToken.name}
        </h1>
      </div>

      <p className="text-gray-500 font-light text-xs mb-4">
        Choose a tick to get more information
      </p>

      {/* TICKS LIST */}
      <div className="w-full grid  md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        {ticks?.map((tick) => {
          const formatedDepostedAmount = weiToWeth(
            data?.pool?.deposits.filter(
              (deposit) => deposit.tick.id === tick.id
            )[0]?.depositedAmount
          );
          return (
            <TickCard
              key={tick.id}
              tokenName={tick.token?.name || "MetaStreet V2 Deposit"}
              limit={tick.limit}
              duration={tick.duration}
              rate={tick.rate}
              poolId={poolId}
              tickId={tick.id}
              totalDeposits={formatedDepostedAmount}
              poolCurrencySymbol={data?.pool?.currencyToken.symbol || ""}
            />
          );
        })}
      </div>
    </div>
  );
};
