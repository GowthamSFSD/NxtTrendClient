import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name :"cart",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removerProduct:(state,action)=>{
            const index = state.findIndex(product => product.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }

    }
}) 

export const selectAllCart = (state) => state.cart;
export const {addProduct,removerProduct} = cartSlice.actions;
export default cartSlice.reducer;