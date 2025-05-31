import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
    name:"searchResult",
    initialState:{
        searchResult: []
    },
    reducers:{
        addSearchResult:(state,action)=>{
            state.searchResult=action.payload
        }
    }
})

export const{addSearchResult}= searchResultSlice.actions
export default searchResultSlice.reducer