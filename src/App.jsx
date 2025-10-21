import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="app">
      <h1>React Counter</h1>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={increment} className="btn increment">+</button>
        <button onClick={decrement} className="btn decrement">-</button>
        <button onClick={reset} className="btn reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
