"use client"

import React, { useRef } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const router = useRouter()
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const onSubmit = async() =>{
        if(e) e.preventDefault()
        
        const email = emailRef?.current?.value
        console.log('email: ', email);
        const password = passwordRef?.current?.value
        console.log('password: ', password);

       const res =  await signIn('credentials',{
            username : email,
            password : password,
            redirect : false
        })

        if (!res?.error) {
            router.push('/home');
        }

    }

  return (
    <div className="w-full  max-w-sm mx-auto mt-20 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4">
        <Input
          ref = {emailRef}
          name="email"
          placeholder="johndoe@gmail.com"
          type="email"
          required
          autoComplete="email"
        />
        <Input
          ref = {passwordRef}
          name="password"
          placeholder="Password"
          type="password"
          required
          autoComplete="current-password"
        />
        <Button 
            className="w-full" type="submit">
          Login
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