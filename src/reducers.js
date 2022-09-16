import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    
    cartItem: (typeof window !== 'undefined') ? JSON.parse(localStorage.getItem('item')) : []
      
}
// const intialCartItems = {
//     cartItems: []
// }
export const customeReducer = createReducer(initialState, {
    addToCart: (state, action) => {
        
        var index = state.cartItem.findIndex(x => x.id == action.payload.id);
        index === -1 ? state.cartItem.push( action.payload ) : alert('already Exist in Cart !')
        (typeof window !== 'undefined') ? localStorage.setItem('item', JSON.stringify(state.cartItem)) : ''
    },

    removeFromCart: (state, action) => {
        
        state.cartItem = state.cartItem.filter(function( obj ) {
            return obj.id !== action.payload;
        });
        (typeof window !== 'undefined') ? localStorage.setItem('item', JSON.stringify(state.cartItem)) : ''
    },

    // ClearCart: (state) => {
    //     state.cartItem = [];
    // }

})
