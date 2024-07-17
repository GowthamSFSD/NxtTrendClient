import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        checkUser: (state, action) => {
            const { username, password } = action.payload;
            return state.some(users => users.username === username && users.password === password);
        }
    }
});

export const selectAllUser = (state) => state.users;
export const { addUser, checkUser } = userSlice.actions;
export default userSlice.reducer;
