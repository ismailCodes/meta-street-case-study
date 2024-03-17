import { PoolsList } from "@/components/PoolsList";
import { GetAllPoolsQuery } from "@root/graphql/getAllPools";
import { GetAllPoolsQuery as GetAllPoolsQueryType } from "@/gql/graphql";
import { apolloClient } from "@root/utils/gql-client";

export default async function Pools() {
  const { data } = await apolloClient.query<GetAllPoolsQueryType>({
    query: GetAllPoolsQuery,
  });

  return (
    <div className="flex flex-col w-full max-w-5xl overflow-hidden p-3">
      <h1 className="text-2xl font-semibold text-gray-100 tracking-widest mb-4">
        Pools
      </h1>
      <PoolsList pools={data?.pools} />
    </div>
  );
}
