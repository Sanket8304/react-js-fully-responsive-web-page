import React from "react";

import "./responsive.css";

import { FooterWrapper } from "./FooterStyle";

const Footer = (props) => {
  return (
    <FooterWrapper>
      <div
        className={`${
          props.showTopNavMenu
            ? "main-container"
            : "responsive-navbar-main-container"
        }`}>
        <div className="center-aling">
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

          <p className="navebar-manu-item-text margin-negative">
            © 2020 Vellis. All Rights Reserved.
          </p>
        </div>

        <div className="horizontal-image-container margin-top">
          <img
            className="imag margin-left"
            src={require("../../Assets/Images/Clice-web (2)/Subtract.png")}
            alt={require("../../Assets/Images/Clice-web (2)/Subtract.png")}
          />
          <img
            className="imag margin-left"
            src={require("../../Assets/Images/Clice-web (2)/Subtract-1.png")}
            alt={require("../../Assets/Images/Clice-web (2)/Subtract-1.png")}
          />
          <img
            className="imag margin-left"
            src={require("../../Assets/Images/Clice-web (2)/Subtract-2.png")}
            alt={require("../../Assets/Images/Clice-web (2)/Subtract-2.png")}
          />
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
