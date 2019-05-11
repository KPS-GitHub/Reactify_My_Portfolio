import React from "react";
import ReactDOM from "react-dom";

import NavBar from "./Components/NavBar/NavBar.js"

import "./styles.css";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
