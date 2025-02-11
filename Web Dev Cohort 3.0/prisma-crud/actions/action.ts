"use server"

import { prisma } from "@/lib/db"
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function addPostToDb(formdata : FormData){
    console.log('formdata: ', formdata);
    const title  = formdata.get('title') as string;
    console.log('title: ', title);
    const content  = formdata.get('content') as string;
    console.log('content: ', content);

    try{
      await prisma.post.create({
       data : {
         title,
         content,
         slug : (formdata.get('content') as string).replace(/\s+/g,"-").toLocaleLowerCase(),
         author : {
          connect :{
            email : "john@gmail.com"
          },
         }
       }
     })
    }
    catch(e){
      return NextResponse.json({
        error : e
      })
    }

   redirect('/')
 }
export async function addUserToDb(formdata : FormData){
    const email  = formdata.get('email') as string;
    const hashedPassword = formdata.get('password') as string;

    try{
      await prisma.user.create({
       data : { 
         email,
         hashedPassword,
       }
     })
    }
    catch(e){
      return NextResponse.json({
        error : e
      })
    }

   redirect('/')
 }