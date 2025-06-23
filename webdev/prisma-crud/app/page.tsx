import { prisma } from "@/lib/db"
import Link from "next/link"

export default async function AllPostsPage() {

  const posts = await prisma.post.findMany({
      where :{
        title : {
            endsWith : ""
        }
      },
      orderBy : {
        createdAt : 'desc'
      },
      select : {
        id : true,
        title : true,
        content : true,
        slug : true,
      },
      // take : 1,        // take one
      // skip : 1,        //skip the first one
  })

  // const PostByUserName = await prisma.user.findUnique({
  //   where: {
  //     email : "facts.foundr@gmail.com",
  //   },
  //   include : {
  //     posts : true
  //   },
  // })

  const postCount = await prisma.post.count()

  return <>
      <div className="w-full bg-white text-black h-screen">
        <div className="flex flex-col justify-center items-center  ">
              <h1 className="text-4xl my-2">All Posts({postCount})</h1>
              <div className=" flex flex-col gap-2  my-4 ">
                {posts.map((post) => (
                   <div 
                      key={post.id}
                      className="border hover:bg-slate-500/5 p-4 px-20 shadow-sm cursor-pointer rounded-md"
                      >
                      <Link href={`/posts/${post.slug}`}>
                        <h1>
                          {post.title}
                        </h1>
                      </Link>
                      <p>{post.content}</p>
                  </div>
                ))}
              </div>

                <div className="flex gap-4 justify-center items-center">
                <Link className="bg-blue-600 rounded-md text-white px-6 py-2 cursor-pointer " href={'/add-new-post'}>Add New Post</Link>
                <Link className="bg-blue-600 rounded-md text-white px-6 py-2 cursor-pointer " href={'/add-new-user'}>Add new user</Link>

            
              </div>
        </div>
      </div>
  </>
}


