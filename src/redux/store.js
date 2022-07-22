import {userSlice} from "./user";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});
