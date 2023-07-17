import {axiosInstance} from "./axiosInstance";
import {store} from "../redux/store";
import {allCategories} from "../redux/reducers/product";
import {setTasks} from "../redux/reducers/task";
import {Task} from "../types";


export const getTasks = async () => {

    try {
        console.log('fetching tasks')
        const response = await axiosInstance.get('/tasks');
        store.dispatch(setTasks(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const createTask = async (task: any) => {

    try {
        const response = await axiosInstance.post('/task', task);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};


export const updateTask = async (id: number, data: any) => {

    const task : any = {
        title: data.title,
        content: data.content,
        color: data.color,
        status: data.status,
    }

    if(data.user_id) task.user_id = data.user_id;
    if(data.date) task.date = data.date;

    try {
        const response = await axiosInstance.patch(`/task/${id}`, task);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

export const deleteTask = async (id: number) => {

    try {
        const response = await axiosInstance.delete(`/task/${id}`);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};