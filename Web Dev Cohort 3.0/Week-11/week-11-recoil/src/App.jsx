import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/counter';



function App() {  
  return (
    <RecoilRoot>   
      <Counter/>
    </RecoilRoot>
 )
}

function Counter(){
  return (
    <>  
      <CurrentCount/>
      <Increase />
      <Decrease/>
  
  </>
)}

function CurrentCount(){
  const count = useRecoilValue(counterAtom)

  return (
    <>
      {count} <br />
    </>
  )
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom)

  function increaseCount(){
    setCount(c => c + 1 )
  }
  
  return (
    <button onClick={increaseCount} > Increase</button>
  )
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom)

  function DecreaseCount(){
    setCount(c => c-1)
  }
  return (
    <button onClick={DecreaseCount} > Decrease</button>
  )
}



export default App
