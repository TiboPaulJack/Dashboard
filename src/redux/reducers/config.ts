import { createSlice } from '@reduxjs/toolkit';

export interface ConfigState {
    nightMode: boolean;
    newUserMode: boolean;
    editUserMode: boolean;
    editProductMode: boolean;
    teamFormOpen: boolean;
    inventoryFocusOpen: boolean;
    searchResults: [];
    tasksFilter: string;
    isSidebarOpen : boolean,
    search: string;
}




const initialState: ConfigState = {
    nightMode: null,
    newUserMode: false,
    editUserMode: false,
    editProductMode: false,
    teamFormOpen: false,
    inventoryFocusOpen: false,
    searchResults: [],
    tasksFilter: 'pending',
    isSidebarOpen: false,
    search: '',
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setNightMode(state, action) {
            if(action.payload === true) {
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
            state.nightMode = action.payload;
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
        setIsSidebarOpen(state, action) {
            state.isSidebarOpen = action.payload;
        },
        setSearchValue(state, action) {
            state.search = action.payload;
        }
    },
});

export const {
    setNightMode,
    setNewUserMode,
    setEditUserMode,
    setTeamFormOpen,
    setInventoryFocusOpen,
    setEditProductMode,
    setSearch,
    setTasksFilter,
    setIsSidebarOpen,
    setSearchValue,


} = configSlice.actions;

export default configSlice.reducer;
