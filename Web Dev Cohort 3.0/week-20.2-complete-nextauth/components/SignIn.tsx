"use client"

import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from 'next-auth/react';
import { LoginSchema } from '@/lib/zod';
import { redirect } from 'next/navigation';

const SignIn = () => {

   async function handleSignIn(formData : FormData){
    const email = formData.get('email');
    const password = formData.get('password');

    const validatedData = LoginSchema.parse({email,password});
    console.log('validatedData',validatedData);
    const res = await signIn('credentials',validatedData); 

    if(!res?.success){
      redirect('/')
    }else(
      redirect('/home')
    )
}
  return (
    <div className="w-full  max-w-sm mx-auto mt-20 space-y-6">
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