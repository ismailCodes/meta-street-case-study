import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";

const makeClient = () => {
  return createClient({
    url: process.env.METASTREET_THE_GRAPH_API_URL as string,
    exchanges: [cacheExchange, fetchExchange],
  });
};

const { getClient } = registerUrql(makeClient);

export { getClient };
