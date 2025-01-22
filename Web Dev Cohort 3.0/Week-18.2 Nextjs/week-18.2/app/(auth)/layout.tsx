import Navbar from "@/components/Navbar/page";
import { Children } from "react";

export default function authLayout({children}){
        return (
                <div> 
                        <Navbar/>
                        {children}
                </div>
        )
}