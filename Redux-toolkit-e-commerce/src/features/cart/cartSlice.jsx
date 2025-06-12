import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (!existing) {
        state.items.push({ ...item, quantity: 1 });
      } else {
        existing.quantity++;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;