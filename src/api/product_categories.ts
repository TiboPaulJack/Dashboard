import {axiosInstance} from "./axiosInstance";
import {store} from "../redux/store";
import {allCategories} from "../redux/reducers/product";

export const getAllCategories = async () => {

    try {
        const response = await axiosInstance.get('/categories');
        store.dispatch(allCategories(response.data));
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }
}