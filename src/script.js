const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const main = async () => {
  const newLink = await prisma.link.create({
    data: {
      description: "Fullstack tutorial for GraphQL",
      url: "www.howtographql.com",
    },
  });

  const deleted = await prisma.link.delete({ where: { id: 5 } });

  console.log(deleted);

  const allLinks = await prisma.link.findMany();
  console.log("allLinks", allLinks);

  const singleLink = await prisma.link.findUnique({
    where: { id: 2 },
  });
  console.log(singleLink);

  const updateLink = await prisma.link.update({
    where: { id: 2 },
    data: {
      url: "google.com",
      description: "updateed",
    },
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
