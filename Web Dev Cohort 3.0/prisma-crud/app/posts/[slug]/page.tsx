import { prisma } from "@/lib/db"

export default async function PostPage({params}) {
  const post = await prisma.post.findFirst({
    where : {
        slug : params.slug
    }
  })

  return <>
      <div className="w-full bg-white text-black h-screen">
        <div className="flex p-12    justify-center items-center  ">
                   <div>
                      <h1>{post?.title}</h1>
                      <p>{post?.content}</p>
                  </div>
              
              </div>
      </div>
  </>
}
