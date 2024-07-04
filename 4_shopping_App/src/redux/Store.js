import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";


export const store = configureStore({
    reducer:{
        // cart is the name in slice...
        cart:CartSlice
    }
})