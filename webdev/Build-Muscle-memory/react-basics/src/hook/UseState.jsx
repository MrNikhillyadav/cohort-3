import { useState } from "react"

export function UseState(){
    const [count, setCount] = useState(0)
    

    function handleIncrement(){
        console.log('increment')
        setCount((c) => c + 1)
    }

    function handleDecrement(){
        if(count <= 0){
            return 0
        }
        
        setCount((c) => c - 1)
    }

 return (
        <div>
            <h1>counter : {count }</h1>
            <button onClick={handleIncrement}> + </button>
            <button onClick={handleDecrement}> - </button>
        </div>
 )

}