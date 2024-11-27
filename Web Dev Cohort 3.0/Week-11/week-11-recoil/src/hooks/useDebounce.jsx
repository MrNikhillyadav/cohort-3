import { useEffect, useRef, useState } from "react";

export function useDebounce(value){
          const ref = useRef()
          const [debounceValue, setDebounceValue] = useState('value')
          
          useEffect(()=>{
                    ref.current = setTimeout(()=>{
                              setDebounceValue(value)
                    },300)

                    return ()=>{
                              console.log('clear')
                              clearTimeout(ref.current)
                    }
          },[value])

          return debounceValue;
}