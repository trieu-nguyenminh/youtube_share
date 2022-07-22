import { createSlice, configureStore } from '@reduxjs/toolkit'

export const LOGGED_USER_KEY = 'LOGGED_USER';

export const userSlice = createSlice({
    name: 'user',
    initialState: () => {
        let data = window.localStorage.getItem(LOGGED_USER_KEY);
        return {
            username: data,
        }
    },
    reducers: {
        saveUser: (state, action) => {

            let {username} = action.payload;

            window.localStorage.setItem(LOGGED_USER_KEY, username);

            return {
                username
            };
        },
        resetUser: state => {
            window.localStorage.removeItem(LOGGED_USER_KEY);
            return {};
        }
    }
})

export const { saveUser, resetUser } = userSlice.actions;
