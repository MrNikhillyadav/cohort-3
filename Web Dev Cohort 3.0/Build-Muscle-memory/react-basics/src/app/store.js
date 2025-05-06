import { configureStore } from "@reduxjs/toolkit";
import { colorSlice } from "../features/color/colorSlice";
import { countSlice } from "../features/color/countSlice";

export const store = configureStore({
    reducer : {
        color : colorSlice.reducer,
        count : countSlice.reducer,
    },
})

