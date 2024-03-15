import { GetAllPoolsDocument } from "@/gql/graphql";
import { calculatePercentageBigInt, weiToWeth } from "@root/utils/conversion";
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
          const poolUsagePercentage = calculatePercentageBigInt(
            BigInt(pool.totalValueUsed),
            BigInt(pool.totalValueLocked)
          );
          return (
            <Link key={pool.id} href={`/pools/${pool.id}`}>
              <li
                className="flex flex-col w-full bg-indigo-400/10 backdrop-blur-sm rounded-xl overflow-hidden
                    p-4 py-6 cursor-pointer hover:shadow-indigo-300 hover:bg-indigo-400/15 relative transition
                    border-b-2 border-r-2 duration-200 hover:border-indigo-400/50 border-transparent"
              >
                <div className="text-md font-semibold text-center text-indigo-100 tracking-wider mb-6">
                  {pool.collateralToken.name}
                </div>
                <div className="flex justify-between w-full items-center mb-3">
                  <span className="font-light text-gray-100 text-xs">TVL</span>
                  <span className="font-medium text-gray-100">
                    {weiToWeth(pool.totalValueLocked).slice(0, 5)}{" "}
                    {pool.currencyToken.symbol}
                  </span>
                </div>

                <div className="bg-indigo-100 rounded-md h-5 w-full">
                  <div
                    className="bg-indigo-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-md h-full flex items-center"
                    style={{
                      width: `${
                        isNaN(poolUsagePercentage) ? "0" : poolUsagePercentage
                      }%`,
                    }}
                  >
                    {isNaN(poolUsagePercentage) ? "0" : poolUsagePercentage}%
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
