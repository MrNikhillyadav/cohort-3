"use server";

import prisma from ".";
import { LoginSchema, RegisterSchema } from "@/lib/zod";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export async function handleSignUp(formData:FormData){
 
       const email = formData.get('email');
       const name = formData.get('name');
       const password = formData.get('password');
       const validatedData = RegisterSchema.parse({email,password,name});
   
       const user = await prisma.user.create({
                 data : {
                   email : validatedData.email.toLowerCase(),
                   name : validatedData.name,
                   password : validatedData.password
                 }
       })

       if(user){
         redirect("/sign-in")
       }
   }

export async function handleSignIn(formData : FormData){

    const email = formData.get('email');
    const password = formData.get('password');

    const validatedData = LoginSchema.parse({email,password})

    await signIn('credentials',{
        email: validatedData.email,
        password: validatedData.password
    }); 
}