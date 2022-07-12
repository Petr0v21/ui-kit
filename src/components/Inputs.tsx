import React from "react";
import styled from "styled-components";
import "../styles/Buttons.css";
import "../styles/Inputs.css";

type InputProps = {
  design?: string;
  backcolor?: string;
  radiusBorder?: string;
  borderColor?: string;
  contentBefore?: string;
  contentAfter?: string;
};

const InputStyled = styled.input`
  border-radius: 3px;
  font-size: 12px;
  padding: 8px 12px;
  outline: none;
  border: 1px solid rgb(161, 161, 161);
  &:focus {
    border: 1px solid rgb(87, 102, 236);
  }
`;

const SelectStyled = styled.select`
  border-radius: 3px;
  font-size: 12px;
  padding: 8px 12px;
  outline: none;
  border: 1px solid rgb(161, 161, 161);
  &:focus {
    border: 1px solid rgb(87, 102, 236);
  }
`;

const InputAdaption = styled(InputStyled)<InputProps>`
  background-color: ${(props) => (props.backcolor ? props.backcolor : "")};
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : "rgb(161, 161, 161)")};
  ${(props) => {
    switch (props.design) {
      case "Inactive":
        return `
        border: 1px solid rgb(161, 161, 161);
        &:focus { 
          border: 1px solid rgb(87, 102, 236);
        }
    `;
      case "Error":
        return `
      border: 1px solid red;
      &::placeholder { 
        color: red;
      }
  `;
      case "Success":
        return `
      border: 1px solid #4caf50;
      &::placeholder { 
        color: #4caf50;
      }
  `;
      case "disable":
        return `
      border: 1px solid rgb(161, 161, 161);
      background-color: #f4f6f6;
      color: #d5dbdb;
      }
`;
    }
  }}
  &:before {
    content: ${(props) => props.contentBefore ?? "%"};
  }
  &:after {
    // content: ${(props) => props.contentAfter ?? "%"};
    content: "%";
  }
`;

export const Inputs: React.FC = (props) => {
  return (
    <div>
      <h2 className="Name">Inputs</h2>
      <form className="InputsForm">
        <InputAdaption type="number" placeholder="Number"></InputAdaption>
        <InputAdaption type="text" placeholder="Text"></InputAdaption>
        <InputAdaption
          type="number"
          min="0"
          max="100"
          placeholder="Percent"
        ></InputAdaption>
        {/* <InputAdaption design="Inactive" placeholder="Inactive"></InputAdaption>
        <InputAdaption design="Error" placeholder="Error"></InputAdaption>
        <InputAdaption design="Success" placeholder="Success"></InputAdaption> */}
        <SelectStyled placeholder="Select"></SelectStyled>
        <InputAdaption
          design="disable"
          disabled={true}
          placeholder="Disable"
        ></InputAdaption>
      </form>
    </div>
  );
};
