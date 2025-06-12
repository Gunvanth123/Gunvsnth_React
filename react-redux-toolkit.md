# 📘 Redux Toolkit - Detailed Notes & Project Guide

## 🧠 What is Redux Toolkit?

Redux Toolkit (RTK) is the official, recommended way to write Redux logic. It provides a powerful abstraction over Redux with simplified configuration and better developer experience.

---

## ✨ Features of Redux Toolkit

* Simplifies Redux setup.
* Comes with utilities like `createSlice`, `configureStore`, and `createAsyncThunk`.
* Reduces boilerplate code.
* Built-in support for Immer.js (immutable updates).
* Good support for TypeScript.

---

## 🏗️ Core APIs

### 🔹 `configureStore()`

Simplifies store creation and automatically combines reducers, applies middleware.

### 🔹 `createSlice()`

Generates actions and reducers automatically.

### 🔹 `createAsyncThunk()`

Handles async logic like fetching data from APIs.

### 🔹 `createEntityAdapter()`

Simplifies handling of normalized state for collections.

---

## 🛍️ Redux Toolkit E-Commerce Project

### 📁 Project Structure

```
src/
├── app/
│   └── store.js
├── features/
│   ├── cart/
│   │   └── cartSlice.js
│   └── products/
│       └── productsSlice.js
├── components/
│   ├── Header.js
│   ├── ProductCard.js
│   └── CartOverlay.js
├── data/
│   └── products.json
├── App.js
└── index.js
```

### 🧩 products.json

```json
[
  {"id": 1, "name": "Product 1", "price": 99.99, "rating": 4.5},
  {"id": 2, "name": "Product 2", "price": 149.99, "rating": 4.0},
  {"id": 3, "name": "Product 3", "price": 59.99, "rating": 4.2},
  ... (up to 20 products)
]
```

### 🧱 store.js

```js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
```

### 📦 productsSlice.js

```js
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
```

### 🛒 cartSlice.js

```js
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
```

### 💳 Header.js

```js
import React from 'react';
import { useSelector } from 'react-redux';

function Header({ onCartClick }) {
  const count = useSelector((state) => state.cart.items.length);

  return (
    <header className="flex justify-between p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Shop</h1>
      <div onClick={onCartClick} className="relative cursor-pointer">
        🛒
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
          {count}
        </span>
      </div>
    </header>
  );
}

export default Header;
```

### 🧾 ProductCard.js

```js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: ⭐ {product.rating}</p>
      <button
        className="bg-blue-600 text-white px-4 py-1 mt-2 rounded"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
```

### 📋 CartOverlay.js

```js
import React from 'react';
import { useSelector } from 'react-redux';

function CartOverlay({ onClose }) {
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-80 relative">
        <button onClick={onClose} className="absolute top-2 right-2">❌</button>
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>
        <ul className="space-y-2 max-h-60 overflow-y-auto">
          {items.map((item) => (
            <li key={item.id} className="border p-2 rounded">
              {item.name} × {item.quantity}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-bold">Subtotal: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartOverlay;
```

### 🧩 App.js

```js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './features/products/productsSlice';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import CartOverlay from './components/CartOverlay';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Header onCartClick={() => setShowCart(true)} />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {showCart && <CartOverlay onClose={() => setShowCart(false)} />}
    </div>
  );
}

export default App;
```

### 🔗 index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### 🎨 Tailwind Setup (index.css)

Make sure to include Tailwind CSS by following [Tailwind's installation guide](https://tailwindcss.com/docs/guides/create-react-app).

---

This project demonstrates full usage of Redux Toolkit with Tailwind CSS and a working cart system. Let me know if you’d like a downloadable `.zip` version or JSON export!
