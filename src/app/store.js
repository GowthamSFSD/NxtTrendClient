import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../slice/userSlice";
import cartSlice from "../slice/cartSlice";

export default configureStore({
    reducer : {
        users:userSlice,
        cart:cartSlice
    }
})