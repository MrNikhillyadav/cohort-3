import { useEffect, useRef } from "react";

export default function UseRefHook(){
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current?.focus();
    },[])

    return <div>
        <input ref={inputRef} type="text" />
        <button>Submit</button>
    </div>
}