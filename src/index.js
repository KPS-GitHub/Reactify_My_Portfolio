import React from "react";
import ReactDOM from "react-dom";

import Header from "./Components/Header/Header.js"

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
