import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const triggerAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 200);
  };

  const increase = () => {
    setCount(count + 1);
    triggerAnimation();
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      triggerAnimation();
    }
  };

  const reset = () => {
    setCount(0);
    triggerAnimation();
  };

  return (
    <div className="container">
      <div className="glass-card">
        <h1 className="title">✨ Advanced Counter App</h1>
        <p className="subtitle">React JS + Modern UI</p>

        <div className={`count-box ${animate ? "pop" : ""}`}>
          <h2 className={count % 2 === 0 ? "count even" : "count odd"}>
            {count}
          </h2>
        </div>

        <div className="button-group">
          <button className="btn increase" onClick={increase}>
            Increase
          </button>

          <button
            className="btn decrease"
            onClick={decrease}
            disabled={count === 0}
          >
            Decrease
          </button>

          <button className="btn reset" onClick={reset}>
            Reset
          </button>
        </div>

        <p className="note">Counter 0 पेक्षा खाली जाणार नाही.</p>
      </div>
    </div>
  );
}

export default App;