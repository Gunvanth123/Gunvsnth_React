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

## **5. Constructor and "this" in Class Components**

* The `constructor()` is a special method in class components used to **initialize state** and bind methods.
* The `this` keyword refers to the **instance of the component**.

```jsx
constructor(props) {
  super(props);
  this.state = { count: 0 };
  this.increment = this.increment.bind(this);
}
```

---

## **6. Lifecycle Methods**

### **Class Component Lifecycle Methods**

1. **componentDidMount()** – Called once after initial render. Used for API calls.
2. **componentDidUpdate()** – Called after every update. Used to react to state/prop changes.
3. **componentWillUnmount()** – Called just before component is removed. Used for cleanup.

```jsx
class Counter extends Component {
  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmounting");
  }

  render() {
    return <div>Counter</div>;
  }
}
```

### **Functional Component with Hooks (useEffect)**

```jsx
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

## **7. Why Use Functional Components Over Class Components**

* **Simpler syntax** and less boilerplate code.
* **Hooks** bring powerful features like state, context, and lifecycle into functional components.
* Easier to **read**, **test**, and **maintain**.
* Encouraged by React community and future-facing development.

---

## **8. Professional React Project Structure**

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

## **9. How JSX is Compiled Using Babel**

**JSX (JavaScript XML)** is a syntax extension used in React to write HTML-like code inside JavaScript.

### JSX Code:

```jsx
<h1>Hello</h1>
```

### Babel Compiled Code:

```js
React.createElement('h1', null, 'Hello')
```

**Babel** is a JavaScript compiler that converts JSX to standard JavaScript which browsers can understand.

---

## **10. DOM vs Virtual DOM**

### **DOM (Document Object Model)**

* Tree structure representing UI in browser.
* Updating DOM is slow and inefficient for frequent changes.

### **Virtual DOM**

* A lightweight copy of the real DOM kept in memory by React.
* React uses it to detect changes and update only the affected parts of the actual DOM.

**Benefit**: Improved performance and faster rendering.

---

## **11. Diffing Algorithm and Reconciliation**

### **Diffing Algorithm**

* Compares the new Virtual DOM with the previous version.
* Identifies minimal changes required to update the UI.

### **Reconciliation**

* React applies the calculated differences (diffs) to the real DOM.
* Ensures UI stays in sync with the component state.

---

## **12. Fragments**

**React Fragments** allow returning multiple elements from a component without adding extra nodes to the DOM.

```jsx
<>
  <h1>Title</h1>
  <p>Paragraph</p>
</>
```

---

## **13. Props and State**

### **Props (Properties)**

* Passed from **parent to child** components.
* **Read-only**.
* Used to customize or configure components.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### **State**

* Data managed **within a component**.
* Can be updated using `setState` (class) or `useState` (function).

```jsx
const [count, setCount] = useState(0);
```

### **Props vs State Comparison**

| Feature  | Props     | State                |
| -------- | --------- | -------------------- |
| Mutable  | No        | Yes                  |
| Owned by | Parent    | Component itself     |
| Purpose  | Pass data | Manage internal data |

---

This concludes the comprehensive and detailed guide to React JS. Continue practicing by building projects and exploring advanced topics like React Router, Redux, Context API, and testing with Jest/RTL.

## **14. Hooks**
Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8.
### **Common Hooks**
* **useState**: Manages state in functional components.
```jsx
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Counter;
```
* **useEffect**: Performs side effects in functional components, similar to lifecycle methods in class components.
```jsx
import React, { useState, useEffect } from 'react';
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <h1>Time: {seconds} seconds</h1>;
}
export default Timer;
```
* **useContext**: Accesses context values in functional components.
```jsx
import React, { useContext } from 'react';
const ThemeContext = React.createContext('light');
function ThemedComponent() {
  const theme = useContext(ThemeContext);
  
  return <div className={`theme-${theme}`}>Current Theme: {theme}</div>;
}
export default ThemedComponent;
```
* **useReducer**: An alternative to `useState` for managing complex state logic.
```jsx
import React, { useReducer } from 'react';
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
export default Counter;
```
* **useMemo**: Optimizes performance by memoizing expensive calculations.
```jsx
import React, { useMemo } from 'react';
function ExpensiveComponent({ num }) {
  const factorial = useMemo(() => {
    const computeFactorial = n => (n === 0 ? 1 : n * computeFactorial(n - 1));
    return computeFactorial(num);
  }, [num]);

  return <div>Factorial of {num} is {factorial}</div>;
}
export default ExpensiveComponent;
```
* **useCallback**: Returns a memoized callback function, useful for optimizing performance in child components.
```jsx
import React, { useState, useCallback } from 'react';
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
* **useRef**: Provides a way to access DOM elements or store mutable values without causing re-renders.
```jsx
import React, { useRef } from 'react';
function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
export default FocusInput;
```
* **useLayoutEffect**: Similar to `useEffect`, but it runs synchronously after all DOM mutations. Useful for reading layout from the DOM and synchronously re-rendering.
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

## Lazy loading: Lazy loading is a technique to load components only when they are needed, which can significantly improve the performance of your React application by reducing the initial load time.
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
## Debouncing: Debouncing is a technique to limit the rate at which a function is executed. It is often used in scenarios like search input where you want to wait for the user to stop typing before making an API call.
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
## Throttling: Throttling is a technique to ensure that a function is executed at most once in a specified time interval. It is useful for performance optimization in scenarios like scrolling or resizing events.
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
## Higher order functions: Higher-order functions are functions that can take other functions as arguments or return a function as a result. They are commonly used in React for event handling, rendering lists, and more.
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
## Higher order components (HOCs): Higher-order components are functions that take a component and return a new component with additional functionality. They are used for code reuse and enhancing components.
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

## Prop Drilling: Prop drilling is the process of passing data from a parent component down to child components through props. It can lead to deeply nested components and make code harder to maintain.
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
## Error Boundaries: Error boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application.
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
