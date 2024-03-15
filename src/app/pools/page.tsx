import { PoolsList } from "@/components/PoolsList";
import { GetAllPoolsDocument } from "@/gql/graphql";
import { getClient } from "@root/utils/serverSideGqlClient";

export default async function Pools() {
  const { data } = await getClient().query(GetAllPoolsDocument, {});

  return (
    <div className="flex flex-col w-full max-w-5xl overflow-hidden p-3">
      <h1 className="text-2xl font-semibold text-gray-100 tracking-widest mb-4">
        Pools
      </h1>
      <PoolsList pools={data?.pools} />
    </div>
  );
}
