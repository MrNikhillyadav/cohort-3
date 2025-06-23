import { useEffect, useState } from "react";

export function DebounceHook(){

    const [inputValue,setinputValue] = useState(null)
    const debouncedInputValue = useDebounce(inputValue,1)

    useEffect(() => {  
        console.log('expensive call')
    },[debouncedInputValue])

    function fetchHandler(e){
        setTimeout(()=> {
            setinputValue(e.target.value)
        },)

    }

    return (
        <div>   
            Debounce hook
            <input type="text" name="input" onChange={fetchHandler} /> 
        </div>
    )
}

function useDebounce(inputValue,delay){
    const [debouncedValue,setDebouncedValue] = useState(inputValue)

    useEffect(() => {
        const handler = setTimeout(() => {
                setDebouncedValue(inputValue)
            },delay * 1000)

        return () => {
            console.log('cleared')
            clearInterval(handler)
        }
    },[inputValue,delay])

    return debouncedValue
}