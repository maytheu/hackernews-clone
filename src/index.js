const { ApolloServer } = require("apollo-server");
const path = require("path");
const fs = require("fs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// query function
const resolver = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: async (parent, args, context) => {
      return context.prisma.link.findMany();
    },
    test: null,
    link: async (parent, args, context) => {
      return context.prisma.link.findUnique({ where: { id: Number(args.id) } });
    },
  },

  // post
  Mutation: {
    post: async (parent, arg, context, info) => {
      const newPost = await context.prisma.link.create({
        data: {
          description: arg.description,
          url: arg.url,
        },
      });
      return newPost;
    },

    updatePost: async (parent, args, context) => {
      const updated = await context.prisma.link.update({
        where: { id: Number(args.id) },
        data: { description: args.description, url: args.url },
      });
      return updated;
    },

    deletePost: async (parent, id, context) => {
      const deleted = await context.prisma.link.delete({
        where: { id: Number(id.id) },
      });
      return deleted;
    },
  },
};
// server
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"), //import schema
  resolvers: resolver,
  context: { prisma },
});

// listen to server
server.listen().then(({ url }) => console.log(`Server running on ${url}`));
