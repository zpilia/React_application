import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('http://localhost:4000/products');
    console.log('Fetched products:', response.data);
    return response.data;
});

export const addProduct = createAsyncThunk('products/addProduct', async (newProduct) => {
    const response = await axios.post('http://localhost:4000/products', newProduct);
    console.log('Added product:', response.data);
    return response.data;
});

export const updateProduct = createAsyncThunk('products/updateProduct', async (updatedProduct) => {
    const response = await axios.put(`http://localhost:4000/products/${updatedProduct._id}`, updatedProduct);
    console.log('Updated product:', response.data);
    return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
    await axios.delete(`http://localhost:4000/products/${id}`);
    console.log('Deleted product ID:', id);
    return id;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.items.findIndex((product) => product._id === action.payload._id);
                state.items[index] = action.payload;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.items = state.items.filter((product) => product._id !== action.payload);
            });
    }
});

export default productsSlice.reducer;