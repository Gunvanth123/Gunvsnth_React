import React, { useState } from "react";
import New from "./New";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count + 1 > 20) return;
    setCount(count + 1);
  };
  const decrement = () => {
    if (count - 1 < 0) return;
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="App">
        <h1 className="title">Counter App</h1>
        <h2 className="counter">{count}</h2>
        <button className="button" onClick={increment}>
          Increment
        </button>
        <button className="button" onClick={decrement}>
          Decrement
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>

      <New />
    </>
  );
}

export default App;
