import { createReducer } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    
    cartItem: Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : []
      
}

export const customeReducer = createReducer(initialState, {
    addToCart: (state, action) => {      
        var index = state.cartItem.findIndex(x => x.id == action.payload.id);
        if(state.cartItem.length > 0){
            var dioCenter = state.cartItem.findIndex(x => x.dioCenter.label == action.payload.dioCenter.label);
            index === -1 ? dioCenter === -1 ? alert('you can add only one diognostic center at a time !') : state.cartItem.push( action.payload ) : alert('already Exist in Cart !')
        }else{
            index === -1 ? state.cartItem.push( action.payload ) : alert('already Exist in Cart !')
        }
        
        Cookies.set('cart', JSON.stringify(state.cartItem))
    },

    removeFromCart: (state, action) => {
        
        state.cartItem = state.cartItem.filter(function( obj ) {
            return obj.id !== action.payload;
        });
        Cookies.set('cart', JSON.stringify(state.cartItem))
    },

    clearCart: (state) => {
        state.cartItem = []
        Cookies.set('cart', JSON.stringify([]))
    }

})
