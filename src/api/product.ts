import {axiosInstance} from "./axiosInstance";
import {store} from "../redux/store";
import {allProducts, setIsLoading} from '../redux/reducers/product';
import {Product} from "../types";


export const getAllProducts = async () => {

    try {
        store.dispatch(setIsLoading(true))
        const response = await axiosInstance.get('/products');
        await  store.dispatch(allProducts(response.data));
        store.dispatch(setIsLoading(false))
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }
}


export const createProduct = async (product: any) => {

    const newProduct = {
        name: product.name,
        product_category_id: product.category,
        description: product.description,
        sellPrice: product.sellPrice,
        costPrice: product.costPrice,
        quantity: product.quantity,
        product_color_id: product.color,
        product_size_id: product.size,
        status: "available"
    }


    try {
        const response = await axiosInstance.post('/product', newProduct);
    } catch (error) {
        console.error('Failed to create product:', error);
    }
}

export const updateProduct = async (id: number, product: Product) => {

    const data = {
        name: product.name,
        product_category_id: product.category_id,
        description: product.description,
        sellPrice: product.sellPrice,
        costPrice: product.costPrice,
        quantity: product.quantity,
        product_color_id: product.color_id,
        product_size_id: product.size_id,
        status: "available"
    }

    try {
        await axiosInstance.patch(`/product/${id}`, data);
    } catch (error) {
        console.error('Failed to update product:', error);
    }
}


export const deleteProduct = async (id: number) => {

    try {
        await axiosInstance.delete(`/product/${id}`);
    } catch (error) {
        console.error('Failed to delete product:', error);
    }
}

