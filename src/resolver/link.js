module.exports = {
  // resolving from the link schema
  postedBy: async (parent, args, context) =>
    await context.prisma.link
      .findUnique({ where: { id: parent.id } })
      .postedBy(),
};
