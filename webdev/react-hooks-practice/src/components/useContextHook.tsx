import { HiLightBulb } from "react-icons/hi";
import { createContext,useContext,useState } from "react"

const BulbContext = createContext<BulbContextInterface>({ isOn:false, setIsOn : () => {} });

interface BulbContextProviderInterface {
    children : React.ReactNode
}
interface BulbContextInterface {
    isOn : boolean,
    setIsOn : (value : boolean) => void
}
function BulbContextProvider({children}:BulbContextProviderInterface){
    const [isOn,setIsOn] = useState(false)

    return (
        <BulbContext.Provider  value={{isOn,setIsOn}} >
            {children}
        </BulbContext.Provider>
    )
}

export default function UseContextHook(){
    return (
        <BulbContextProvider>
            <Light/>
        </BulbContextProvider>
    )
}

function Light(){
    return <div>
        <SwitchLightBulb/>
        <LightBulb/>
    </div>
}

function SwitchLightBulb(){
    const {isOn} = useContext(BulbContext)

    return <div>
            {isOn ? (
                <div className="flex  justify-center items-center gap-2"> Light is :
                    <HiLightBulb className="fill-yellow-400 text-xl "/> 
                </div>
            ): (
                <div className="flex justify-center items-center  gap-2"> Light is :
                    <HiLightBulb  className="fill-black text-xl "/> 
                </div>
            )}
    </div>
}
function LightBulb(){
    const {isOn,setIsOn} = useContext(BulbContext)

    function toggleBulb(){
        setIsOn(!isOn)
    }
    return <div>
            <button onClick={toggleBulb} className="bg-blue-500 px-4 py-2 my-4 cursor-pointer hover:bg-blue-400 rounded-md text-white">toggle</button>
    </div>
}