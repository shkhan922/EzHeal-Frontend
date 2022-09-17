import { createReducer } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    
    cartItem: Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : []
      
}

export const customeReducer = createReducer(initialState, {
    addToCart: (state, action) => {      
        var index = state.cartItem.findIndex(x => x.id == action.payload.id);
        index === -1 ? state.cartItem.push( action.payload ) : alert('already Exist in Cart !')
        Cookies.set('cart', JSON.stringify(state.cartItem))
    },

    removeFromCart: (state, action) => {
        
        state.cartItem = state.cartItem.filter(function( obj ) {
            return obj.id !== action.payload;
        });
        Cookies.set('cart', JSON.stringify(state.cartItem))
    },

    // ClearCart: (state) => {
    //     state.cartItem = [];
    // }

})
