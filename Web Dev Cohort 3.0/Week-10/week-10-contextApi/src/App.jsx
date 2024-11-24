import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"

const BulbContext = createContext();

function BuldContextProvider({children}){
  const [isOn, setIsOn] = useState(false)

  return (
    <BulbContext.Provider value={{isOn, setIsOn}}>
        {children}
    </BulbContext.Provider>
  )
}

function App() {

  return (
      <BuldContextProvider >
           <Light/> 
      </BuldContextProvider>
  )
}

function Light(){
  return (
    <div>
      <LightBulb  />
      <LightSwitch />
    </div>
  )
}

function LightBulb(){
  const {isOn} = useContext(BulbContext)
  return (
    <div>
      {isOn ? <p>Light is on</p> : <p>Light is off</p>} 
    </div>
  )
}

function LightSwitch(){
  const {isOn,setIsOn} = useContext(BulbContext)
  function ToggleBulb(){
    setIsOn(!isOn)
  }
  return (
    <button onClick={ToggleBulb}>Toggle Bulb</button>
  )
}
export default App
