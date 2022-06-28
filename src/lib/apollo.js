import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://swift-sprint.testingnow.me/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;
