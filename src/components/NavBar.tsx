import styled from "styled-components";
import "../styles/NavBar.css";
import { DropDown, TriangleDropDown } from "./Dropdown";
type NavBarProps = {};

const NavBarAdaption = styled.div`
background-color: #2f4154;
width: 100%;
height: 60px;
font-weight: 500;
border-radius: 3px;
display: flex;
align-items: center;
  h1{
    color: white;
  padding: 0 3%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
h1:hover {
  color: rgb(104, 117, 235);
}
label {
  padding: 20px 3%;
  align-content: center;
  color: white;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
label:hover {
  color: rgb(104, 117, 235);
  background-color: #23303f;
}
input {
  margin-left: 25%;
  background-color: #23303f;
  text-decoration: none;
  color: #f1f1f1;
  border-radius: 3px;
  border: 1px solid #23303f;
}
input:focus {
  border: 1px solid rgb(104, 117, 235);
}
} 
`;

const DropDownNavBar = styled(DropDown)`
`;

export const NavBar: React.FC = () => {
  return (
    <div>
      <h2>NavBar</h2>
      <NavBarAdaption>
        <h1>UI</h1>
        <label>Main</label>
        <DropDown>
          <div>
            Dropdown
            <TriangleDropDown
              // className="triangleNavBar"
              width="12"
              height="6"
              viewBox="0 0 15 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H15L7.5 8L0 0Z" fill="white" />
            </TriangleDropDown>
          </div>
          <div className="navBar-dropdown-content">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        </DropDown>
        <label>About Us</label>
        <input type="text" placeholder="Search" className="InputNavBar" />
      </NavBarAdaption>
    </div>
  );
};
