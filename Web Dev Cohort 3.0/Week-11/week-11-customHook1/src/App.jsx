import './App.css'
import { usePrev } from './hooks/usePrev';
import { useCount } from './hooks/useCount';

 function App() {
  const {count,incrementCount} = useCount()
  const prev = usePrev(count)
 
  return (
    <>
      <button onClick={incrementCount}>Increase : {count}</button>
      <p>previous value : {prev}</p>
    </>
  )
}

export default App