import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../utils/appSlice.jsx'
import searchReducer from "../utils/searchSlice.jsx"

const appStore= configureStore({
    reducer:{
        app:appReducer,
        search:searchReducer
    }
})
export default appStore;