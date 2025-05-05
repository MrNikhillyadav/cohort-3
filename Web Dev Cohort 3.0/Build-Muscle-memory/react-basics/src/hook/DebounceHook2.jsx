import { useEffect, useState } from "react"


export default function DebounceHookUse2(){

    const [inputValue, setInputValue] = useState(null);
    const debouncedInput = useDebounceHook2(inputValue,2);

    useEffect(() => {
        console.log('expensive call');
    }, [debouncedInput])

    return <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </div>
}

function useDebounceHook2(inputValue,delay){
    const [debouncedValue, setDebouncedValue] = useState(inputValue)
    
    useEffect(() => {
        const clock = setTimeout(() => {
            setDebouncedValue(debouncedValue)
        }, delay * 1000)

        return () => {
            clearInterval(clock)
        }

    },[debouncedValue,delay])

    return debouncedValue;

}