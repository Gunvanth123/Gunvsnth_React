import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productSlics';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});