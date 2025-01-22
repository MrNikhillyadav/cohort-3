import './App.css'
import { memo, useEffect, useState } from 'react';

function App() {  
  return (
 
      <Counter/>

 )
}

function Counter(){
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount(c => c + 1)
    },3000)
  },[])
  
  return (
  <div>  
      <CurrentCount count={count} />
      <Increase />
      <Decrease/>
  
  </div>
)}


const CurrentCount = memo(function ({count}){
  return (
    <div>
      {count}
    </div>
  )
})

const Increase = memo(function(){

  return (
    <button > Increase</button>
  )
})

const Decrease = memo(function(){

  return (
    <button > Decrease</button>
  )
})





export default App