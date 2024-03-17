import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "../public/schema.graphql",
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: from([httpLink]),
  cache,
});
