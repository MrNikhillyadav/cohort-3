import { getServerSession } from "next-auth";

export default async function Home() {
  const sessions = await getServerSession()

  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center ">

        <h1 className="text-4xl">
            Hi {sessions?.user?.name }, Welcome! to your Profile.
        </h1>
        <div> 
            {sessions?.user?.email}
        </div>
    </div>
  );
}
