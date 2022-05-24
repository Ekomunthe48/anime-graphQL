import { ApolloClient, InMemoryCache } from "@apollo/client";
import { collectionFavVar } from "./cache";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          collectionFav: {
            read() {
              return collectionFavVar();
            },
          },
        },
      },
    },
  }),
});

export default client;
