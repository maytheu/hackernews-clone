const { ApolloServer } = require("apollo-server");
const path = require("path");
const fs = require("fs");

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
    test: null,
    link: (parent, args) => { //single list
      const findPost = links.findIndex((link) => link.id == args.id);
      return links[findPost]
    },
  },

  //  manages the link schema
  Link: {
    id: (parent) => parent.id,
    url: (parent) => parent.url,
    description: (parent) => parent.description,
  },

  // post
  Mutation: {
    post: (parent, arg) => {
      let idCount = links.length;
      const link = {
        id: `link-${idCount++}`,
        description: arg.description,
        url: arg.url,
      };
      links.push(link);
      return link;
    },

    updatePost: (parent, args) => {
      const post = {
        id: args.id,
        description: args.description,
        url: args.url,
      };

      const findPost = links.findIndex((link) => link.id == post.id);
      links[findPost] = post;
      return post;
    },

    deletePost: (parent, id) => {
      const findPost = links.findIndex((link) => link.id == id.id);
      const deleted = links.splice(findPost, 1);
      return deleted;
    },
  },
};

// server
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"), //import schema
  resolvers: resolver,
});

// listen to server
server.listen().then(({ url }) => console.log(`Server running on ${url}`));
