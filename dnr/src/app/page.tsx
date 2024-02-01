import { MetastreetLogo } from "@/components/MetastreetLogo";
import { TickCard } from "@/components/TickCard";
import { GetTicksByPoolDocument } from "@/gql/graphql";
import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";

const makeClient = () => {
  return createClient({
    url: "https://api.studio.thegraph.com/query/31830/metastreet-v2-sepolia/version/latest",
    exchanges: [cacheExchange, fetchExchange],
  });
};

const { getClient } = registerUrql(makeClient);

export default async function Home() {
  const { data } = await getClient().query(GetTicksByPoolDocument, {
    poolId: "0xaCCAD35bB4EcbFf5614423e598d97b968657cf44",
  });

  const ticks = data?.pool?.ticks;

  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-4 lg:px-12">
      {/* NAVBAR*/}
      <div className="z-10  w-full items-center justify-between font-mono text-sm lg:flex pb-16 max-w-5xl">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-nowrap ">
          MetaStreet Liquid Credit Tokens
        </p>
        <div className="flex flex-col items-center justify-center z-10 max-w-5xl w-full h-full text-center lg:flex-row lg:justify-between lg:text-left ml-8">
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
            <a
              className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-gradient-to-b from-sky-200 to-blue-200 rounded-xl backdrop-blur-2xl dark:from-sky-900 dark:to-[#0141ff] dark:text-sky-200 dark:backdrop-blur-2xl lg:px-4 lg:py-2 lg:text-base lg:rounded-lg lg:from-white lg:to-white lg:dark:from-neutral-800 lg:dark:to-neutral-800/30 lg:dark:text-white"
              href="https://metastreet.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Pools</span>
            </a>
            <a
              className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-gradient-to-b from-sky-200 to-blue-200 rounded-xl backdrop-blur-2xl dark:from-sky-900 dark:to-[#0141ff] dark:text-sky-200 dark:backdrop-blur-2xl lg:px-4 lg:py-2 lg:text-base lg:rounded-lg lg:from-white lg:to-white lg:dark:from-neutral-800 lg:dark:to-neutral-800/30 lg:dark:text-white"
              href="https://metastreet.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Stats</span>
            </a>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://metastreet.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MetastreetLogo />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

      {/* TICKS CONTAINER */}
      {/* grid 4 fr on desktop 2 on md 1 on mobile */}
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
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
