import { useState } from "react"

export default function UseStateHook(){
    const [count,setCount] = useState(0);

    return <div>
        <div className="flex flex-col justify-center items-center">
            <div className="text-7xl pb-12">
                {count}
            </div>
            <div className="gap-2 flex ">
                <button onClick={()=>(count > 0 && setCount(c=> c-1))} className=" hover:bg-red-600 cursour-pointer bg-red-500 text-white rounded-lg px-4 py-2">Decrement - </button>
                <button onClick={()=> setCount(c=> c+1)}  className=" hover:bg-blue-600 bg-blue-500 cursor-pointer text-white rounded-lg px-4 py-2">Increment + </button>
            </div>
        </div>
    </div>
}