import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";

const api = "https://fakestoreapi.com/products"


export interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    image: string;
    title: string;
    price: number;
    description: string;
    rating:Rating;
}

const initialState ={
    products: [] as Product [],
}

export const featchProducts = createAsyncThunk('products/featchProducts', async() => {
    const response = await axios.get<Product[]>(api)
    return response.data;
})


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // The below types define the return type of the action a a product []
        builder.addCase(featchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        })
    }

})

export default productSlice.reducer;