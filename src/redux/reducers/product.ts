import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from "../../types";

export interface ProductState {
    products : Product[];
    selectedProduct? : Product;
    newProduct : Product;
    categories : string[];
    colors : string[];
    inAddProducts : Product[];
    relatedProducts : Product[];
    quantityPerSize : Record<number, number>;
    filter : number;
    inventoryGroup : boolean;
    isLoading : boolean,
}

const initialState: ProductState = {
    products: [],
    selectedProduct: null,
    newProduct: {
        id: 0,
        name: "",
        category: "",
        sellPrice: 0,
        costPrice: 0,
        color: "",
        color_id: 0,
        size_id: 0,
        category_name: "",
        size: "",
        category_id: 0,
        checked: false,
        isDiscounted: false,
        quantity: null,
        isEdited: false,
        images : [],
        discountType: "",
        discountAmount: null,
        status: "available",
        discountStartDate: null,
        discountEndDate: null,
        ispublished: false,
        publishedStartDate: null,
        publishedEndDate: null,
        description: ""
    },
    relatedProducts: [],
    categories: [],
    colors: [],
    inAddProducts: [],
    quantityPerSize: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    },
    filter: 0,
    inventoryGroup: false,
    isLoading: false,
};

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        allProducts(state, action) {
            state.products = action.payload;
        },
        allCategories(state, action) {
            state.categories = action.payload;
        },
        allColors(state, action) {
            state.colors = action.payload;
        },
        setSelectedProduct(state, action: PayloadAction<Product>) {
            state.selectedProduct = action.payload;
        },
        clearSelectedProduct(state) {
            state.selectedProduct = initialState.selectedProduct;
        },
        setNewProduct(state, action: PayloadAction<Product>) {
                state.newProduct = action.payload;
        },
        clearNewProduct(state) {
            state.newProduct = initialState.newProduct;
        },
        setInAddProducts(state, action: PayloadAction<Product[]>) {
            state.inAddProducts = action.payload;
        },
        clearInAddProducts(state) {
            // @ts-ignore
            state.inAddProducts = state.inAddProducts.filter(item => !item.checked);
        },
        setRelatedProducts(state, action: PayloadAction<Product[]>) {
            state.relatedProducts = action.payload;
        },
        clearRelatedProducts(state) {
            state.relatedProducts = initialState.relatedProducts;
        },
        setQuantityPerSize(state, action: PayloadAction<Record<number, number>>) {
            state.quantityPerSize = action.payload;
        },
        clearQuantityPerSize(state) {
            state.quantityPerSize = initialState.quantityPerSize;
        },
        setFilter(state, action: PayloadAction<number>) {
            state.filter = action.payload;
        },
        clearFilter(state) {
            state.filter = initialState.filter;
        },
        setInventoryGroup(state, action: PayloadAction<boolean>) {
            state.inventoryGroup = action.payload;
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        }


    },
});

export const {
    allProducts,
    setSelectedProduct,
    clearSelectedProduct,
    setNewProduct,
    clearNewProduct,
    allCategories,
    allColors,
    setInAddProducts,
    setQuantityPerSize,
    clearInAddProducts,
    clearQuantityPerSize,
    setRelatedProducts,
    clearRelatedProducts,
    setFilter,
    clearFilter,
    setInventoryGroup,
    setIsLoading


} = ProductSlice.actions;



export default ProductSlice.reducer;