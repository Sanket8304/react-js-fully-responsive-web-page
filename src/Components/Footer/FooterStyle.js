import styled from "styled-components";

export const FooterWrapper = styled.div`
  .main-container {
    padding: 10px;
    background-color: #f47327;
    height: 80px;
    padding-inline: 275px;
    display: flex;
    width: auto;
    justify-content: space-between;
    align-items: center;
  }

  .footer-title-container {
    border-radius: 3px;
    display: flex;
    align-items: center;
  }

  .web-logo {
    width: 59px;
    height: 41px;
  }

  .footer-title {
    color: #ffff;
    font-weight: 700;
    font-size: 34px;
    padding-top: 15px;
    font-family: "Roboto";
  }

  .footer-manu-items {
    display: flex;
    width: 373px;
    justify-content: space-between;
  }

  .footer-manu-item-text {
    color: #ffff;
    font-family: "Roboto";
  }

  .horizontal-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imag {
    width: 40.03px;
    height: 40.03px;
  }

  .margin-left {
    margin-right: 15px;
  }

  .margin-negative {
    margin-top: -1px;
  }

  .center-aling {
    align-items: center;
  }
`;
