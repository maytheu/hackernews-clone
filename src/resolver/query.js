module.exports = {
  info: () => `This is the API of a Hackernews Clone`,
  feed: async (parent, args, context) => {
    return await context.prisma.link.findMany();
  },
  test: null,
  link: async (parent, args, context) => {
    return await context.prisma.link.findUnique({ where: { id: Number(args.id) } });
  },
};
