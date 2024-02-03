import { GetAllPoolsDocument, Pool } from "@/gql/graphql";
import { weiToWeth } from "@root/utils/conversion";
import { getClient } from "@root/utils/serverSideGqlClient";
import Link from "next/link";

export default async function Pools() {
  const { data } = await getClient().query(GetAllPoolsDocument, {});

  return (
    <div className="flex flex-col w-full max-w-5xl overflow-hidden p-3">
      <h1 className="text-2xl font-semibold text-gray-100 tracking-widest mb-4">
        Pools
      </h1>
      <ul className=" grid md:grid-cols-3 gap-4 max-w-5xl w-full">
        {data?.pools?.map((pool) => {
          return (
            <Link key={pool.id} href={`/pools/${pool.id}`}>
              <li className="flex flex-col w-full bg-gray-200 rounded-md overflow-hidden p-3 gap-8 cursor-pointer hover:shadow-md hover:shadow-indigo-300 hover:bg-indigo-100">
                <div className="text-md font-semibold text-center text-indigo-600 tracking-wider">
                  {pool.collateralToken.name}
                </div>
                <div className="flex justify-between w-full items-center">
                  <span className="font-light text-gray-700 text-xs">TVL</span>
                  <span className="font-medium text-gray-700">
                    {weiToWeth(pool.totalValueLocked).slice(0, 5)}{" "}
                    {pool.currencyToken.symbol}
                  </span>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
