import { useState } from "react";

export function useCount(){
          const [count, setCount] = useState(0);


          function incrementCount(){
            setCount(count + 1)
          }

          return {
                    count,
                    incrementCount
          }
}