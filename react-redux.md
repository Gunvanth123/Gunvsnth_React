# React Redux - Detailed Notes with Examples

## 📌 What is Redux?

Redux is a predictable state management library for JavaScript applications, especially useful with React. It helps manage the global state of your app in a centralized store so components can access and update shared data consistently.

---

## 🧱 Redux Architecture Overview

### 🔄 Key Concepts:

1. **Store**: Holds the whole state tree of the application.
2. **Actions**: Plain JavaScript objects that describe what happened.
3. **Reducers**: Pure functions that take the current state and action, and return a new state.
4. **Dispatch**: A method used to send actions to the store.
5. **Provider**: React-Redux component that makes the Redux store available to the rest of the app.
6. **useSelector**: React hook to access state from the Redux store.
7. **useDispatch**: React hook to dispatch actions.

---

## 🏬 Redux Store

### ✅ Definition:

The **store** is a JavaScript object that holds application state and provides methods to access and update it.

### 🧪 Example:

```js
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
export default store;
```

---

## 🎯 Actions

### ✅ Definition:

Actions are plain JavaScript objects that describe an intention to change the state.

### 🧪 Example:

```js
const increment = {
  type: 'INCREMENT'
};
```

---

## ⚙️ Reducers

### ✅ Definition:

Reducers are pure functions that take the current state and an action as arguments and return a new state.

### 🧪 Example:

```js
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
```

---

## 🚀 useDispatch

### ✅ Definition:

`useDispatch` is a hook provided by React-Redux to dispatch actions to the Redux store.

### 🧪 Example:

```js
import { useDispatch } from 'react-redux';

function Counter() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>
      Increment
    </button>
  );
}
```

---

## 🔍 useSelector

### ✅ Definition:

`useSelector` is a hook that allows you to extract data from the Redux store state.

### 🧪 Example:

```js
import { useSelector } from 'react-redux';

function DisplayCounter() {
  const count = useSelector((state) => state.counter);
  return <h1>Count: {count}</h1>;
}
```

---

## 🌐 Provider in Redux

### ✅ Definition:

`<Provider>` is a React component that makes the Redux store available to any nested components.

### 🧪 Example:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

---

## 🧩 Putting it All Together: Redux Counter Project

### 📁 Folder Structure:

```
src/
├── actions.js
├── reducers.js
├── store.js
├── Counter.js
└── App.js
```

### 🔹 `actions.js`

```js
export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });
```

### 🔹 `reducers.js`

```js
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
```

### 🔹 `store.js`

```js
import { createStore } from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);
export default store;
```

### 🔹 `Counter.js`

```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function Counter() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;
```

### 🔹 `App.js`

```js
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1>Redux Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;
```

### 🔹 `index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

✅ This project covers:

* Creating a Redux store
* Writing reducers and actions
* Using `useDispatch` and `useSelector`
* Wrapping the app with `<Provider>` to provide global state


