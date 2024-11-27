import './App.css'
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from './hooks/useDebounce';


function App() {
  const [inputVal,setInputVal] = useState()
  const debounceFn = useDebounce(inputVal)

  function change(e){
    setInputVal(e.target.value)
  }

  useEffect(()=>{
    console.log('expensive fn')
    
  },[debounceFn])

  return (
    <> 
      <input onChange={change} type="text" />
    </>
  )
}

export default App