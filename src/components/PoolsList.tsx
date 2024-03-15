"use client";
import { Pool } from "@/gql/graphql";
import { calculatePercentageBigInt, weiToWeth } from "@root/utils/conversion";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";

interface PoolsListProps {
  pools: Pool[];
}

const generateCardAnimationVariants = (index: number) => ({
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: index * 0.1 },
  },
});

export const PoolsList: FC<PoolsListProps> = ({ pools }) => {
  const LinkWithMotion = motion(Link);

  return (
    <motion.div className=" grid md:grid-cols-3 gap-4 max-w-5xl w-full">
      {pools?.map((pool, index) => {
        const poolUsagePercentage = calculatePercentageBigInt(
          BigInt(pool.totalValueUsed),
          BigInt(pool.totalValueLocked)
        );
        return (
          <LinkWithMotion
            key={pool.id}
            href={`/pools/${pool.id}`}
            variants={generateCardAnimationVariants(index)}
            initial="hidden"
            animate="show"
          >
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
          </LinkWithMotion>
        );
      })}
    </motion.div>
  );
};
