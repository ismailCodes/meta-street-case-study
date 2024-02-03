import { GetTicksByPoolDocument } from "@/gql/graphql";
import { getClient } from "@root/utils/serverSideGqlClient";
import { FC } from "react";
import { TickCard } from "./TickCard";

type Props = {
  poolId: string;
};

export const TicksByPool: FC<Props> = async ({ poolId }) => {
  const { data } = await getClient().query(GetTicksByPoolDocument, {
    poolId,
  });

  const ticks = data?.pool?.ticks;
  return (
    <div className="flex flex-col w-full max-w-5xl overflow-hidden p-3">
      <h1 className="text-2xl font-semibold text-gray-100 tracking-widest mb-2">
        {"<< "}
        {data?.pool?.collateralToken.name}
        {" >>"} Ticks
      </h1>
      <p className="text-gray-500 font-light text-xs mb-4">
        Choose a tick to get more information
      </p>
      <div className="w-full grid  md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        {ticks?.map((tick) => {
          return (
            <TickCard
              key={tick.id}
              tokenName={tick.token?.name || "MetaStreet V2 Deposit"}
              limit={tick.limit}
              duration={tick.duration}
              rate={tick.rate}
              poolId={poolId}
              tickId={tick.id}
            />
          );
        })}
      </div>
    </div>
  );
};
