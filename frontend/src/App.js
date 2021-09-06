import "./App.css";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  function postHandle() {
    setState(state + 1);
    const url = "http://localhost:3012/";
    const data = { number: state };
    const option = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };
    fetch(url, option);
  }

  function getHandle() {
    const url = "http://localhost:3012/";
    const data = { number: state };
    const option = {
      method: "GET",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };
    fetch(url, option)
      .then((res) => res.json())
      .then((result) => console.log(result));
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
