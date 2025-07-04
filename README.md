# React JS Detailed Notes

---

## **1. Introduction to React JS**

**React JS** is an open-source JavaScript library developed by **Facebook** for building fast and interactive user interfaces, especially for **single-page applications (SPAs)**. It allows developers to build **reusable UI components** and manage the view layer efficiently.

React uses a **component-based architecture**, where each part of the user interface is treated as a component. Components can maintain their own **state** and be composed to create complex user interfaces.

---

## **2. Why Use React Instead of Just HTML, CSS, and JavaScript?**

Traditional HTML, CSS, and JS are good for static pages but become inefficient and harder to manage in dynamic, data-driven applications. React addresses these limitations.

| Feature          | HTML/CSS/JS                 | React                                        |
| ---------------- | --------------------------- | -------------------------------------------- |
| Reusability      | No                          | Yes (Components)                             |
| Code Maintenance | Difficult in large projects | Easy with modular components                 |
| State Management | Manual                      | Built-in with `useState`, `useReducer`, etc. |
| UI Updates       | Manual DOM Manipulation     | Automatic with Virtual DOM                   |
| Performance      | Slower for frequent updates | Fast due to Virtual DOM                      |

---

## **3. Advantages of Using React**

* **Component-Based**: Break UI into independent, reusable pieces.
* **Virtual DOM**: Efficiently updates and renders components.
* **JSX**: Syntax that allows mixing HTML with JavaScript.
* **Unidirectional Data Flow**: Easier debugging and better control.
* **Strong Community Support**: Large ecosystem of libraries and tools.
* **Server-Side Rendering (SSR)**: Supports SSR for SEO optimization.

---

## **4. Setting Up a React Project**
To set up a React project, you can use **Create React App**, which is a comfortable environment for learning React and building single-page applications.
### **Using Create React App**
1. **Install Node.js**: Ensure you have Node.js installed on your machine.
2. **Create a new React app**:
   ```bash
   npx create-react-app my-app
   cd my-app
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```
4. **Open your browser**: Navigate to `http://localhost:3000` to see your React app running.
---
## **5. JSX (JavaScript XML)**
**JSX** is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes it easier to create React elements and components.
### **JSX Example**

```jsx
import React from 'react';
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a JSX example.</p>
    </div>
  );
}
export default App;
```

## Setting a react project using Vite
To set up a React project using **Vite**, which is a modern build tool that offers fast development and optimized production builds, follow these steps:
1. **Install Node.js**: Ensure you have Node.js installed on your machine.
2. **Create a new React app with Vite**:
   ```bash
   npm create vite@latest my-vite-app --template react
   cd my-vite-app
   ```
3. **Install dependencies**:
   ```bash
    npm install
    ```
4. **Start the development server**:
    ```bash
    npm run dev
    ```
5. **Open your browser**: Navigate to the URL provided in the terminal (usually `http://localhost:5173`) to see your React app running.
---

### **JSX Features**
* **HTML-like syntax**: Makes it intuitive to create UI components.
* **JavaScript expressions**: You can embed JavaScript expressions within curly braces `{}`.
* **Attributes**: Similar to HTML attributes, but use camelCase for naming (e.g., `className` instead of `class`).
* **Children**: JSX can contain nested elements, allowing for complex UI structures.
---
## **6. Components in React**
Components are the building blocks of a React application. They can be classified into two types: **Class Components** and **Functional Components**.
### **Class Components**
Class components are ES6 classes that extend `React.Component`. They can hold and manage their own state and lifecycle methods.

```jsx
import React, { Component } from 'react';
class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
export default Welcome;
```
### **Functional Components**
Functional components are simpler and are defined as JavaScript functions. They can also use hooks to manage state and lifecycle.

```jsx
import React from 'react';
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
export default Welcome;
```
---

## **4. Class Components vs Functional Components**

### **Class Component**

```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello Class Component!'
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
export default Welcome;
```

### **Functional Component (with Hooks)**

```jsx
import React, { useState } from 'react';

function Welcome() {
  const [message, setMessage] = useState('Hello Functional Component!');

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
export default Welcome;
```

---

## **5. Constructor, this, and bind in Class Components**

### **Constructor**

* Special method used in class components.
* Called once when the component is created.
* Main purposes:

  * Initialize state
  * Bind event handlers

Example:

```jsx
constructor(props) {
  super(props);
  this.state = { count: 0 };
  this.increment = this.increment.bind(this);
}
```

### **this Keyword**

* Refers to the instance of the class.
* Allows access to state, props, and class methods.

Without binding, `this` inside an event handler like `this.increment` would be `undefined`.

### **bind() Method**

* Ensures `this` in the function refers to the correct context.
* Commonly used in constructors.

Example:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <button onClick={this.increment}>Increment</button>;
  }
}
```

Alternative using arrow functions:

```jsx
increment = () => {
  this.setState({ count: this.state.count + 1 });
};
```

---

## **5. Summary**

* Class Components have a full set of lifecycle methods.
* Functional Components rely on hooks like `useEffect`.
* `constructor`, `this`, and `bind()` are key parts of managing state and methods in class components.

---

## **6. Lifecycle Methods**

# React Lifecycle Methods: Detailed Explanation

React components go through a lifecycle of events:

* Mounting: When the component is being created and inserted into the DOM.
* Updating: When the component is being re-rendered due to changes in state or props.
* Unmounting: When the component is being removed from the DOM.

React provides different lifecycle methods depending on whether you're using **class components** or **functional components**.

---

##  Class Component Lifecycle Methods

### `constructor()`

* **When it's called:** Before the component is mounted.
* **Use case:** Initialize state and bind event handlers.
* **Example:**

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  // ...
}
```

### `static getDerivedStateFromProps(props, state)`

* **When it's called:** Right before `render()` method, both on the initial mount and on updates.
* **Use case:** Sync state to props.
* **Example:**

```js
static getDerivedStateFromProps(props, state) {
  if (props.value !== state.value) {
    return { value: props.value };
  }
  return null;
}
```

### `render()`

* **When it's called:** Every time the component needs to render.
* **Use case:** Must return JSX.

### `componentDidMount()`

* **When it's called:** Once after the initial render.
* **Use case:** API calls, subscriptions.
* **Example:**

```js
componentDidMount() {
  fetchData().then(data => this.setState({ data }));
}
```

### `shouldComponentUpdate(nextProps, nextState)`

* **When it's called:** Before rendering, when new props or state are being received.
* **Use case:** Performance optimization.
* **Example:**

```js
shouldComponentUpdate(nextProps, nextState) {
  return this.state.count !== nextState.count;
}
```

### `getSnapshotBeforeUpdate(prevProps, prevState)`

* **When it's called:** Right before the changes from the virtual DOM are to be reflected in the DOM.
* **Use case:** Capture some information (e.g., scroll position) before it changes.
* **Example:**

```js
getSnapshotBeforeUpdate(prevProps, prevState) {
  return document.querySelector('#scroll-box').scrollTop;
}
```

### `componentDidUpdate(prevProps, prevState, snapshot)`

* **When it's called:** After updates are flushed to the DOM.
* **Use case:** Respond to prop or state changes.

### `componentWillUnmount()`

* **When it's called:** Just before component is removed from the DOM.
* **Use case:** Cleanup tasks like timers or subscriptions.
* **Example:**

```js
componentWillUnmount() {
  clearInterval(this.timer);
}
```

---

##  Functional Components with Hooks

### `useEffect()`

* **Replaces:** `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`
* **Usage:**

```js
useEffect(() => {
  // Code to run on mount or update
  return () => {
    // Cleanup code
  };
}, [dependencies]);
```

* **Empty dependency array:** `[]` = Run only on mount (like `componentDidMount`).
* **With dependencies:** `[value]` = Run on value change (like `componentDidUpdate`).
* **Cleanup function:** Called on unmount or before the next effect runs (like `componentWillUnmount`).

### Example:

```js
import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted or Updated");
    return () => {
      console.log("Cleanup");
    };
  }, [count]);

  return <h1>{count}</h1>;
}
```

---

## Summary Table

| Lifecycle Phase | Class Method            | Functional Equivalent    |
| --------------- | ----------------------- | ------------------------ |
| Mounting        | constructor             | useState                 |
|                 | componentDidMount       | useEffect(() => {}, \[]) |
| Updating        | shouldComponentUpdate   | useMemo/useCallback      |
|                 | componentDidUpdate      | useEffect(\[deps])       |
|                 | getSnapshotBeforeUpdate | useRef/useLayoutEffect   |
| Unmounting      | componentWillUnmount    | useEffect cleanup return |

---

## Deprecated Lifecycle Methods (for historical context)

| Method                      | Status     | Use Instead |
| --------------------------- | ---------- | ----------- |
| componentWillMount()        | Deprecated | useEffect   |
| componentWillReceiveProps() | Deprecated | useEffect   |
| componentWillUpdate()       | Deprecated | useEffect   |

These methods are unsafe and not recommended in newer versions of React.

---

By understanding and using these lifecycle methods and hooks appropriately, you can better control how your components behave during their life in the DOM.

---

## **7. Why Use Functional Components Over Class Components**

* **Simpler syntax** and less boilerplate code.
* **Hooks** bring powerful features like state, context, and lifecycle into functional components.
* Easier to **read**, **test**, and **maintain**.
* Encouraged by React community and future-facing development.

---

## **8. Professional React Project Structure**


# React Project Structure Explained

```
my-app/
├── public/
├── src/
│   ├── assets/        # Images, fonts, etc.
│   ├── components/    # Reusable UI components
│   ├── pages/         # Pages for routing
│   ├── services/      # API logic
│   ├── utils/         # Helper functions
│   ├── App.js
│   ├── index.js
├── .env               # Environment variables
├── package.json       # Project metadata
```

---

## 📁 `public/`

Contains static files that are not processed by Webpack. Mainly includes:
- `index.html` – Root HTML page that loads your React app.
- `favicon.ico` – Browser tab icon.
- `manifest.json` – Used for PWA configurations.

> Files here can be accessed directly via URL like `/favicon.ico`.

---

## 📁 `src/`

Main working directory for your React code. All logic and UI components reside here.

### 📁 `assets/`
Static resources like:
- Images (`.png`, `.jpg`)
- Fonts (`.ttf`, `.woff`)
- Videos, audio

> Keeps media separate from logic and component code.

### 📁 `components/`
Holds **reusable UI elements**, such as:
- Buttons
- Navbars
- Cards
- Modals

> Encourages modular, maintainable UI development.

### 📁 `pages/`
Route-based **full pages** like:
- Home page
- About page
- Contact page

Used with routers to navigate across the app.

### 📁 `services/`
API-related logic:
- `fetch` or `axios` functions
- Authentication logic
- External service configurations

Example:
```js
import axios from 'axios';
export const getUser = () => axios.get('/api/user');
```

### 📁 `utils/`
Utility functions and **helper methods**, like:
- Formatting
- Validation
- Debouncing
- Date or currency conversions

> Keeps business logic separate from UI code.

---

## 📄 `App.js`

- The **root component** of your app.
- Typically holds the layout, routes, and global providers.

Example:
```jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
```

---

## 📄 `index.js`

- **Entry point** of the React app.
- Renders the root `App` component inside `index.html`.

```jsx
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

---

## 📄 `.env`

Environment-specific variables like:
```env
REACT_APP_API_URL=https://api.example.com
```

> Must start with `REACT_APP_` to be accessible in React code via `process.env.REACT_APP_API_URL`.

---

## 📄 `package.json`

Contains metadata and configuration:
- Project name and version
- Scripts (`npm start`, `npm run build`, etc.)
- Dependencies and devDependencies
- Config for linters, formatters, etc.

---

## ✅ Summary

| Folder/File         | Purpose                                                |
|---------------------|--------------------------------------------------------|
| `public/`           | Static HTML and assets                                 |
| `src/assets/`       | Media and font files                                   |
| `src/components/`   | Reusable components                                    |
| `src/pages/`        | Full page views used with routing                      |
| `src/services/`     | API and data fetching logic                            |
| `src/utils/`        | Helper utilities and pure functions                    |
| `src/App.js`        | Root component of the application                      |
| `src/index.js`      | Renders the app into the DOM                           |
| `.env`              | Environment variable configuration                     |
| `package.json`      | Project setup, metadata, and dependency management     |


---

## **9.  How JSX is Compiled Using Babel

### What is JSX?

* JSX (JavaScript XML) is a syntax extension for JavaScript used with React.
* It allows writing HTML-like tags within JavaScript code.
* JSX improves code readability and is easy to write UI components.

**Example JSX Code:**

```jsx
<h1>Hello</h1>
```

### How Babel Compiles JSX

* Browsers do not understand JSX directly.
* **Babel** is a JavaScript compiler that transforms JSX into standard JavaScript that browsers can understand.

**Compiled Output using Babel:**

```js
React.createElement('h1', null, 'Hello');
```

### Breakdown of `React.createElement()`

```js
React.createElement(
  type,        // The HTML tag or React component
  props,       // An object with properties or null
  ...children  // The content inside the element
)
```

### Why Use Babel?

* Babel allows you to use modern JavaScript features and JSX syntax.
* Ensures compatibility across different browsers.
* Converts ES6+ code and JSX into ES5 JavaScript.

**Example JSX Component:**

```jsx
const Greeting = () => <h2>Welcome!</h2>;
```

**Babel Compiles to:**

```js
const Greeting = () => React.createElement('h2', null, 'Welcome!');
```

### Summary:

* JSX simplifies component creation.
* Babel compiles JSX into `React.createElement()` calls.
* Enables modern development while maintaining browser compatibility.


---

## 10. DOM vs Virtual DOM

### DOM (Document Object Model)

* The DOM is a programming interface that represents the structure of an HTML or XML document as a tree of objects.
* Browsers parse HTML to build the DOM.
* Every time the DOM changes, the browser must re-render the affected parts of the page, which is slow.
* Direct manipulation of the DOM can be expensive in terms of performance, especially for frequent UI updates.

### Virtual DOM

* A Virtual DOM (VDOM) is a lightweight JavaScript representation of the real DOM.
* React maintains a virtual DOM to optimize performance.
* When a component's state changes, a new Virtual DOM tree is created.
* React compares the new tree with the previous one using a diffing algorithm.
* Only the changed elements are updated in the real DOM, making updates efficient and fast.

**Benefits of Virtual DOM:**

* Improved performance
* Reduced direct DOM manipulation
* Efficient rendering

---

## 11. Diffing Algorithm and Reconciliation

### Diffing Algorithm

* React’s diffing algorithm compares the previous Virtual DOM with the new one.
* It detects what has changed in the component's output.
* React uses a heuristic approach:

  * Elements with the same type are updated.
  * Elements with different types are replaced.
  * Keys are used to optimize the process in lists.

**Example:**

```jsx
<ul>
  <li key="1">Apple</li>
  <li key="2">Banana</li>
</ul>
```

* React uses `key` to track list items and reduce re-rendering.

### Reconciliation

* Reconciliation is the process of updating the real DOM to reflect changes in the Virtual DOM.
* React uses the diffing results to apply only the necessary changes.
* Helps ensure the UI remains in sync with the component state.

---

## 12. Fragments

### What are React Fragments?

* React Fragments let you return multiple elements from a component without adding extra nodes to the DOM.
* Useful to group children without creating unnecessary wrappers like `<div>`.

**Syntax:**

```jsx
<>
  <h1>Title</h1>
  <p>Description</p>
</>
```

**Or using the full syntax:**

```jsx
<React.Fragment>
  <h1>Title</h1>
  <p>Description</p>
</React.Fragment>
```

**Benefits:**

* Cleaner HTML output
* Prevents layout issues caused by extra divs

**Use Case Example:**

```jsx
function ListItem() {
  return (
    <>
      <dt>Item</dt>
      <dd>Description</dd>
    </>
  );
}
```


---

## 13. Props and State in React

### What are Props?

* **Props** (short for "properties") are used to pass data **from parent to child** components.
* They are **read-only**, meaning a child component **cannot modify** the props it receives.
* Props allow components to be **reusable** and **customizable**.

**Example:**

```jsx
// Parent Component
function App() {
  return <Welcome name="Gunvanth" />;
}

// Child Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### What is State?

* **State** is a built-in object that stores **dynamic data** in a component.
* Unlike props, state is **local to the component** and can be changed using `setState` (class) or `useState` (function).
* State updates **trigger re-renders**.

**Functional Component Example:**

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Class Component Example:**

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
      </div>
    );
  }
}
```

### Props vs State Comparison

| Feature  | Props     | State                |
| -------- | --------- | -------------------- |
| Mutable  | No        | Yes                  |
| Owned by | Parent    | Component itself     |
| Purpose  | Pass data | Manage internal data |

---

### How to Use Props Between Components

You can pass props from a parent component to a child and even render them in deeply nested components.

**Parent to Child Communication:**

```jsx
function App() {
  const user = { name: "Gunvanth", age: 22 };
  return <UserProfile user={user} />;
}

function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
}
```

**Passing Callback as Prop:**

```jsx
function App() {
  const showMessage = () => alert("Button clicked from child!");
  return <ChildComponent onButtonClick={showMessage} />;
}

function ChildComponent({ onButtonClick }) {
  return <button onClick={onButtonClick}>Click Me</button>;
}
```

This is useful for triggering parent functions from a child.

---

### Summary

* **Props**: External, read-only data passed from parent.
* **State**: Internal, mutable data managed by the component.
* Together, they allow components to be dynamic and interactive.


---


## 14. React Hooks - In-depth Explanation with Real-world Examples

Hooks are special functions in React that let you "hook into" React features from functional components. Let's break down each commonly used hook with real-world use cases, detailed explanations, code, and expected output.

---

### **1. useState**

**Purpose:** Adds state to functional components.

**Real-world Use Case:** Tracking a counter or form input.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

**Expected Output:**

```
You clicked 0 times  [Click me]
After clicking: You clicked 1 times, 2 times, etc.
```

---

### **2. useEffect**

**Purpose:** Perform side effects like data fetching, timers, or subscriptions.

**Real-world Use Case:** Timer that starts when the component mounts.

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return <h1>Time: {seconds} seconds</h1>;
}

export default Timer;
```

**Expected Output:**

```
Time: 0 seconds
Time: 1 seconds
Time: 2 seconds ...
```

---

### **3. useContext**

**Purpose:** Access global values provided via React Context API.

**Real-world Use Case:** Managing dark/light theme across app.

```jsx
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <div className={`theme-${theme}`}>Current Theme: {theme}</div>;
}

export default ThemedComponent;
```

**Expected Output:**

```
Current Theme: light (or dark depending on the context value)
```

---

### **4. useReducer**

**Purpose:** Used for complex state logic.

**Real-world Use Case:** Managing count with increment/decrement actions.

```jsx
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default Counter;
```

**Expected Output:**

```
Count: 0 [+] [-] => updates count accordingly
```

---

### **5. useMemo**

**Purpose:** Caches expensive calculations.

**Real-world Use Case:** Prevent recalculation of factorial.

```jsx
import React, { useMemo } from 'react';

function ExpensiveComponent({ num }) {
  const factorial = useMemo(() => {
    const compute = (n) => n === 0 ? 1 : n * compute(n - 1);
    return compute(num);
  }, [num]);

  return <div>Factorial of {num} is {factorial}</div>;
}

export default ExpensiveComponent;
```

**Expected Output:**

```
Factorial of 5 is 120 (and doesn't re-compute unless num changes)
```

---

### **6. useCallback**

**Purpose:** Memoizes functions to prevent unnecessary re-renders.

**Real-world Use Case:** Avoid re-creating handler functions in child components.

```jsx
import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick, children }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>{children}</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}

export default ParentComponent;
```

**Expected Output:**

```
Count: 0 [Increment] => only updates count, button doesn’t re-render unnecessarily
```

---

### **7. useRef**

**Purpose:** Reference DOM elements or persist values across renders.

**Real-world Use Case:** Focusing an input box.

```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
```

**Expected Output:**

```
[Input box] [Focus Input] => clicking the button focuses the input
```

---

### **8. useLayoutEffect**

**Purpose:** Runs synchronously after DOM updates, used for layout measurements.

**Real-world Use Case:** Measure dimensions of a DOM element.

```jsx
import React, { useLayoutEffect, useRef } from 'react';

function LayoutEffectExample() {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    const rect = divRef.current.getBoundingClientRect();
    console.log('Div dimensions:', rect);
  }, []);

  return <div ref={divRef} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>Hello</div>;
}

export default LayoutEffectExample;
```

**Expected Output:**

```
A blue square div saying "Hello"
Console logs: Div dimensions: { width: 100, height: 100, ... }
```

#### These hooks are the building blocks of modern React development. Mastering them allows you to build robust, performant, and clean functional components.
---



## **15. Rencring conditional**
In React, you can render components conditionally based on certain conditions. This is often done using JavaScript expressions within JSX.
### **Using Ternary Operator**
```jsx
import React from 'react';
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
    </div>
  );
}
export default Greeting;
```
### **Using Logical AND Operator**
```jsx
import React from 'react';
function Notification({ message }) {
  return (
    <div>
      {message && <p>{message}</p>} {/* Renders only if message is truthy */}
    </div>
  );
}
export default Notification;
```
### **Using IIFE (Immediately Invoked Function Expression)**
```jsx
import React from 'react';
function UserProfile({ user }) {
  return (
    <div>
      {(() => {
        if (!user) return <p>No user data available</p>;
        return <h1>{user.name}</h1>;
      })()}
    </div>
  );
}
export default UserProfile;
```
### **Using Switch Statement**
```jsx
import React from 'react';
function StatusMessage({ status }) {
  let message;
  switch (status) {
    case 'loading':
      message = <p>Loading...</p>;
      break;
    case 'success':
      message = <p>Data loaded successfully!</p>;
      break;
    case 'error':
      message = <p>Error loading data.</p>;
      break;
    default:
      message = <p>Unknown status.</p>;
  }
  return <div>{message}</div>;
}
export default StatusMessage;
```
### **Using If Statement**
```jsx
import React from 'react';
function UserProfile({ user }) {
  if (!user) {
    return <p>No user data available</p>;
  }
  return <h1>{user.name}</h1>;
}
export default UserProfile;
```
### **Using If-else Statement**
```jsx
import React from 'react';
function UserProfile({ user }) {
  if (!user) {
    return <p>No user data available</p>;
  } else {
    return <h1>{user.name}</h1>;
  }
}
export default UserProfile;
```

## **16. React Best Practices and Performance Optimization**
### **Best Practices**
* **Component Reusability**: Create reusable components to avoid code duplication.
* **State Management**: Use state wisely; lift state up when necessary.
* **Prop Types**: Use `prop-types` to validate props and ensure type safety.
* **Destructuring Props**: Destructure props for cleaner code.
```jsx
import React from 'react';
function UserProfile({ user: { name, age } }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}
export default UserProfile;
```
* **Avoid Inline Functions**: Use `useCallback` to memoize functions passed as props to avoid unnecessary re-renders.
```jsx
import React, { useCallback } from 'react';
function Button({ onClick, children }) {
  console.log('Button rendered');
  return <button onClick={onClick}>{children}</button>;
}
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}
export default ParentComponent;
```

## Performance Optimization
* **Memoization**: Use `React.memo` to prevent unnecessary re-renders of functional components.
```jsx
import React from 'react';
const MemoizedComponent = React.memo(({ value }) => {
  console.log('Rendering:', value);
  return <div>{value}</div>;
});
function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MemoizedComponent value={count} />
    </div>
  );
}
export default ParentComponent;
```
* **Lazy Loading**: Use `React.lazy` and `Suspense` to load components only when needed, reducing initial load time.
```jsx
import React, { Suspense, lazy } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));   
function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
export default App;
```
* **Code Splitting**: Split your code into smaller chunks to improve load times. Use dynamic imports for components that are not needed immediately.
```jsx
import React, { Suspense, lazy } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));
function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
export default App;
```
* **Avoid Unnecessary State Updates**: Use `shouldComponentUpdate` in class components or `React.memo` in functional components to prevent unnecessary re-renders.
```jsx
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
export default Counter;
```
* **Use Pure Components**: Use `React.PureComponent` for class components to automatically implement a shallow comparison of props and state.
```jsx
import React, { PureComponent } from 'react';
class PureCounter extends PureComponent {
  render() {
    return (
      <div>
        <p>Count: {this.props.count}</p>
      </div>
    );
  }
}
export default PureCounter;
```
* **Optimize Context Usage**: Avoid passing large objects through context; instead, pass only the necessary values to minimize re-renders.
```jsx
import React, { createContext, useContext } from 'react';
const ThemeContext = createContext('light');    
function ThemedComponent() {
  const theme = useContext(ThemeContext);
  
  return <div className={`theme-${theme}`}>Current Theme: {theme}</div>;
}
export default ThemedComponent;
```

### Lazy loading: Lazy loading is a technique to load components only when they are needed, which can significantly improve the performance of your React application by reducing the initial load time.
```jsx
import React, { Suspense, lazy } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));
function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
export default App;
```
### Debouncing: Debouncing is a technique to limit the rate at which a function is executed. It is often used in scenarios like search input where you want to wait for the user to stop typing before making an API call.
```jsx
import React, { useState, useEffect } from 'react';

function SearchInput() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <p>Searching for: {debouncedQuery}</p>
    </div>
  );
}
export default SearchInput;
```
### Throttling: Throttling is a technique to ensure that a function is executed at most once in a specified time interval. It is useful for performance optimization in scenarios like scrolling or resizing events.
```jsx
import React, { useState, useEffect } from 'react';
function ThrottledButton() {
  const [count, setCount] = useState(0);
  const [isThrottled, setIsThrottled] = useState(false);

  const handleClick = () => {
    if (!isThrottled) {
      setCount(prevCount => prevCount + 1);
      setIsThrottled(true);
      setTimeout(() => {
        setIsThrottled(false);
      }, 1000); // Throttle for 1 second
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isThrottled}>
        Click Me
      </button>
      <p>Count: {count}</p>
    </div>
  );
}
export default ThrottledButton;
```
### Higher order functions: Higher-order functions are functions that can take other functions as arguments or return a function as a result. They are commonly used in React for event handling, rendering lists, and more.
```jsx
import React from 'react';
function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log('Rendering:', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
const LoggedButton = withLogging(Button);
function App() {
  return (
    <div>
      <LoggedButton onClick={() => console.log('Button clicked!')}>
        Click Me
      </LoggedButton>
    </div>
  );
}
export default App;
```
### Higher order components (HOCs): Higher-order components are functions that take a component and return a new component with additional functionality. They are used for code reuse and enhancing components.
```jsx
import React from 'react';  
function withLoading(WrappedComponent) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}
function UserProfile({ user }) {
  return <div>{user.name}</div>;
}
const UserProfileWithLoading = withLoading(UserProfile);
function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const user = { name: 'John Doe' };

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading
  }, []);

  return (
    <div>
      <UserProfileWithLoading isLoading={isLoading} user={user} />
    </div>
  );
}
export default App;
```

### Prop Drilling: Prop drilling is the process of passing data from a parent component down to child components through props. It can lead to deeply nested components and make code harder to maintain.
```jsx
import React from 'react';
function Grandchild({ message }) {
  return <div>{message}</div>;
}
function Child({ message }) {
  return <Grandchild message={message} />;
}
function Parent() {
  const message = 'Hello from Parent!';
  return <Child message={message} />;
}
export default Parent;
```
### Error Boundaries: Error boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application.
```jsx
import React, { Component } from 'react';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
function BuggyComponent() {
  throw new Error('I crashed!');
}
function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
export default App;
```
---

## 17. React Router: A Complete Guide with Real-World Example

React Router is a powerful library that enables navigation between different components or pages in a React application. It allows your app to behave like a traditional multi-page website while staying within the context of a single-page application (SPA).

---

### 1. **Installing React Router**

To start using React Router, you need to install the `react-router-dom` package:

```bash
npm install react-router-dom
```

---

### 2. **Basic Setup: Router Structure**

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
```

---

### 3. **Creating the Pages**

Each route renders a different component (page). Let's define them one by one.

#### pages/Home.js

```jsx
import React from 'react';

function Home() {
  return <h1>Welcome to Our Website!</h1>;
}

export default Home;
```

#### pages/About.js

```jsx
import React from 'react';

function About() {
  return <h1>About Us</h1>;
}

export default About;
```

#### pages/Services.js

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'SEO Optimization' }
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <Link to={`/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
```

#### pages/ServiceDetail.js

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function ServiceDetail() {
  const { id } = useParams();
  return <h2>Details about service ID: {id}</h2>;
}

export default ServiceDetail;
```

#### pages/Contact.js

```jsx
import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: contact@company.com</p>
    </div>
  );
}

export default Contact;
```

---

### 4. **Nested Route for Service Detail**

Update the `App.js` to include the nested route for `ServiceDetail`.

```jsx
import ServiceDetail from './pages/ServiceDetail';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/services/:id" element={<ServiceDetail />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

---

### 5. **Expected Output**

* Navigating to `/` shows the Home page.
* Navigating to `/about` shows the About page.
* Navigating to `/services` shows a list of services.
* Clicking a service navigates to `/services/:id` and shows that service's details.
* Navigating to `/contact` shows the Contact page.

---

### Summary

* React Router enables client-side routing in a React SPA.
* Use `BrowserRouter`, `Routes`, and `Route` for defining paths.
* Use `Link` for navigation instead of anchor tags.
* Use `useParams` for dynamic routing.
* Keep routes organized by using separate files for each page.

---

## 18. Custom Hooks in React

### ✅ Definition:

**Custom Hooks** are JavaScript functions whose names start with `use` and that may call other hooks. They let you extract and reuse component logic across multiple components, making your code cleaner and more maintainable.

Custom Hooks follow the same rules as regular React Hooks (like `useState`, `useEffect`, etc.).

---

### 🎯 Why Use Custom Hooks?

* To **avoid code duplication** across components.
* To **separate logic** from UI rendering.
* To improve **readability** and **reusability**.
* To **organize** side effects and business logic better.

---

## 🧠 Example: `useWindowWidth` – Track Screen Size

### 🧾 Custom Hook Code:

```jsx
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
```

---

### 📋 How to Use This Hook in a Component:

```jsx
import React from 'react';
import useWindowWidth from './useWindowWidth';

function ResponsiveComponent() {
  const width = useWindowWidth();

  return (
    <div>
      <h1>Current window width: {width}px</h1>
      {width < 768 ? (
        <p>Showing mobile view</p>
      ) : (
        <p>Showing desktop view</p>
      )}
    </div>
  );
}

export default ResponsiveComponent;
```

---

### 💡 Explanation:

* `useWindowWidth` encapsulates the logic for tracking the screen size.
* The component `ResponsiveComponent` uses it to render UI based on the screen size.
* Now, any other component that needs window width can reuse this hook.

---

## 🔁 More Real-World Custom Hooks

### 1. `useOnlineStatus` – Detect if the user is online

```jsx
import { useState, useEffect } from 'react';

function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return online;
}
```

#### Usage:

```jsx
const Status = () => {
  const isOnline = useOnlineStatus();
  return <p>{isOnline ? "You're online" : "You're offline"}</p>;
};
```

---

### 2. `useLocalStorage` – Save state to localStorage

```jsx
import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}
```

#### Usage:

```jsx
const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};
```

---

## 🔚 Summary

| Feature               | Benefit                      |
| --------------------- | ---------------------------- |
| 🔁 Reusability        | Write once, use anywhere     |
| ✨ Clean Code          | Move logic out of components |
| 💥 Better Maintenance | Centralized updates to logic |
| 🧪 Testable           | Easier to write unit tests   |


---

## **19. Redux (State Management)**

Redux is a predictable state container for JavaScript apps.

### **Basic Setup**

```bash
npm install @reduxjs/toolkit react-redux
```

### **Example**

```jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

const store = configureStore({ reducer: counterSlice.reducer });

function Counter() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>+</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

---

## **20. Controlled vs Uncontrolled Components**

### **Controlled Components**

```jsx
<input type="text" value={value} onChange={e => setValue(e.target.value)} />
```

### **Uncontrolled Components**

```jsx
<input type="text" ref={inputRef} />
```

---

## **21. Form Handling with React Hook Form**

```bash
npm install react-hook-form
```

```jsx
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} />
      <input type="submit" />
    </form>
  );
}
```

---

## **22. Testing in React**

### **React Testing Library Example**

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app heading', () => {
  render(<App />);
  expect(screen.getByText(/My App/i)).toBeInTheDocument();
});
```

---

## **23. Portals**

React Portals allow rendering children into a DOM node outside the parent component.

```jsx
import { createPortal } from 'react-dom';
function Modal({ children }) {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root')
  );
}
```

---


## 25. Tailwind CSS Notes

Tailwind CSS is a utility-first CSS framework that allows you to build modern UIs directly in your markup.

### Installation with React (Vite/CRA) ###

### Step 1: Create a new Vite project (optional)
```bash
npm create vite@latest my-project
cd my-project
npm install
```
### Step 2: Install Tailwind CSS and its dependencies
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### This creates two files:

tailwind.config.js

postcss.config.js

### Step 3: Configure your tailwind.config.js
Edit it like this to specify the content paths:

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 4: Import Tailwind in your CSS
Create a CSS file like src/index.css and add the Tailwind directives:
```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Step 5: Import the CSS in your main JS/TS file
In main.js or main.tsx, import the CSS file:
```javascript
import './index.css'
```
### Step 6: Run the dev server
```bash
npm run dev
```
### Step 7: Use Tailwind classes in your HTML
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
```javascript
// App.jsx
import React from 'react';
function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold underline text-blue-600">
        Hello world!
      </h1>
    </div>
  );
}
export default App;
```

### Common Utility Classes

Spacing: p-4, m-2, gap-4

Typography: text-xl, font-bold, uppercase

Flex/Grid: flex, items-center, grid, grid-cols-3

Background: bg-red-500, bg-gradient-to-r

Hover/Focus: hover:bg-blue-700, focus:outline-none

Responsive: md:text-lg, sm:flex-row

Responsive Design

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Responsive columns -->
</div>

### Customizing Theme

Edit tailwind.config.js to customize colors, fonts, spacing, etc.

extend: {
  colors: {
    brand: '#1da1f2',
  }
}

### Using Tailwind with Components

You can combine utility classes with component-based styling using libraries like Tailwind UI, Headless UI, or by composing classes with clsx or classnames.

