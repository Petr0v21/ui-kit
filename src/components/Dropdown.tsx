import React from "react";
import styled from "styled-components";
import "../styles/Dropdown.css";

type TriangleProps = {
  opacity?: string;
};

export const DropDown = styled.div`
  background-color: rgb(87, 102, 236);
  min-width: 160px;
  color: white;
  padding: 9px 8px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  margin-right: 5px;
  border: 2px solid white;
  transition: all 0.25s ease;
  label {
    padding-left: 20%;
  }
  &:hover {
    background-color: rgb(104, 117, 235);
    border: 2px solid rgb(49, 62, 179);
  }
  &:hover svg {
    transform: rotate(90deg);
  }
  div {
    margin-top: 11px;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  div p {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  div p:hover {
    background-color: #f1f1f1;
  }
  &:hover div {
    display: block;
  }
`;

export const TriangleDropDown = styled.svg<TriangleProps>`
  margin-left: 5px;
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.opacity ? props.opacity : "")};
`;

export const Dropdown: React.FC = () => {
  return (
    <div className="dropdown">
      <h2>Dropdown</h2>
      <div>
        <DropDown>
          <label>DropDown</label>
          <TriangleDropDown
            width="12"
            height="6"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H15L7.5 8L0 0Z" fill="white" />
          </TriangleDropDown>
          <div className="dropdown-content">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        </DropDown>
      </div>
    </div>
  );
};
