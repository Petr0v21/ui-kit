import React, { useState } from "react";
import styled from "styled-components";
import "../styles/Buttons.css";
import "../styles/Inputs.css";
import eyeShow from "../accets/Show.svg";
import eyeHide from "../accets/Hide.svg";
import search from "../accets/Search.svg";
import percent from "../accets/Percent.svg";
import arrowDown from "../accets/ArrowDownBlack.svg";

type InputProps = {
  size?: string;
  design?: string;
  backcolor?: string;
  radiusBorder?: string;
  borderColor?: string;
  contentBefore?: string;
  contentAfter?: string;
  hideArrows?: boolean;
  border?: string;
};

type EmptyInputProps = InputProps & {
  type?: string;
  text?: string;
  changeHandler?: Function;
  min?: string;
  max?: string;
  disable?: boolean;
  eye?: boolean;
  img?: boolean;
  invalid?: boolean;
  link?: string;
  val?: string;
};

const InputStyled = styled.input`
  border-radius: 3px;
  max-width: 480px;
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
  border: ${(props) => props.border ?? "1"}px solid
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
  ${(props) => {
    if (props.hideArrows === true) {
      return `
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }`;
    }
  }}
`;

const InputComponent = styled.div<EmptyInputProps>`
  max-width: ${(props) => (props.type === "percent" ? "80px" : "480px")};
  font-size: 14px;
  ${(props) => {
    switch (props.size) {
      case "small":
        return `
      font-size: 12px;
  `;
      case "medium":
        return `
      font-size: 14px;
`;
      case "large":
        return `
      font-size: 16px;
`;
    }
  }}

  display: flex;
  flex-direction: column-reverse;
  position: relative;
  padding-top: 1.5em;
  label {
    color: #8597a3;
    position: absolute;
    top: 1.5rem;
    transition: 0.25s ease;
  }
  input {
    width: ${(props) => (props.eye || props.img ? "90%" : "100%")};
    border: 0;
    z-index: 1;
    background-color: transparent;
    border-bottom: 2px solid #eee;
    font: inherit;
    // font-size: 1.125rem;
    // padding: 0.25em 1.5em 0.25em 0;
    padding: 0.25em 0;
    &:focus,
    &:valid {
      outline: 0;
      border-bottom-color: ${(props) =>
        props.invalid === true ? "red" : "#6658d3"};
      & + label {
        color: ${(props) => (props.invalid === true ? "red" : "#6658d3")};
        transform: translateY(-1.5rem);
      }
    }

    // &:focus + &:invalid {
    //   outline: 0;
    //   border-bottom-color: red;
    //   & + label {
    //     color: red;
    //     transform: translateY(-1.5rem);
    //   }
    // }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  img {
    position: absolute;
    right: 0.1em;
    cursor: pointer;
    padding: 0.5em 0;
    width: 14px;
    height: 14px;
    // top: 1em;
  }
  ${(props) => {
    switch (props.size) {
      case "small":
        return `
      img {
        width: 12px;
        height: 12px;
      }
  `;
      case "medium":
        return `
        img {
          width: 14px;
          height: 14px;
        }
`;
      case "large":
        return `
        img {
          width: 16px;
          height: 16px;
        }
`;
    }
  }}
`;

export const Input: React.FC<EmptyInputProps> = (props) => {
  const [show, setShow] = useState(false);
  if (props.eye === true) {
    return (
      <InputComponent {...props}>
        <input
          type={show ? "text" : "password"}
          required
          onChange={(event) => console.log(event.target.value)}
          disabled={props.disable ?? false}
        />
        <label>{props.text ?? "Text"}</label>
        <img
          src={show ? eyeShow : eyeHide}
          alt="eye"
          onClick={() => setShow(!show)}
        />
      </InputComponent>
    );
  } else if (props.type === "percent") {
    return (
      <InputComponent {...props}>
        <input
          type="number"
          required
          min="0"
          max="100"
          onChange={(event) => console.log(event.target.value)}
          disabled={props.disable ?? false}
        />
        <label>{props.text ?? "Percent"}</label>
        <img src={percent} alt="Percent" />
      </InputComponent>
    );
  } else if (props.type === "search") {
    return (
      <InputComponent {...props}>
        <input
          type="text"
          required
          onChange={(event) => console.log(event.target.value)}
          disabled={props.disable ?? false}
        />
        <label>{props.text ?? "Search .."}</label>
        <img src={search} alt="Search" onClick={() => console.log("Click")} />
      </InputComponent>
    );
  } else {
    return (
      <InputComponent {...props}>
        <input
          type={props.type ?? "text"}
          required
          onChange={(event) => console.log(event.target.value)}
          min={props.min ?? ""}
          max={props.max ?? ""}
          disabled={props.disable ?? false}
        />
        <label>{props.text ?? "Text"}</label>
      </InputComponent>
    );
  }
};

//props.changeHandler(event) ??

// const InputSearch: React.FC<EmptyInputProps> = (props) => {
//   return (
//     <InputComponent {...props}>
//       <input
//         type="text"
//         required
//         onChange={(event) => console.log(event.target.value)}
//         disabled={props.disable ?? false}
//       />
//       <label>{props.text ?? "Search .."}</label>
//       <img src={search} alt="Search" onClick={() => console.log("Click")} />
//     </InputComponent>
//   );
// };

// const InputPercent: React.FC<EmptyInputProps> = (props) => {
//   return (
//     <InputComponent {...props}>
//       <input
//         type="number"
//         required
//         onChange={(event) => console.log(event.target.value)}
//         disabled={props.disable ?? false}
//       />
//       <label>{props.text ?? "Percent"}</label>
//       <img src={percent} alt="Percent" />
//     </InputComponent>
//   );
// };

const InputDefault = styled.div<EmptyInputProps>`
  max-width: ${(props) => (props.type === "percent" ? "80px" : "400px")};
  font-size: 12px;
  padding: 8px;
  width: 200px;
  ${(props) => {
    switch (props.size) {
      case "small":
        return `
    font-size: 12px;
    padding: 8px;
    width: 200px;
`;
      case "medium":
        return `
    font-size: 14px;
    padding: 10px;
    width: 300px;
`;
      case "large":
        return `
    font-size: 16px;
    padding: 12px;
    width: 400px;
`;
    }
  }}
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border: 1px solid #afb1b6;
  border-radius: 8px;
  &:focus-within {
    border: 1px solid #6658d3;
  }
  input {
    border: 0;
    z-index: 1;
    background-color: transparent;
    font: inherit;
    padding: 0.25em 0;
    &:focus {
      outline: 0;
    }
    &:focus + .Father {
      border: black;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  img {
    cursor: pointer;
    width: 14px;
    height: 14px;
  }
  ${(props) => {
    switch (props.size) {
      case "small":
        return `
    img {
      width: 12px;
      height: 12px;
    }
`;
      case "medium":
        return `
      img {
        width: 14px;
        height: 14px;
      }
`;
      case "large":
        return `
      img {
        width: 16px;
        height: 16px;
      }
`;
    }
  }}
`;

// const changeHandler = (funForValue: Function, value: string) => {
//   funForValue(value);
// }

export const InputDefaultComponent: React.FC<EmptyInputProps> = (props) => {
  const [show, setShow] = useState(false);
  if (props.eye === true) {
    return (
      <InputDefault {...props}>
        <input
          value={props.val ?? undefined}
          type={show ? "text" : "password"}
          required
          onChange={(event) => console.log(event.target.value)}
          disabled={props.disable ?? false}
          placeholder={props.text ?? "Password"}
        />
        <img
          src={show ? eyeShow : eyeHide}
          alt="eye"
          onClick={() => setShow(!show)}
        />
      </InputDefault>
    );
  } else if (props.type === "percent") {
    return (
      <InputDefault {...props}>
        <input
          value={props.val ?? undefined}
          type="number"
          required
          // min="0"
          // max="100"
          onChange={(event) => console.log(event.target.value)}
          disabled={props.disable ?? false}
          placeholder={props.text ?? "Percent"}
        />
        <img src={percent} alt="Percent" />
      </InputDefault>
    );
  } else if (props.type === "search") {
    return (
      <InputDefault {...props}>
        <input
          value={props.val ?? undefined}
          type="text"
          required
          onChange={(event) => console.log(event.target.value)}
          disabled={props.disable ?? false}
          placeholder={props.text ?? "Search .."}
        />
        <img src={search} alt="Search" onClick={() => console.log("Click")} />
      </InputDefault>
    );
  } else {
    if (props.img) {
      return (
        <InputDefault {...props}>
          <input
            value={props.val ?? undefined}
            type={props.type ?? "text"}
            required
            onChange={(event) =>
              props?.changeHandler
                ? props.changeHandler(event.target.value)
                : console.log("")
            }
            min={props.min ?? ""}
            max={props.max ?? ""}
            disabled={props.disable ?? false}
            placeholder={props.text ?? "Text"}
          />
          <img
            src={props.link}
            alt="img"
            onClick={() => console.log("Click")}
          />
        </InputDefault>
      );
    } else {
      return (
        <InputDefault {...props}>
          <input
            value={props.val ?? undefined}
            type={props.type ?? "text"}
            required
            onChange={(event) => console.log(event.target.value)}
            min={props.min ?? ""}
            max={props.max ?? ""}
            disabled={props.disable ?? false}
            placeholder={props.text ?? "Text"}
          />
        </InputDefault>
      );
    }
  }
};

const InputSelectDefault = styled.div<EmptyInputProps>`
  .content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    max-width: 400px;
    font-size: 12px;
    padding: 4px 8px;
    width: 200px;
    ${(props) => {
      switch (props.size) {
        case "small":
          return `
      font-size: 12px;
      padding: 4px 8px ;
      width: 200px;
  `;
        case "medium":
          return `
      font-size: 14px;
      padding: 5px 10px;
      width: 300px;
  `;
        case "large":
          return `
      font-size: 16px;
      padding: 6px 12px;
      width: 400px;
  `;
      }
    }}
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    overflow-y: scroll;
    max-height: 120px;
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .content:active {
    display: block;
  }

  .content p {
    margin: 0;
    padding: 1em 0.5em;
    &:hover {
      background: whitesmoke;
    }
  }

  &:focus-within .content {
    display: block;
  }
`;

const SelectDefault = styled(InputSelectDefault)<EmptyInputProps>`
  input {
    cursor: pointer;
    caret-color: transparent;
  }
  img {
    cursor: auto;
  }
`;

export const SelectDefaultComponet: React.FC<EmptyInputProps> = (props) => {
  const list = ["1345345", "2324234", "3243324", "4234243", "5324", "6234"];
  const [val, setVal] = useState("Label");
  return (
    <SelectDefault>
      <InputDefaultComponent val={val} link={arrowDown} img />
      <div className="content">
        {list.map((arg) => (
          <p onClick={() => setVal(arg)} key={arg}>
            {arg}
          </p>
        ))}
      </div>
    </SelectDefault>
  );
};

export const InputSelect: React.FC<EmptyInputProps> = (props) => {
  const list = ["1345345", "2324234", "3243324", "4234243", "5324", "6234"];
  const [val, setVal] = useState("");
  const changeHandler = (value: string) => {
    setVal(value);
    console.log(val);
  };
  return (
    <InputSelectDefault>
      <InputDefaultComponent
        val={val}
        link={arrowDown}
        img
        changeHandler={changeHandler}
      />
      <div className="content">
        {list
          .filter((arg) => arg.includes(val))
          .map((arg) => (
            <p onClick={() => changeHandler(arg)} key={arg}>
              {arg}
            </p>
          ))}
      </div>
    </InputSelectDefault>
  );
};

export const Inputs: React.FC = (props) => {
  // const [valuePercent, setValuePercent] = useState("0");
  // const changeHandler = (val: string) => {
  //   console.log(val);
  //   let value = val.split("%");
  //   console.log(value);
  //   // let valueNum = Number(value[0]) + Number(value[1]);
  //   // if (val.length - 1 > 3 || val.indexOf("-")) {
  //   // } else {
  //   //   console.log(val);
  //   //   setValuePercent(val + "%");
  //   // }
  // };
  return (
    <div>
      <h2 className="Name">Input</h2>
      <form className="InputsForm">
        <InputAdaption type="text" placeholder="Text"></InputAdaption>
        <InputAdaption
          type="number"
          placeholder="Number"
          // hideArrows={true}
        ></InputAdaption>
        {/* <InputPercent
          value={valuePercent}
          placeholder="Percent"
          onChange={(e) => changeHandler(e.target.value)}
        ></InputPercent> */}
        <InputAdaption design="Inactive" placeholder="Inactive"></InputAdaption>
        <InputAdaption design="Error" placeholder="Error"></InputAdaption>
        <InputAdaption design="Success" placeholder="Success"></InputAdaption>

        <InputAdaption
          design="disable"
          disabled={true}
          placeholder="Disable"
        ></InputAdaption>
      </form>
      <form className="InputsForm">
        {/* <Input invalid={true} /> */}
        <Input />
        <Input type="number" text="Number" />
        <Input type="password" text="Password" eye={true} />
        <Input text="Disable" disable={true} />
        <Input type="search" img={true} />
        <Input type="percent" text="Percent" />
      </form>
      <form className="InputsForm">
        <InputDefaultComponent />
        <InputDefaultComponent type="number" text="Number" />
        <InputDefaultComponent type="password" text="Password" eye />
        <InputDefaultComponent text="Disable" disable />
        <InputDefaultComponent type="search" img />
        {/* <InputDefaultComponent type="percent" text="Percent" img /> */}
        <InputSelect />
      </form>
    </div>
  );
};
