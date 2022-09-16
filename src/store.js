import { configureStore } from "@reduxjs/toolkit";
import { customeReducer, getItemsByIds } from "./reducers";

const store = configureStore({
    reducer:{
        custome: customeReducer,
        // getCartItems: getItemsByIds
    }
})

export default store;