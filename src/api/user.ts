import { store } from '../redux/store';
import {allUsers, setIsLoading} from '../redux/reducers/user';
import {axiosInstance} from "./axiosInstance";



export const getUsers = async () => {
    try {
        store.dispatch(setIsLoading(true))
        const response = await axiosInstance.get('/users');
        await store.dispatch(allUsers(response.data));
        store.dispatch(setIsLoading(false))
    } catch (error) {
        console.error('Failed to fetch users:', error);
    }
};


export const createUser = async (user: any) => {
    try {
        const response = await axiosInstance.post('/user', user);
    } catch (error) {
        console.error('Failed to create user:', error);
    }
}


export const updateUser = async (user: any) => {
    try {
        const response = await axiosInstance.patch(`/user/${user.id}`, user);
    } catch (error) {
        console.error('Failed to update user:', error);
    }
}

export const deleteUser = async (id: number) => {
    try {
        const response = await axiosInstance.delete(`/user/${id}`);
    } catch (error) {
        console.error('Failed to delete user:', error);
    }
}