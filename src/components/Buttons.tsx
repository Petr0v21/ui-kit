import React from "react";
import styled from "styled-components";
import "../styles/Buttons.css";
import icon from "../accets/Image.png";
import arrow from "../accets/ArrowDown.png";

type ButtonProps = {
  margin?: string;
  design?: string;
  backcolor?: string;
  backcolorHover?: string;
  backcolorActive?: string;
  borderHover?: string;
  borderActive?: string;
  radiusBorder?: string;
  widthMax?: string;
  widthMin?: string;
  fontSize?: string;
  slowed?: string;
  contentBefore?: string;
  contentAfter?: string;
  size?: string;
  spaceBetween?: string;
  dropdown?: string;
};

const FormButtonsSmall = styled.form`
  display: flex;
  justify-content: space-between;
`;

const ButonLink = styled.div`
  max-width: 480px;
  // min-width: 60px;
  // height: 44px;
  display: flex;
  gap: 6px;
  text-align: center;
  align-items: center;
  padding: 12px 16px;
  border-radius: 12px;
  border: 2px solid #ffffff;
  margin: 5px;
  color: white;
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

const Button = styled(ButonLink)<ButtonProps>`
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
  ${(props) => {
    switch (props.size) {
      case "small":
        return `
          gap: 4px;
          padding: 8px 12px;
          font-size: 12px;
          border-radius: 10px;
          img {
            height: 16px;
          }
      `;
      case "medium":
        return `
          gap: 6px;
          padding: 12px 16px;
          font-size: 14px;
          border-radius: 14px;
          img {
            height: 20px;
          }
    `;
      case "large":
        return `
          gap: 6px;
          padding: 16px 20px;
          font-size: 16px;
          border-radius: 16px;
          img {
            height: 24px;
          }
    `;
    }
  }}
  ${(props) => {
    switch (props.dropdown) {
      case "small":
        return `
          gap: 32px;
      `;
      case "medium":
        return `
          gap: 40px;
    `;
      case "large":
        return `
          gap: 48px;
    `;
    }
  }}
  gap: ${(props) => (props.spaceBetween ? props.spaceBetween : "")};
  color: ${(props) => (props.color ? props.color : "whitesmoke")};
  background-color: ${(props) => (props.backcolor ? props.backcolor : "")};
  border-radius: ${(props) => (props.radiusBorder ? props.radiusBorder : "")};
  max-width: ${(props) => (props.widthMax ? props.widthMax : "")};
  min-width: ${(props) => (props.widthMin ? props.widthMin : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  transition: all ${(props) => (props.slowed ? props.slowed : "")}s ease;
  margin: ${(props) => (props.margin ? props.margin : "5px")};
  &:before {
    content: ${(props) => props.contentBefore ?? ""};
  }
  &:after {
    content: ${(props) => props.contentAfter ?? ""};
  }
  &:hover {
    background-color: ${(props) => props.backcolorHover ?? ""};
    border: ${(props) => props.borderActive ?? ""};
  }
  &:active {
    background-color: ${(props) => props.backcolorActive ?? ""};
    border: ${(props) => props.borderActive ?? ""};
  }
`;

const Pills = styled(Button)<ButtonProps>`
  padding: 10px 16px;
  border-radius: 22px;
  ${(props) => {
    switch (props.size) {
      case "small":
        return `
        font-size: 12px;
        padding: 8px 12px;
        border-radius: 20px;
    `;
      case "medium":
        return `
        padding: 10px 16px;
        border-radius: 22px;
        
  `;
      case "large":
        return `
        padding: 12px 20px;
        border-radius: 24px;
  `;
    }
  }}
`;

export const Buttons: React.FC<{ thema?: string }> = (props) => {
  return (
    <div>
      <h2>Buttons</h2>
      <FormButtonsSmall>
        <Button>Label</Button>
        <Button size="small">
          <img src={icon} alt="icon" />
          Label
        </Button>
        <Button size="small" dropdown="small">
          Label
          <img src={arrow} alt="arrow" />
        </Button>
      </FormButtonsSmall>
      <h2>Pills</h2>
      <FormButtonsSmall>
        <Pills>Label</Pills>
        <Pills size="small">
          <img src={icon} alt="icon" />
          Label
        </Pills>
        <Pills size="small" dropdown="small">
          Label
          <img src={arrow} alt="arrow" />
        </Pills>
      </FormButtonsSmall>
    </div>
  );
};
