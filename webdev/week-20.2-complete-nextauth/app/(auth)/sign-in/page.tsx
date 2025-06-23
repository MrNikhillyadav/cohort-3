import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import SignIn from "@/components/SignIn";

const Page = async () => {
  const session = await getServerSession();
  if (session?.user) redirect("/home");

  return (
        <SignIn/>
  );
};

export default Page;