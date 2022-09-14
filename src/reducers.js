import { createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "~/lib/api";

const initialState = {
    cartItem: []
}
const intialCartItems = {
    cartItems: []
}
export const customeReducer = createReducer(initialState, {
    addToCart: (state, action) => {
        state.cartItem.indexOf(action.payload) === -1 ? state.cartItem.push(action.payload) : console.log("This item already exists");
    },

    removeFromCart: (state, action) => {
        state.cartItem = (state.cartItem).filter((item) => item != action.payload)
    },

    ClearCart: (state) => {
        state.cartItem = [];
    }

})

export const getItemsByIds = createReducer(intialCartItems, {
    getCartItemsByIds: (state, action) => {
        let filterIds = action.payload.map((data , index) => `filters[id][$in][${index}]=${data}`)
        const func = async () => {
            let filterEndPoint = filterIds.join('&');
            await axios(`${baseUrl}/scans?${filterEndPoint}`).then(res => state.cartItems = res.data.data).catch((e) => console.log(e))
        }
        func();
    },

})