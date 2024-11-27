import { useEffect, useState } from 'react';

export function useDebounce(inputVal){
  const [debouncedVal, setDebouncedVal] = useState(inputVal);

  useEffect(()=>{
      const handler = setTimeout(()=>{
        setDebouncedVal(inputVal);
      },200)

      return () =>{
        console.log('clear')
        clearTimeout( handler)
      }

  },[inputVal])

  return debouncedVal;
}
