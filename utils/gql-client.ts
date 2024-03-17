import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://api.studio.thegraph.com/query/31830/metastreet-v2-sepolia/version/latest",
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: from([httpLink]),
  cache,
});
