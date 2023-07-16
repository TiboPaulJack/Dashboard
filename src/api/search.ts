import {axiosInstance} from "./axiosInstance";




export const search = async (search) => {

    try {
        const response = await axiosInstance.get(`/search/${search}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch search:', error);
    }

}