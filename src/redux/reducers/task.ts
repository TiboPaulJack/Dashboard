import { createSlice } from '@reduxjs/toolkit';
import {Task} from "../../types";

export interface TaskState {
    tasks: Task[];
    newTask: Task;
    selectedTask: Task;

}

const initialState: TaskState = {
    tasks: [],
    newTask: {
        id: null,
        title: '',
        content: '',
        color: '',
        status: '',
        user_id: null,
        checked: false,
    },
    selectedTask: {} as Task,

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

    },
});

export const {
    setTasks,
    clearTasks,
    setNewTask,
    clearNewTask,
    setSelectedTask,
    clearSelectedTask,


} = taskSlice.actions;

export default taskSlice.reducer;