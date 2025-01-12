"use client"
import Image from "next/image";
import { Button } from "./Button";

export default function  Navbar(){
    
    return <div className=" h-20  p-3 flex items-center px-[8vw] justify-between border-b text-white border-white/20 bg-black/95">
           <div className="flex justify-center items-center">
                    <Image 
                        width={500}
                        height={500}
                        src={'/kiratprofile.jpg'}
                        alt="100xDevs Logo"
                        className="size-10 rounded-full"
                    />
                    <p
                        className={`hidden bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-2xl font-black tracking-tighter text-transparent min-[410px]:block`}>
                        100xDevs
                    </p>
           </div>
           <div>
                <Button title="Join Now" variant="branding" size="lg" />
           </div>
        </div>
}