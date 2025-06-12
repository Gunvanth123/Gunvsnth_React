
# 📘 React Router Notes

---

## 🚀 Introduction: What is React Router?

React Router is a **standard routing library for React**. It allows navigation between different components, changing the browser URL, and keeping UI in sync with the URL.

### ✅ Why use React Router?

- Single Page Application (SPA) routing
- Keeps UI and URL in sync
- Enables dynamic and nested routing
- Handles route parameters and redirection

---

## 📦 Installation and Imports

Install React Router via npm:

```bash
npm install react-router-dom
```

Import core components in your app:

```jsx
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useNavigate
} from 'react-router-dom';
```

---

## 🌐 BrowserRouter, Routes, Route

### `BrowserRouter`

Wraps your entire app to enable routing using browser history.

### `Routes`

Replaces `Switch` in React Router v6. It renders the first matching route.

### `Route`

Defines a path and its corresponding component.

### Example:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 🔗 Link

Used to create navigational links **without reloading** the page.

```jsx
<Link to="/about">Go to About</Link>
```

---

## 🧭 NavLink

Like `Link`, but allows for **active styling**.

```jsx
<NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
  About
</NavLink>
```

---

## 🔀 Difference between Link and NavLink

| Feature     | `Link`               | `NavLink`                      |
|-------------|----------------------|--------------------------------|
| Styling     | No active styles     | Supports active styles         |
| Use Case    | Basic links          | Navigation menus               |

---

## ⭐ Active Links

Use `NavLink` to style the currently active link:

```jsx
<NavLink
  to="/home"
  style={({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  })}
>
  Home
</NavLink>
```

---

## 📦 Params

Used to pass dynamic data via URL.

### Route:

```jsx
<Route path="/user/:id" element={<User />} />
```

### Access in Component:

```jsx
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}
```

---

## 🧭 Navigating Programmatically

Use `useNavigate` hook:

```jsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return <button onClick={goToAbout}>Go to About</button>;
}
```

---

## ✅ Match Route (Replaced by `useMatch` in v6)

To match a specific route pattern:

```jsx
import { useMatch } from 'react-router-dom';

function Component() {
  const match = useMatch("/user/:id");

  return match ? <p>Matched ID: {match.params.id}</p> : <p>No match</p>;
}
```

---

## 🧩 Nested Routes

Define child routes using `<Route>` inside another `<Route>`:

### Example:

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

Use `<Outlet />` to render child routes in parent:

```jsx
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  );
}
```

---

## 🪪 Index Route

Used to show a default child route.

```jsx
<Route path="dashboard" element={<Dashboard />}>
  <Route index element={<DefaultDashboard />} />
</Route>
```

---

## 🔄 Dynamic Routes

Dynamic segments in paths:

```jsx
<Route path="/products/:productId" element={<Product />} />
```

Access:

```jsx
const { productId } = useParams();
```

---

## 🔗 Relative Links

Link relative to the current path:

```jsx
<Link to="settings">Settings</Link> // Relative
<Link to="/dashboard/settings">Settings</Link> // Absolute
```

---

## 🐢 Lazy Loading Routes

Dynamically import route components:

```jsx
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./About'));

<Route
  path="/about"
  element={
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  }
/>
```

---

## 📝 Full Example

```jsx
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useNavigate,
  Outlet
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/user/42">User</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DefaultDashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Outlet />
    </>
  );
}

function DefaultDashboard() {
  return <h3>Welcome to Dashboard</h3>;
}

function Profile() {
  return <h3>User Profile</h3>;
}
```
