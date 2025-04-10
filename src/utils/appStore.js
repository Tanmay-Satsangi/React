import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // If there are multiple reducer then all that reducer comes inside that below reducer.
    reducer: {
        cart: cartReducer
    }
});

export default appStore;
