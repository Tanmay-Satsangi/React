import { createSlice } from "@reduxjs/toolkit";


const cartSlice  = createSlice({
    name: "cart", // name of the slice.
    //Initially what cart slice contain
    initialState: {   
        items: []
    }, 
    // reducer contain, what types of action should be there for the cart like add item, update item, delete item etc in the cart.
    // action can think as API which communicate with the cart.
    reducers: {
        addItem: (state, action) => {
            // Mutating the state
            state.items.push(action.payload)
            console.log(action.payload)
        }, 
        removeItem: (state) => {
            state.items.pop() // It remove the last item of the cart.
        },
        clearCart: (state) => {
            // state = [] will not work because of Immer Libarary. You have to write complete state.items.length = 0. 
            state.items.length = 0 // []
        }
    } 
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;  // Imp point: In the above code, we define reducers (plural), but when exporting, we use reducer (singular) because createSlice combines them into one.
