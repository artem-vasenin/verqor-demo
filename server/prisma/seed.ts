import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const posts = [
  {
    title: 'First Post',
    description: 'Short descriptions for first blog`s post',
    body: '<p>Full content for demo post. This is a <b>first post</b></p>',
  },
  {
    title: 'Second Post',
    description: 'Short descriptions for second blog`s post',
    body: '<p>Full content for demo post. This is a <b>second post</b></p>',
  },
  {
    title: 'Third Post',
    description: 'Short descriptions for third blog`s post',
    body: '<p>Full content for demo post. This is a <b>third post</b></p>',
  },
];

async function main() {
  for(let post of posts) {
    await prisma.post.create({data: post});
  }
}

main()
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });