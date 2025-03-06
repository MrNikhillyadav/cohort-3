import { useEffect, useState } from "react"

export default function Timer(){
    const [count,setCount] = useState(0);
    const [start,setStart] = useState(true)

    useEffect(()=>{   
        console.log('Clock starts')
        const clock = setInterval(()=>{
               if(start){
                console.log('running.....')
                setCount(c=> c+1)
               }else{
                setCount(count)
                console.log('Clock stopped')
               }
            },1000)
        

        return function cleanup() {
            console.log('cleaned up.......')
            clearInterval(clock);
        };
    },[start,count])

  

    return <div>
        <div className="flex flex-col justify-center items-center">
            <div className="text-7xl pb-12">
                {count}
            </div>
            <div className="gap-2 flex ">
                <button onClick={()=> setStart(true)}  className=" hover:bg-blue-600 bg-blue-500 cursor-pointer text-white rounded-lg px-4 py-2">START </button>
                <button onClick={()=> setStart(false)} className=" hover:bg-red-600 cursour-pointer bg-red-500 text-white rounded-lg px-4 py-2">STOP </button>
            </div>
        </div>
    </div>
}