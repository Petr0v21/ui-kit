import React, { useState } from "react";
import "../styles/Select.css";

export const Select: React.FC = (props) => {
  const list = ["1", "2", "3", "4"];
  const [active, setActive] = useState(false);
  const [valueSelect, setvalueSelect] = useState("Default");
  const selectOption = (val: string) => {
    setvalueSelect(val);
    setActive(!active);
  };
  return (
    <div className="Select">
      <h2>Select</h2>
      <div>
        <button
          className={active ? "selectbtn-active" : "selectbtn"}
          onClick={() => setActive(!active)}
        >
          <label className="ChoicedValue">{valueSelect}</label>
          <svg
            className={active ? "triangleSelect-active" : "triangleSelect"}
            width="12"
            height="6"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H15L7.5 8L0 0Z" fill="white" />
          </svg>
        </button>
        <div className={active ? "select-content-active" : "select-content"}>
          <input type="text" className="InputDropDown" />
          {list.map((arg) => (
            <p onClick={() => selectOption(arg)} key={arg}>
              {arg}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
