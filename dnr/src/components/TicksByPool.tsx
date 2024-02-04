import { GetTicksByPoolDocument } from "@/gql/graphql";
import { weiToWeth } from "@root/utils/conversion";
import { getClient } from "@root/utils/serverSideGqlClient";
import Image from "next/image";
import { FC } from "react";
import { TickCard } from "./TickCard";

interface ReservoirCollection {
  collections: Array<{ image: string }>;
}

type Props = {
  poolId: string;
};

export const TicksByPool: FC<Props> = async ({ poolId }) => {
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
  return (
    <div className="flex flex-col w-full max-w-5xl overflow-hidden p-3">
      <div className="flex items-center w-full mb-4 gap-2 ">
        <Image
          src={collectionData?.image || ""}
          alt="Reservoir Collection"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="text-2xl font-semibold text-gray-100 tracking-widest">
          Ticks{" |  "}
          {data?.pool?.collateralToken.name}
        </h1>
      </div>
      <p className="text-gray-500 font-light text-xs mb-4">
        Choose a tick to get more information
      </p>
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
