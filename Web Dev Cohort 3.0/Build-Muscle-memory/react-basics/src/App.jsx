import ContextApi from "./hook/ContextApi";
import { DebounceHookPractice } from "./hook/DebounceHook";
import PropDrilling from "./hook/PropDrilling";
import { DebounceHook } from "./hook/UseDebounce";
import { UseRefHook } from "./hook/UseRefHook";
import { UseState } from "./hook/UseState";
import ReactHookFormValidation from "./InputValidation/ReactHookFormValidation";
import { SimpleForm } from "./InputValidation/SimpleForm";
import ZodReactHookFormValidation from "./InputValidation/ZodReactHookFormValidation";

  
 export default function App() {
  return (
    <div className="text-3xl font-bold underline">
      {/* <UseState/> */}
      {/* <UseRefHook/> */}
      {/* <PropDrilling/> */}
      {/* < ContextApi /> */}
      {/* <DebounceHook/> */}
      {/* <SimpleForm/> */}
      {/* <ReactHookFormValidation/> */}
      {/* <ZodReactHookFormValidation/> */}

      <DebounceHookPractice/>
    </div>
  )
}

