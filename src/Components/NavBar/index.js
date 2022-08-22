import React from "react";

import "./responsive.css";

import { NavBarWrapper } from "./NavBarStyle";

const NavBar = (props) => {
  const data = false;

  return (
    <NavBarWrapper data={data}>
      <div
        className={`${
          props.showTopNavMenu
            ? "main-container"
            : "responsive-navbar-main-container"
        }`}>
        <div
          className={`${
            props.showTopNavMenu
              ? "navbar-title-container"
              : "responsive-navbar-title-container"
          }`}>
          <img
            className="web-logo"
            src={require("../../Assets/Images/logo.png")}
            alt={require("../../Assets/Images/logo.png")}
          />
          <p className="navbar-title">{"Vellis"}</p>
        </div>

        <div
          className={`${
            props.showTopNavMenu
              ? "navebar-manu-items"
              : "responsive-navebar-manu-items"
          }`}>
          <div>
            <p className="navebar-manu-item-text">Home</p>
          </div>
          <div>
            <p className="navebar-manu-item-text">About us</p>
          </div>
          <div>
            <p className="navebar-manu-item-text">Features</p>
          </div>
          <div>
            <p className="navebar-manu-item-text">Download</p>
          </div>
        </div>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;
