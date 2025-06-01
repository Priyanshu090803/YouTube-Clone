import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../utils/appSlice.jsx'
import searchReducer from "../utils/searchSlice.jsx"
import searchResultsReducer from "../utils/searchResultSlice.jsx"
import chatReducer from './chatSlice.jsx'

const appStore= configureStore({
    reducer:{
        app:appReducer,
        search:searchReducer,
        searchResult:searchResultsReducer,
        chat:chatReducer
    }
})
export default appStore;