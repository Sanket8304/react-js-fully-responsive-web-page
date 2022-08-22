import styled from "styled-components";

export const NavBarWrapper = styled.div`
  .main-container {
    padding: 10px;
    background-color: #f47327;
    height: 50px;
    // border: ${(props) => (props.data ? "2px solid" : null)};
    padding-inline: 375px;
    display: flex;
    width: auto;
    justify-content: space-between;
  }

  .navbar-title-container {
    border-radius: 3px;
    display: flex;
    align-items: center;
  }

  .web-logo {
    width: 59px;
    height: 41px;
  }

  .navbar-title {
    color: #ffff;
    font-weight: 700;
    font-size: 34px;
    padding-top: 15px;
    font-family: "Roboto";
  }

  .navebar-manu-items {
    display: flex;
    width: 373px;
    justify-content: space-between;
  }

  .navebar-manu-item-text {
    color: #ffff;
    font-family: "Roboto";
  }
`;
