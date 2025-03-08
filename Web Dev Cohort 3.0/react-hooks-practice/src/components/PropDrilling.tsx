import { useState } from "react"

export default function PropDrilling(){
    const [toggleBulb,setToggleBulb] = useState<boolean>(false)
    return <div>
            <h1>Prop drilling in react</h1>
            <ToggleBulb toggleBulb={toggleBulb } setToggleBulb={setToggleBulb} />
    </div>
}

interface ToggleBulbInterface {
    toggleBulb:boolean,
    setToggleBulb: (value:boolean)=> void;
  }

function ToggleBulb({toggleBulb,setToggleBulb}:ToggleBulbInterface){
    function handleToggle(){
        setToggleBulb(!toggleBulb)
    }

    return (
        <div className="flex mt-8 gap-4">
            {toggleBulb? "light":"dark"}
            <button onClick={handleToggle} className="bg-blue-500 rounded-md px-6 py-2 text-white">switch</button>
        </div>
    )
}
