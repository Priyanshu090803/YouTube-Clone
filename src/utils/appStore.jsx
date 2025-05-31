import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../utils/appSlice.jsx'
import searchReducer from "../utils/searchSlice.jsx"
import searchResultsReducer from "../utils/searchResultSlice.jsx"

const appStore= configureStore({
    reducer:{
        app:appReducer,
        search:searchReducer,
        searchResult:searchResultsReducer
    }
})
export default appStore;