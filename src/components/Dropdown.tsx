import React, { useState } from "react";
import "../styles/Dropdown.css";

export const Dropdown: React.FC = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="dropdown">
      <h2>Dropdown</h2>
      <button className="dropbtn" onClick={() => setActive(!active)}>
        Dropdown
      </button>
      <div className={active ? "dropdown-content-active" : "dropdown-content"}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </div>
  );
};
