import React from "react";
import styled from "styled-components";
import "../styles/Buttons.css";

type ButtonProps = {
  design?: string;
  backcolor?: string;
  radiusBorder?: string;
  widthMax?: string;
  widthMin?: string;
  fontSize?: string;
  slowed?: string;
};

const FormButtonsSmall = styled.form`
  display: flex;
  justify-content: space-between;
`;

const ButonLink = styled.div`
  max-width: 300px;
  min-width: 150px;
  text-align: center;
  padding: 12px 14px;
  border-radius: 8px;
  border: 2px solid #ffffff;
  margin: 5px;
  color: whitesmoke;
  cursor: pointer;
  font-size: 14px;
  background-color: #bdc3c7;
  transition: all 0.25s ease;
  &:hover {
    background-color: #dddddd;
  }
  &:active {
    background-color: #555555;
    border: 2px solid #bdc3c7;
  }
`;

const ButtonAdaption = styled(ButonLink)<ButtonProps>`
  ${(props) => {
    switch (props.design) {
      case "success":
        return `
      background-color: rgb(87, 102, 236);
      &:hover {
        background-color: rgb(104, 117, 235);
      }
      &:active {
        background-color: rgb(49, 62, 179);
        border: 2px solid rgb(87, 102, 236);
      }
      `;
      case "warning":
        return `
      background-color: #f1c40f;
      &:hover {
        background-color: #ffd900;
      }
      &:active {
        background-color: #b89d31;
        border: 2px solid #f1c40f;
      }
    `;
      case "danger":
        return `
      background-color: #e74c3c;
      &:hover {
        background-color: #e27777;
      }
      &:active {
        background-color: #7e2a1b;
        border: 2px solid #e74c3c;
      }
    `;
    }
  }}
  color: ${(props) => (props.color ? props.color : "whitesmoke")};
  background-color: ${(props) => (props.backcolor ? props.backcolor : "")};
  border-radius: ${(props) => (props.radiusBorder ? props.radiusBorder : "")};
  max-width: ${(props) => (props.widthMax ? props.widthMax : "")};
  min-width: ${(props) => (props.widthMin ? props.widthMin : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  transition: all ${(props) => (props.slowed ? props.slowed : "")}s ease;
`;

export const Buttons: React.FC = (props) => {
  return (
    <div>
      <h2>Buttons</h2>
      <FormButtonsSmall>
        <ButtonAdaption design="success">SuccessButton</ButtonAdaption>
        <ButtonAdaption design="warning">WarningButton</ButtonAdaption>
        <ButtonAdaption design="danger">DangerButton</ButtonAdaption>
        <ButtonAdaption color="black" backcolor="">
          Adaption
        </ButtonAdaption>
      </FormButtonsSmall>
    </div>
  );
};
