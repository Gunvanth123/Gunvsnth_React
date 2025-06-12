import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productsData from '../../data/products.json';

const initialState = {
  items: [],
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return productsData;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default productsSlice.reducer;