const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

module.exports = {
  signup: async (parent, args, context) => {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.user.create({
      data: { ...args, password },
    });
    const token = jwt.sign({ userId: user.id }, process.env.SECRET);
    return { user, token };
  },

  login: async (parent, args, context) => {
    const user = await context.prisma.user.findUnique({
      where: { email: args.email },
    });
    if (!user) throw new Error("User not found");
    const ismatch = await bcrypt.compare(args.password, user.password);
    if (!ismatch) throw new Error("Invalid user or password");
    const token = jwt.sign({ userId: user.id }, process.env.SECRET);
    return { user, token };
  },

  post: async (parent, arg, context, info) => {
    const { userId } = context; // to ttrack if user is logged in
    // console.log(userId)
    const newPost = await context.prisma.link.create({
      data: {
        description: arg.description,
        url: arg.url,
        postedBy: { connect: { id: userId } },
      },
    });
    return newPost;
  },

  updatePost: async (parent, args, context) => {
    const { userId } = context;

    const updated = await context.prisma.link.update({
      where: { id: Number(args.id) },
      data: {
        description: args.description,
        url: args.url,
        postedBy: { connect: { id: userId } },
      },
    });
    return updated;
  },

  deletePost: async (parent, id, context) => {
    const { userId } = context;

    if (!userId) throw new Error("login error");
    const deleted = await context.prisma.link.delete({
      where: { id: Number(id.id) },
    });
    return deleted;
  },
};
