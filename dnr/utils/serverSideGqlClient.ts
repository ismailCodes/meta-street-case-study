import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import { Client } from "urql";

export const client = new Client({
  url: "http://localhost:3000/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

const makeClient = () => {
  return createClient({
    url: "https://api.studio.thegraph.com/query/31830/metastreet-v2-sepolia/version/latest",
    exchanges: [cacheExchange, fetchExchange],
  });
};

const { getClient } = registerUrql(makeClient);

export { getClient };
