import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name : "color",
    
    initialState : {
        value : "yellow"
    },
    reducers : {
        changeColor(state,actions){
            state.value = actions.payload;
        }
    },
})

export const {changeColor} = colorSlice.actions;

export default colorSlice.reducer;

