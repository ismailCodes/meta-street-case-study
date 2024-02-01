import { cacheExchange, createClient, fetchExchange, ssrExchange } from "urql";

const isServer = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServer });

const client = createClient({
  url: "https://api.studio.thegraph.com/query/31830/metastreet-v2-sepolia/version/latest",
  exchanges: [cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };
