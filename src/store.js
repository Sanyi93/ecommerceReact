import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice.jsx';

const store = configureStore({
    reducer: {
        //key represents a slice state, value represents the reducer function
        //cart= Slice state, cartReducer=function
        cart: cartReducer,
    }
});

export default store;