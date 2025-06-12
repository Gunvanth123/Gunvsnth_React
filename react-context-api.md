# React Props, State, Prop Drilling, Context API - Detailed Notes with Examples

## 📌 1. **Props in React**

### ✅ Definition:

Props (short for **properties**) are special read-only attributes in React that are used to pass data from one component to another, specifically from a parent to a child component. Props help in customizing and reusing components by feeding them dynamic values.

### 💡 Why We Use Them:

* **Component Reusability**: Instead of hardcoding data, we pass props to dynamically configure each component.
* **Data Communication**: Enables **top-down data flow**, i.e., data from parent to child.
* **Modular Code**: Props help in creating modular, flexible UI components.

### 🧪 Example:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Gunvanth" />;
}
```

---

## 📌 2. **State in React**

### ✅ Definition:

**State** is a built-in object in React that stores property values that belong to a component. When the state object changes, the component re-renders. Unlike props, state is local and managed within the component.

### 💡 Why We Use It:

* To track **changing data** over time (e.g., user input, toggles).
* To trigger **re-rendering** based on events or user actions.
* For **component interactivity**.

### 🧪 Example:

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

## 📌 3. **Prop Drilling**

### ✅ Definition:

**Prop Drilling** is the process of passing data from a top-level component to deeply nested components via intermediate components that do not necessarily need the data. This is a side effect of React's top-down data flow.

### 💡 Why It Happens:

React does not allow passing props directly from a parent to a deeply nested child unless it goes through every intermediary component in the hierarchy.

### ⚠️ Why It’s Not Recommended:

* Makes code **verbose** and **less maintainable**.
* Leads to **tight coupling** between components.
* Causes **unnecessary re-renders** in intermediate components.
* Becomes **unscalable** in large applications.

### 🧪 Example:

```jsx
function GrandParent() {
  return <Parent name="Gunvanth" />;
}

function Parent(props) {
  return <Child name={props.name} />;
}

function Child(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

---

## 📌 4. **Context API**

### ✅ Definition:

The **Context API** in React is a built-in way to create global variables that can be shared across the component tree, bypassing prop drilling. It allows state or functions to be accessible in any nested component without passing props manually at every level.

### 💡 Why We Use It:

* To **avoid prop drilling**.
* To share **global state** (e.g., themes, authentication status, cart items).
* To enable **cleaner architecture** and better state management in large applications.

---

## 📌 5. **Context Provider**

### ✅ Explanation:

The **Context Provider** is a component returned by `React.createContext()` that allows consuming components to subscribe to context changes. It wraps part of your app and supplies a value to all its descendants.

### 🧪 Example:

```jsx
const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value={{ name: "Gunvanth" }}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  return <User />;
}

function User() {
  const { name } = React.useContext(UserContext);
  return <h1>Hello, {name}</h1>;
}
```

---

## 📌 6. **useContext Hook**

### ✅ Explanation:

The `useContext` hook is used to access the value passed down by a Context Provider inside any functional component. It simplifies context consumption without having to wrap the component in a Consumer.

### 💡 Benefits:

* Simpler syntax than traditional Consumer components.
* Encourages cleaner and more readable code.

### 🧪 Example:

```jsx
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = React.useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}
```

---

## 📌 7. **Differences between Props and State in React**

| Feature              | Props                                             | State                                                       |
| -------------------- | ------------------------------------------------- | ----------------------------------------------------------- |
| **Definition**       | Props are used to pass data from parent to child. | State is a local data storage managed within the component. |
| **Mutability**       | Immutable (read-only)                             | Mutable (can be updated using setState or useState)         |
| **Access**           | Passed to a component via attributes              | Declared and updated inside the component                   |
| **Usage Purpose**    | To customize and configure components             | To manage dynamic and interactive data                      |
| **Lifecycle**        | Props are set by the parent and do not change     | State can change over the component’s lifecycle             |
| **Example Use Case** | Passing username, product info to child component | Managing form input, counter, UI toggles                    |

---

# 🏭️ React Project: Product Cards + Add to Cart using Props & Context API

## Project Structure:

```
src/
├── App.js
├── Card.js
├── CartContext.js
├── ProductList.js
└── Cart.js
```

### 🔹 `CartContext.js`

```jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const total = cartItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
```

### 🔹 `Card.js`

```jsx
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Card({ name, amount }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white shadow-md p-4 rounded-md m-2 w-64">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">Price: ₹{amount}</p>
      <button
        onClick={() => addToCart({ name, amount })}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
```

### 🔹 `ProductList.js`

```jsx
import React from 'react';
import Card from './Card';

const products = Array.from({ length: 20 }, (_, i) => ({
  name: `Product ${i + 1}`,
  amount: Math.floor(Math.random() * 1000) + 100,
}));

function ProductList() {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product, index) => (
        <Card key={index} name={product.name} amount={product.amount} />
      ))}
    </div>
  );
}

export default ProductList;
```

### 🔹 `Cart.js`

```jsx
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div className="bg-gray-100 p-4 m-4 rounded-md">
      <h2 className="text-xl font-bold mb-2">Cart Items</h2>
      <ul className="list-disc pl-5">
        {cartItems.map((item, index) => (
          <li key={index} className="mb-1">{item.name} - ₹{item.amount}</li>
        ))}
      </ul>
      <h3 className="mt-4 text-lg font-semibold">Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
```

### 🔹 `App.js`

```jsx
import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  return (
    <CartProvider>
      <div className="text-center p-6 bg-blue-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">React Shopping Cart</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
```

---

✅ This project demonstrates usage of:

* **Props** for passing name and amount to `Card`.
* **Context API** for managing global cart state.
* **useContext** to consume context in `Card` and `Cart` components.
* **Tailwind CSS** for responsive, modern styling without writing custom CSS.

