module.exports = {
  links: async (parent, args, context) =>
    await context.prisma.user.findUnique({ where: { id: parent.id } }).links(),
};
