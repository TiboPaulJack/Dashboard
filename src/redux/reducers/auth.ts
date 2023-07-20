import { createSlice } from '@reduxjs/toolkit';


export interface AuthState {
    isLogged: boolean;
    isLoading: boolean;
    isPasswordLost: boolean;
}

const initialState: AuthState = {
    isLogged: false,
    isLoading: false,
    isPasswordLost: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn(state) {
            state.isLogged = true;
        },
        logOut(state) {
            state.isLogged = false;
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setIsPasswordLost(state, action) {
            state.isPasswordLost = action.payload;
        },

    },
});

export const {
    logIn,
    logOut,
    setIsLoading,
    setIsPasswordLost,


} = authSlice.actions;

export default authSlice.reducer;
