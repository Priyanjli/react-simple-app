import React from "react";
import { NavBarWreper, DropdownContent } from "./ui";

const NavBar = () => {
  return (
    <>
      <NavBarWreper animated>
        <ul>
          <li>
            Home
            <ul>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
            </ul>
          </li>
          <li>
            Contact
            <ul>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
            </ul>
          </li>
          <li>Address</li>
          <li>
            AboutUs
            <ul>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 1</a>
              </li>
            </ul>
          </li>
        </ul>
      </NavBarWreper>
    </>
  );
};

export default NavBar;
