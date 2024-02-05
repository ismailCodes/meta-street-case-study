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
              <li className="flex flex-col w-full bg-gray-200 rounded-md overflow-hidden p-3 cursor-pointer hover:shadow-md hover:shadow-indigo-300 hover:bg-indigo-100 relative">
                <div className="text-md font-semibold text-center text-indigo-600 tracking-wider mb-6">
                  {pool.collateralToken.name}
                </div>
                <div className="flex justify-between w-full items-center mb-3">
                  <span className="font-light text-gray-700 text-xs">TVL</span>
                  <span className="font-medium text-gray-700">
                    {weiToWeth(pool.totalValueLocked).slice(0, 5)}{" "}
                    {pool.currencyToken.symbol}
                  </span>
                </div>

                <div className="flex justify-between w-full items-center">
                  <p className="font-light text-gray-700 text-xs">Usage</p>
                  <div className="bg-indigo-300 rounded-md h-5 w-4/5">
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
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
