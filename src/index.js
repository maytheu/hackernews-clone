const { ApolloServer } = require("apollo-server");

// graphql schema
const typeDefs = `
    type Query {
        info: String!
        feed: [Link!]!
    }

    type Link{
        id: ID!
        description: String!
        url: String!
    }
`;

// dummy data for hacker news
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
];

// query function
const resolver = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },

  //  manages the link schema
  Link: {
    id: (parent) => parent.id,
    url: (parent) => parent.url,
    description: (parent) => parent.description,
  },
};

// server
const server = new ApolloServer({ typeDefs, resolvers: resolver });

// listen to server
server.listen().then(({ url }) => console.log(`Server running on ${url}`));
