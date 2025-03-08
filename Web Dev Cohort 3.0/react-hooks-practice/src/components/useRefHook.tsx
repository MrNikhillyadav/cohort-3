import { useEffect, useRef } from "react";

export default function UseRefHook(){
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current?.focus();
    },[])
    
    function handleClick(){
        inputRef.current?.focus();
    }
    

    return <div className="flex flex-col space-y-2 justify-center items-center bg-slate-100 p-8 rounded-lg">
        <label onClick={handleClick} className="text-xs text-start w-full text-slate-500" htmlFor="input">Username </label>
        <input className="border-none px-2 text-sm py-1 rounded-md text-blue-600 " ref={inputRef} type="text" />
        <button className="bg-blue-500  cursor-pointer text-xs text-white px-6 py-2 rounded-md">Submit</button>
    </div>
}