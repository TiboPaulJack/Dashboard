import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';

export interface UserState {
    users: User[];
    selectedUser: User | null;
    newUser: User,
    isLoading : boolean,
    refresh : boolean,
}

const initialState: UserState = {
    users: [],
    selectedUser: null,
    newUser:{
        id: 0,
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        role: '',
        title: '',
        status: '',
        access: '',
    },
    isLoading : false,
    refresh : false,

};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setNewUser(state, action: PayloadAction<User>) {
            state.newUser = action.payload;
        },
        clearNewUser(state) {
            state.newUser = initialState.newUser;
        },
        allUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
        },
        setSelectedUser(state, action: PayloadAction<User>) {
            state.selectedUser = action.payload;
        },
        clearSelectedUser(state) {
            state.selectedUser = initialState.selectedUser;
        },
        removeIdFromSelectedUser: (state) => {
            delete state.selectedUser.id;
        },
        setSelectedUserById(state, action: PayloadAction<number>) {
            state.selectedUser = state.users.find((user) => user.id === action.payload);
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setRefresh(state, action) {
            state.refresh = action.payload;
        }
    },
});

export const {
    setNewUser,
    clearNewUser,
    allUsers,
    setSelectedUser,
    clearSelectedUser,
    removeIdFromSelectedUser,
    setSelectedUserById,
    setIsLoading,
    setRefresh,



} = userSlice.actions;

export default userSlice.reducer;
