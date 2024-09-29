import { useState } from "react";
import bookLogo from "/book.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={bookLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
