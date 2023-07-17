import { createSlice } from '@reduxjs/toolkit';

export interface ConfigState {
    theme: string;
    newUserMode: boolean;
    editUserMode: boolean;
    editProductMode: boolean;
    teamFormOpen: boolean;
    inventoryFocusOpen: boolean;
    searchResults: [];
    tasksFilter: string;

}

const initialState: ConfigState = {
    theme: 'dark',
    newUserMode: false,
    editUserMode: false,
    editProductMode: false,
    teamFormOpen: false,
    inventoryFocusOpen: false,
    searchResults: [],
    tasksFilter: 'pending',
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setDarkTheme(state) {
            state.theme = 'dark';
        },
        setLightTheme(state) {
            state.theme = 'light';
        },
        setEditUserMode(state, action) {
            state.editUserMode = action.payload;
        },
        setNewUserMode(state) {
            state.newUserMode = !state.newUserMode;
        },
        setEditProductMode(state, action) {
            state.editProductMode = action.payload;
        },
        setTeamFormOpen(state, action) {
            state.teamFormOpen = action.payload;
        },
        setInventoryFocusOpen(state, action) {
            state.inventoryFocusOpen = action.payload;
        },
        setSearch(state, action) {
            state.searchResults = action.payload;
        },
        setTasksFilter(state, action) {
            state.tasksFilter = action.payload;
        },
    },
});

export const {
    setDarkTheme,
    setLightTheme,
    setNewUserMode,
    setEditUserMode,
    setTeamFormOpen,
    setInventoryFocusOpen,
    setEditProductMode,
    setSearch,
    setTasksFilter,

} = configSlice.actions;

export default configSlice.reducer;