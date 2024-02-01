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
    <div className="w-full grid  md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
      {ticks?.map((tick) => {
        return (
          <TickCard
            key={tick.id}
            tokenName={tick.token?.name || "MetaStreet V2 Deposit"}
            limit={tick.limit}
            duration={tick.duration}
            rate={tick.rate}
          />
        );
      })}
    </div>
  );
};
