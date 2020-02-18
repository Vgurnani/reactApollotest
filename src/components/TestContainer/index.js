import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { split } from "apollo-link";

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: "http://gambilife.com/graphql"
});

const wsLink = new WebSocketLink({
  uri: `ws://gambilife.com/graphql`,
  options: {
    reconnect: true
  }
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache,
  link
});

const TestContainer = props => (
  <ApolloProvider client={client}>{props.children}</ApolloProvider>
);

export default TestContainer;
