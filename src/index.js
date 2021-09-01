const { ApolloServer } = require("apollo-server");
const path = require("path");
const fs = require("fs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// dummy data for hacker news
// let links = [
//   {
//     id: "link-0",
//     url: "www.howtographql.com",
//     description: "Fullstack tutorial for GraphQL",
//   },
// ];

// query function
const resolver = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // feed: () => links,
    feed: async (parent, args, context) => {
      return context.prisma.link.findMany();
    },
    test: null,
    link: async (parent, args, context) => {
      return context.prisma.link.findUnique({ where: { id: args.id } });
      //single list
      // const findPost = links.findIndex((link) => link.id == args.id);
      // return links[findPost];
    },
  },

  //  manages the link schema
  // Link: {
  //   id: (parent) => parent.id,
  //   url: (parent) => parent.url,
  //   description: (parent) => parent.description,
  // },

  // post
  Mutation: {
    post: async (parent, arg, context, info) => {
      // let idCount = links.length;
      // const link = {
      //   id: `link-${idCount++}`,
      // description: arg.description,
      // url: arg.url,
      // };
      // links.push(link);
      // return link;

      const newPost = await context.prisma.link.create({
        data: {
          description: arg.description,
          url: arg.url,
        },
      });
      return newPost;
    },

    updatePost: async (parent, args, context) => {
      // const post = {
      // id: args.id,
      // description: args.description,
      // url: args.url,
      // };

      // const findPost = links.findIndex((link) => link.id == post.id);
      // links[findPost] = post;
      // return post;

      const updated = await context.prisma.link.update({
        where: { id: Number(args.id) },
        data: { description: args.description, url: args.url },
      });
      return updated;
    },

    deletePost: async (parent, id, context) => {
      // const findPost = links.findIndex((link) => link.id == id.id);
      // const deleted = links.splice(findPost, 1);
      // return deleted;
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
