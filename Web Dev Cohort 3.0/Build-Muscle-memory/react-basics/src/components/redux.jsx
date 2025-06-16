import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/color/countSlice";
import { changeColor } from "../features/color/colorSlice";

export default function Redux() {
    const count = useSelector((state) => state.count.value);
    const color = useSelector((state) => state.color.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={() => dispatch(increment())}> + </button>
            <button onClick={() => dispatch(decrement())}> - </button>

            <br />

            color is : <h2 style={{ color }}> {color} </h2>

            <button onClick={() => dispatch(changeColor('blue'))}> blue </button>
            <button onClick={() => dispatch(changeColor('white'))}> white </button>
            <button onClick={() => dispatch(changeColor('orange'))}> orange </button>
        </div>
    );
}
