import SidebarItem from "./SidebarItem";
import { RiTwitterXLine } from "react-icons/ri";
import { ImYoutube } from "react-icons/im";
import { LuBrain } from "react-icons/lu";
import { IoDocumentText } from "react-icons/io5";
import { PiLinkSimpleBold } from "react-icons/pi";

export function Sidebar(){
        return (
                <div className="sidebar bg-white min-w-[18vw] p-8 border ">
                        <div className='flex justify-center p-2 gap-3 items-center'>
                                <LuBrain className='text-4xl text-blue-600'/> 
                                <h1 className='font-semibold text-xl'>Second Brain</h1>
                        </div>
                        <div className=' px-2 mt-[1.75rem] flex flex-col gap-1'>
                                <SidebarItem title={"Twitter"} icon={<RiTwitterXLine className="text-lg" />}/>
                                <SidebarItem title={"Youtube"} icon={<ImYoutube className="text-lg" />}/>
                                <SidebarItem title={"Documents"} icon={<IoDocumentText className="text-lg" />}/>
                                <SidebarItem title={"Links"} icon={<PiLinkSimpleBold className="text-lg" />}/>
                        </div>
                </div>
        )
}