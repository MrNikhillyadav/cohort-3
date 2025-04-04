import { useState } from "react"

export default function PropDrilling(){
    const [isOn, setIsOn] = useState(false)

    return (
        <div>
            <Bulb isOn={isOn} setIsOn={setIsOn} />
            <SwitchBulb />
        </div>
    )
}

function Bulb({isOn}){
    return (
        <div>
            Buld status : {isOn ? "ON" : "OFF"}
        </div>
    )
}


function SwitchBulb({isOn,setIsOn}){
    function handleToggle(){
        setIsOn(!isOn)
        
    }
    return (
        <div>
            <button onClick={handleToggle}>Toggle</button>
        </div>
    )
}