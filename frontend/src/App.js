import "./App.css";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  function postHandle() {
    const url = "http://localhost:3012/";
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(url, option);
  }

  function getHandle() {
    const url = "http://localhost:3012/";
    fetch(url)
      .then((res) => res.json())
      .then((result) => setState(result));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> {state} </h1>
        <button onClick={postHandle}>Post Handle</button>
        <button onClick={getHandle}>Get Handle</button>
      </header>
    </div>
  );
}

export default App;
