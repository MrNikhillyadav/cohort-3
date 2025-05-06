import { useDispatch,useSelector } from "react-redux";
import { decrement, increment } from "../features/color/countSlice";
import { changeToBlue, changeToWhite } from "../features/color/colorSlice";

export default function Redux(){
    const count = useSelector((state) => state.count.value);
    const color = useSelector((state) => state.color.value);
    const dispatch = useDispatch();

    return <div>
        <h1>Counter : { count }</h1>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>
        
        <br />

        color is : <h2 style={{color}}> {color} </h2>
        <button onClick={() => dispatch(changeToBlue())}> blue </button>
        <button onClick={() => dispatch(changeToWhite())}>white </button>
    </div>
}