import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        message:[]    // initial m message mai kxni hoga
    },
    reducers:{
        addmessage:(state,action)=>{
            state.message.splice(LIVE_CHAT,1)        // if we add 20 message , when i add 1 message then remove 1 message
            state.message.unshift(action.payload)   // insert new element at the start of array. wrna new element piche add hote h
        }
    }
})
export const {addmessage} = chatSlice.actions
export default chatSlice.reducer