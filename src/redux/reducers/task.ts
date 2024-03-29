import { createSlice } from '@reduxjs/toolkit';
import {Task} from "../../types";

export interface TaskState {
    tasks: Task[];
    newTask: Task;
    selectedTask: Task;
    refresh: boolean;
    isLoading : boolean;

}

const initialState: TaskState = {
    tasks: [],
    newTask: {
        id: null,
        title: '',
        content: '',
        color: '',
        status: 'pending',
        date : '',
        user_id: null,
        checked: false,
    },
    selectedTask: {} as Task,
    refresh: false,
    isLoading: false,
};


const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTasks(state, action) {
            state.tasks = action.payload;
        },
        clearTasks(state) {
            state.tasks = [];
        },
        setNewTask(state, action) {
            state.newTask = action.payload;
        },
        clearNewTask(state) {
            state.newTask = initialState.newTask;
        },
        setSelectedTask(state, action) {
            state.selectedTask = action.payload;
        },
        clearSelectedTask(state) {
            state.selectedTask = initialState.selectedTask;
        },
        setRefresh(state, action) {
            state.refresh = action.payload;
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        }


    },
});

export const {
    setTasks,
    clearTasks,
    setNewTask,
    clearNewTask,
    setSelectedTask,
    clearSelectedTask,
    setRefresh,
    setIsLoading,


} = taskSlice.actions;

export default taskSlice.reducer;