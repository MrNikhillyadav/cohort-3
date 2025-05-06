import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name : "color",
    initialState : {
        value : "black"
    },
    reducers : {
        changeToBlue(state) {
            state.value = 'blue'
        },
        changeToWhite(state) {
            state.value = "white"
        },
    },
})

export const {changeToBlue,changeToWhite} = colorSlice.actions;

export default colorSlice.reducer;

