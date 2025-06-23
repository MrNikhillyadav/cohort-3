"use client"

import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from 'next-auth/react';
import { LoginSchema } from '@/lib/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter()

   async function handleSignIn(formData : FormData){
    const loadId = toast.loading('Signing in...');

    const email = formData.get('email');
    const password = formData.get('password');

    if(!email || !password){
      toast.dismiss(loadId);
      return;
    }

    const validatedData = LoginSchema.parse({email,password});

    const res = await signIn('credentials',
      {
        email : validatedData.email,
        password : validatedData.password,
        redirect : false,

      }); 

    toast.dismiss(loadId);
    if(!res?.error){
      router.push('/home');
      toast.success('Signed In');
    }else {
      if (res.status === 401) {
        toast.error('Invalid Credentials, try again!');
      } else if (res.status === 400) {
        toast.error('Missing Credentials!');
      } else if (res.status === 404) {
        toast.error('Account not found!');
      } else if (res.status === 403) {
        toast.error('Forbidden!');
      } else {
        toast.error('oops something went wrong..!');
      }

    }
}
  return (
    <div className="w-full border p-10 max-w-sm mx-auto mt-20 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

      <form
        action={handleSignIn}
        className="space-y-4">
        <Input
          name="email"
          placeholder="johndoe@gmail.com"
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
        <Button 
            className="w-full" type="submit">
          Sign in
        </Button>
      </form>

      <div className="text-center">
        <Button asChild variant="link">
          <Link href="/sign-up">Don&apos;t have an account? Sign up</Link>
        </Button>
      </div>
    </div>
  )
}

export default SignIn