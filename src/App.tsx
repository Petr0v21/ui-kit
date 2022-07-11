import { useState } from "react";
import { Buttons } from "./components/Buttons";
import { Inputs } from "./components/Inputs";
// import { Dropdown } from "./components/Dropdown";
// import { NavBar } from "./components/NavBar";
// import { Select } from "./components/Select";
// import { Tags } from "./components/Tags";
// import { Bars } from "./components/Bars";
import "./styles/App.css";

function App() {
  const [thema, setThema] = useState("Light");
  return (
    <div className="App">
      <Buttons thema={thema} />
      <Inputs />
      {/* <div className="drop">
        <Dropdown />
        <Select />
        <Tags />
      </div>
      <NavBar />
      <Bars /> */}
    </div>
  );
}

export default App;
