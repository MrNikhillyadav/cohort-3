import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req:NextRequest){
    const body = await req.json()

    const name = body.name;
    const password = body.password

    try{
        
        const user = await prisma.user.find({
            where : {
                name : name,
                password : password
            }
        })

        if(user){

            return NextResponse.json({
                message : "signed in successfully",
                   
            })
        }
    }
    catch(e){

       return NextResponse.json({
            error : e
       })
    }

    
   

    
}