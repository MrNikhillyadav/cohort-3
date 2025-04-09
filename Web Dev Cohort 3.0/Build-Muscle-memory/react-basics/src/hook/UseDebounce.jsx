import { useEffect, useState } from "react";

export function DebounceHook(){

    const [inputValue,setinputValue] = useState(null)
    const debouncedInput = useDebounce(inputValue,1)
    console.log('debouncedInput: ', debouncedInput);

    useEffect(() => {  
        console.log('expensive call')
    },[debouncedInput])

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

function useDebounce(value,delay){
    const [debouncedValue,setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
                setDebouncedValue(value)
            },delay * 1000)

        return () => {
            console.log('cleared')
            clearInterval(handler)
        }
    },[value,delay])

    return debouncedValue
}