import {useEffect, useState } from "react"


export function DebounceHookPractice(){
    const [inputValue,setInputValue] = useState('')

    const debouncedValue = useDebounceHook(inputValue,1)

    useEffect(() => {
            console.log('fetching data from API')
    },[debouncedValue])
    
    return (
        <div>
            Debounce hook <br />
            <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="search" />
        </div>
    )
}

function useDebounceHook(inputValue,delay){
    const [debouncedInputValue,setDebouncedInputValue] = useState(inputValue)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedInputValue(inputValue)
        }, delay * 1000)

        return () => {
            console.log('clear')
            clearInterval(handler)
        }

    },[inputValue,delay])


    return debouncedInputValue;
}