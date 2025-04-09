import { Lightbulb,LightbulbOff, Power } from "lucide-react"
import { useContext } from "react";
import { useState,createContext } from "react"

const BulbContext = createContext();

function ContextApiProvider({children}){

    const [toggle, setToggle] = useState(false);

    return ( <BulbContext.Provider 
            value={{toggle,setToggle }} >
            {children}
    </BulbContext.Provider>
    )
}

export default function ContextApi(){
    return <div>
        <ContextApiProvider>
            <Bulb/>
        </ContextApiProvider>
    </div>
}

function Bulb(){
    return <div style={{display : 'flex', justifyContent : "center", alignItems : "center", gap : "10vw"}}>
        <ToggleBulb/>
        <LightBulb/>
    </div>
}

function ToggleBulb(){
    const {toggle,setToggle} = useContext(BulbContext)

    return <div 
            style={{display : 'flex', flexDirection : "column", justifyContent : "center", alignItems : "center", gap : "0.2vw", cursor:"pointer"}}>
            <Power onClick={() => setToggle(!toggle)} />
            {toggle ? "OFF" : "ON"}
    </div>
}

function LightBulb(){
    const {toggle} = useContext(BulbContext)

    return <div>
        {toggle ? <Lightbulb /> : <LightbulbOff />}
    </div>
}