import React from "react";
import "../styles/Buttons.css";
import "../styles/Inputs.css";

export const Inputs: React.FC = (props) => {
  return (
    <div>
      <h2 className="Name">Inputs</h2>
      <form className="InputsForm">
        <input type="text" className="Inactive" placeholder="Inactive" />
        <input type="text" className="Error" placeholder="Error" />
        <input type="text" className="Success" placeholder="Success" />
        <input
          type="text"
          className="Disable"
          placeholder="Disable"
          disabled={true}
        />
      </form>
    </div>
  );
};
