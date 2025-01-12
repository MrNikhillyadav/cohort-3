import { Greeting } from "@/components/Greeting";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Home(){
    const session = await getServerSession();
    if(!session?.user) redirect('/')

    return (
        <main className="flex flex-col h-screen text-white items-center bg-black/95 gap-4 pb-16 pt-8">
        <div className="flex flex-col justify-between gap-4 lg:flex-row">
          <h1 className="text-wrap text-3xl font-extrabold capitalize tracking-tighter md:text-4xl">
            <Greeting /> {session.user.name}
          </h1>
        </div>
  
        <div className="flex h-full flex-col gap-4 rounded-2xl py-4">
          My Courses
        </div>
      </main>
    )
}