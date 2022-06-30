import { Bars } from "./components/Bars";
import { Buttons } from "./components/Buttons";
import { Dropdown } from "./components/Dropdown";
import { Inputs } from "./components/Inputs";
import { NavBar } from "./components/NavBar";
import { Select } from "./components/Select";
import { Tags } from "./components/Tags";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Buttons />
      <Inputs />
      <div className="drop">
        <Dropdown />
        <Select />
        <Tags />
      </div>
      <NavBar />
      <Bars />
    </div>
  );
}

export default App;
