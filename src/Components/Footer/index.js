import React from "react";

import "./responsiveFooter.css";

import { FooterWrapper } from "./FooterStyle";

const Footer = (props) => {
  return (
    <FooterWrapper>
      <div
        className={`${
          props.showTopNavMenu
            ? "main-container"
            : "responsive-footer-main-container"
        }`}
      >
        <div className="center-aling">
          <div
            className={`${
              props.showTopNavMenu
                ? "footer-manu-items"
                : "responsive-footer-manu-items"
            }`}
          >
            <div>
              <p className="footer-manu-item-text">Home</p>
            </div>
            <div>
              <p className="footer-manu-item-text">About us</p>
            </div>
            <div>
              <p className="footer-manu-item-text">Features</p>
            </div>
            <div>
              <p className="footer-manu-item-text">Download</p>
            </div>
          </div>

          <p className="footer-manu-item-text margin-negative">
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
