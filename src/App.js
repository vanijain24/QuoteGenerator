// src/App.js
import React from "react";
import Quote from "../src/components/quote";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Quote Generator</h1>
      <Quote />
    </div>
  );
}

export default App;
