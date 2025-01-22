import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom, isEvenSelector } from './store/atoms/counter';



function App() {  
  return (
    <RecoilRoot>   
      <Counter/>
      <Buttons/>
      <Even/>
    </RecoilRoot>
 )
}

function Counter(){
  const count = useRecoilValue(counterAtom); //subscribed to the atom
  return (
    <div>  
      {count}
  </div>
)}

function Buttons(){
  const setCount = useSetRecoilState(counterAtom) 

  function Increase(){
    setCount(c=> c+2)
  }

  function Decrease(){
    setCount(c => c-1)
  }

  return(
    <div>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  )
}

function Even(){
 const isEven = useRecoilValue(isEvenSelector) //subscribed to isEvenSelector
 return (
  <div>
    {isEven ? 'Even' : 'Odd'}
  </div>
 )
}



export default App
