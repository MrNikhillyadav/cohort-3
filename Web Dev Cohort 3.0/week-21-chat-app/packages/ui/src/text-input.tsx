

interface InputInterface {
    placeholder : string,

}

export function Input(props:InputInterface){
    return (
        <div className='hidden md:flex items-center justify-start gap-2 className="text-xs tracking-tight  px-2 py-1 rounded-lg w-[20vw] border bg-white/20 border-white/30 "'>

             <div  className="text-sm p-1 rounded-md text-white/80 "><IoSearchOutline/></div>
            <input placeholder={props.placeholder} className="bg-transparent text-sm outline-none w-full"/> 
             <div  className="text-sm border border-white/30 p-1 rounded-md "><HiOutlineSlash/></div>
        </div>
    )
}