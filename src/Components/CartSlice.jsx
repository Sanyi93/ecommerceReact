import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice ({
    name: 'cart',
    initialState,
    //object with "reducer" functions; each key-value pair presents a single reducer
    // where the key is the name of the action and the value is the reducer function
    reducers: {
        //state -> current state of the slice; action -> dispatched action containing the payload
        //checking if the item is already in cart (finding its id)
        //if item already in cart then increase its quantity by 1
        //else add new item of quantity 1 to the cart
        addItemToCart(state, action){
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity+=1;
            }else{
                state.cartItems.push({...action.payload, quantity: 1});
            }
        },
        //updating cartItems by filtering out the item with the ID provided in the action payload
        removeItemFromCart(state, action){
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        //updating cartItems state by setting it to empty array
        clearCart(state){
            state.cartItems = [];
        },
        //first finding the item in the cart by Id
        //if item already in cart then its quantity can be increased by 1
        increaseItemQuantity(state, action){
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload.id);
            if(itemToIncrease){
                itemToIncrease.quantity+=1;
            }
        },
        //decreasing the item quantity in the cart if the item quantity higher than 1
        decreaseItemQuantity(state, action){
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload.id);
            if(itemToDecrease && itemToDecrease.quantity > 1){
                itemToDecrease.quantity-=1;
            }
        }
    }
 
});

const initialState = {
    const cartItems: [],
};

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity
} = CartSlice.actions;

export default CartSlice.reducer;