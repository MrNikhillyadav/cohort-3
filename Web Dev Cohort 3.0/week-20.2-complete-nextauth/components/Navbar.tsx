"use client"

import Image from "next/image";
import { Button } from "./Button";
import {signOut,signIn, useSession} from "next-auth/react"
import { SignOut } from "./SignOut";


export default function  Navbar(){
    const {data:session} = useSession()

    return <div className=" h-20 absolute top-0 w-full  p-3 flex items-center px-[8vw] justify-between border-b text-white border-white/20 bg-white">
           <div className="flex justify-center items-center">
                    <Image 
                        width={500}
                        height={500}
                        src={'/kirat.png'}
                        alt="100xDevs Logo"
                        className="size-10 rounded-full"
                    />
                    <p
                        className={`hidden bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-2xl font-black tracking-tighter text-transparent min-[410px]:block`}>
                        100xdev
                    </p>
           </div>
           <div className="flex items-center justify-center gap-4">
            {!session?.user ? (
                    <>
                        <Button title="Join Now" variant="branding" size="lg" />
                        <Button onClick={() => signIn()} title="Login" variant="secondary" size="lg" />
                    </> 
                )
                :(
                    <>
                        <Button title="Explore Courses" variant="branding" size="lg" />
                        <Button onClick={() => signOut()} title="Logout" variant="secondary" size="lg" />
                    </>
                )            
            }
                    
                    
                
           </div>
        </div>
}