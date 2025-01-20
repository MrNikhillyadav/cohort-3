"use client"

import Image from "next/image";
import { Button } from "./Button";

export default function  Navbar(){

    return <div className=" h-20 absolute top-0 w-full  p-3 flex items-center px-[8vw] justify-between border-b text-white border-white/20 bg-slate-100">
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
                        Dub
                    </p>
           </div>
           <div className="flex items-center justify-center gap-4">
                    <>
                        <Button title="Login" variant="secondary" size="lg" />
                        <Button title="Join Now" variant="branding" size="lg" />
                
                    </> 
                    
                    
                
           </div>
        </div>
}