import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const initialPosts:Prisma.PostCreateInput[] = [
    {
        title : "first post",
        slug : "first-post",
        content : "this is my first post guys!",
        author : {
            connectOrCreate : {
                where : {
                    id: ""
                },
                create : {
                    email : "facts.foundr@gmail.com",
                    hashedPassword : "abcd",

                }
            }
        }
    }
]


async function main() {
    console.log("start seeding  .....") ;
    
    for(const post of initialPosts){
        const newPost = await prisma.post.create({
            data : post,
        });
        console.log(`Created post with id: ${newPost.id} `)
    }

    console.log("stopped seeding  .....") ;
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })