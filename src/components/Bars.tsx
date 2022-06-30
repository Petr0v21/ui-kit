import React, { useState } from "react";
import styled from "styled-components";
import "../styles/Bars.css";

interface BarProps {
  width: string;
  backcolor: string | null;
}

const FonBar = styled.div`
  display: flex;
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 3px;
`;

const FilledBar = styled.div<BarProps>`
  width: ${(props) => props.width};
  height: 100%;
  background-color: ${(props) =>
    props.backcolor === "" ? "rgb(104, 117, 235)" : props.backcolor};
  border-radius: 0px;
  &:hover {
    cursor: pointer;
  }
`;

// &::-webkit-slider-thumb {
//   background: rgb(104, 117, 235);
//   border: 2px solid black;
// }
//
// &:focus::-webkit-slider-runnable-track {
//   background: rgb(87, 102, 236);
// }
// &::-moz-range-track {
//   width: 100%;
//   height: 10px;
//   cursor: pointer;
//   background: black;
//   border-radius: 1.3px;
//   border: 0.2px solid #;
// }
// width: 75%;
// padding: 0px;
// &::-webkit-slider-runnable-track {
//   height: 8px;
//   width: 100%;
//   cursor: pointer;
//   background: rgb(104, 117, 235);
//   border-radius: 3px;
//   border: 0.2px solid rgb(104, 117, 235);
// }

const Slider = styled.input`
  margin-top: 8px;
  width: 75%;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  height: 2px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 1px;
  padding-right: 1px;
  background-color: rgb(104, 117, 235);
`;

const ValueSlider = styled.label`
  margin-right: 8%;
`;

export const Bars: React.FC = () => {
  const [value, setValue] = useState("50");

  const handleOnChange = (val: string) => {
    setValue(val);
  };

  return (
    <div className="Bars">
      <h2>Progress bars and Sliders</h2>
      <div>
        <FonBar>
          <FilledBar width="40%" backcolor="" />
        </FonBar>
      </div>
      <div>
        <FonBar>
          <FilledBar width="50%" backcolor="" />
          <FilledBar width="10%" backcolor="orange" />
          <FilledBar width="5%" backcolor="gold" />
        </FonBar>
      </div>
      <div>
        <Slider
          type="range"
          min="0"
          max="100"
          value={value}
          className="slider"
          onChange={(event) => handleOnChange(event.target.value)}
        />
        <ValueSlider>{value}</ValueSlider>
      </div>
    </div>
  );
};
