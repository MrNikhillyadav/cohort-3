import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { handleSignUp } from "@/db/actions";


const SignUp = async () => {
  const session = await getServerSession();
  if (session) redirect("/");

  return (
    <div className="w-full max-w-sm mx-auto mt-20 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

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

    
      <form
        className="space-y-4"
        action={handleSignUp}
       
      > 
        <Input
          name="name"
          placeholder="John Doe"
          type="text"
          required
          autoComplete="name"
        />
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
          autoComplete="new-password"
        />
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </form>

      <div className="text-center">
        <Button asChild variant="link">
          <Link href="/sign-in">Already have an account? Sign in</Link>
        </Button>
      </div>
    </div>
  );
};

export default SignUp;