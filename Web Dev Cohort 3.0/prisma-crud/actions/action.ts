"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache";

export async function addPostToDb(formdata : FormData){
    const title  = formdata.get('title') as string;
    const content  = formdata.get('content') as string;

    await prisma.post.create({
     data : {
       title,
       content,
       slug : (formdata.get('content') as string).replace(/\s+/g,"-").toLocaleLowerCase(),
       author : {
        connect :{
          email : 'facts.foundr@gmail.com'
        },
       }
     }
   })

   revalidatePath('/')
 }