import {store} from "../redux/store";
import {axiosInstance} from "./axiosInstance";
import {allColors} from "../redux/reducers/product";


export const getAllColors = async () => {

    try {
        const response = await axiosInstance.get('/colors');
        store.dispatch(allColors(response.data));
    } catch (error) {
        console.error('Failed to fetch colors:', error);
    }
}