import React from "react";
import { Buttons } from "./components/Buttons";
import { Dropdown } from "./components/Dropdown";
import { Inputs } from "./components/Inputs";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Buttons />
      <Inputs />
      <Dropdown />
    </div>
  );
}

export default App;
