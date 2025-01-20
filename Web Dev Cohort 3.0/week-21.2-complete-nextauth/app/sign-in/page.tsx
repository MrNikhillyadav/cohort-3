import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { executeAction } from "@/lib/executeAction";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

const Page = async () => {
  const session = await getServerSession();
  if (session) redirect("/");

  return (
    <div className="w-full  max-w-sm mx-auto mt-20 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with email
          </span>
        </div>
      </div>

      {/* Email/Password Sign In */}
      <form
        className="space-y-4"
      >
        <Input
          name="email"
          placeholder="Email"
          type="email"
          required
          autoComplete="email"
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
          autoComplete="current-password"
        />
        <Button className="w-full" type="submit">
          Sign In
        </Button>
      </form>

      <div className="text-center">
        <Button asChild variant="link">
          <Link href="/sign-up">Don&apos;t have an account? Sign up</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;