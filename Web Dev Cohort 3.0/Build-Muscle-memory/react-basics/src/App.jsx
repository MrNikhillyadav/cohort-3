import ContextApi from "./hook/ContextApi";
import PropDrilling from "./hook/PropDrilling";
import { UseRefHook } from "./hook/UseRefHook";
import { UseState } from "./hook/UseState";

  
 export default function App() {
  return (
    <div className="text-3xl font-bold underline">
      {/* <UseState/> */}
      {/* <UseRefHook/> */}
      {/* <PropDrilling/> */}
      < ContextApi />
    </div>
  )
}

