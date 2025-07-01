import { useContext, useEffect,useState } from "react"
import { createContext } from "react"

export function useEffectPractice(){

    useEffect(() => {
        console.log('expensive logic')

        return () => {
           console.log('cleanup logic')
        }

     },[])

    return (
    <div>
        useEffect Practice
    </div>
    )
}

const BulbContext = createContext();

export function BulbContextProvider({childern}){
    const [isOn, setIsOn] = useState(0);
    

    return <BulbContext.Provider value={ {isOn ,setIsOn}} >
            {childern}
        </BulbContext.Provider>
}

export function ContextApiPractice(){
    return (
            <BulbContextProvider>
                <Light />
            </BulbContextProvider>
        )
}

function Light(){
    const {isOn} = useContext(BulbContext)
    return (
        <div>
            <h1>Light is :{isOn ? "on" : "off"} </h1>
        </div>
    )
}