import React from "react";
import "../styles/Buttons.css";

export const Buttons: React.FC = (props) => {
  return (
    <div>
      <h2>Buttons</h2>
      <form className="formButtonsSmall">
        <div className="successButtonLink">SuccessButton</div>
        <div className="warningButtonLink">WarningButton</div>
        <div className="dangerButtonLink">DangerButton</div>
        <div className="defaultButtonLink">DefaultButton</div>
      </form>
    </div>
  );
};
