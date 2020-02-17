import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css';
import * as serviceWorker from "./serviceWorker";
import "react-table/react-table.css";
import 'react-virtualized/styles.css';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';

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
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
