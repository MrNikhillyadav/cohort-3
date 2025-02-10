import { prisma } from "@/lib/db"
import Link from "next/link"

export default async function AllPostsPage() {
  const posts = await prisma.post.findMany()

  return <>
      <div className="w-full bg-white text-black h-screen">
        <div className="flex flex-col justify-center items-center  ">
              <h1 className="text-4xl">All Posts(0)</h1>
              <div className=" flex flex-col gap-2  my-4 ">
                {posts.map((post) => (
                   <div 
                      key={post.id}
                      className="border hover:bg-slate-500/5 p-4 shadow-md cursor-pointer rounded-md"
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
        </div>
      </div>
  </>
}
