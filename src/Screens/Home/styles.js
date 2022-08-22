import styled from "styled-components";

export const HomeWrapper = styled.div`
  .center {
    text-align: center;
  }

  .margin-left {
    margin-right: 15px;
  }

  .margin-top {
    margin-top: 51px;
    margin-bottom: 51px;
  }

  .main-container {
    padding: 10px;
    background-color: #f47327;
    height: 637px;
    // border: ${(props) => (props.data ? "2px solid" : null)};
    padding-inline: 375px;
    display: flex;
    width: auto;
    justify-content: space-between;
    align-items: center;
    overflow: auto;
  }

  .title-text-container {
    align-items: center;
    width: 447px;
    height: 234px;
  }

  .title-text {
    color: #ffff;
    font-weight: 900;
    font-size: 56px;
    font-family: "Roboto";
    text-transform: uppercase;
  }

  .text {
    color: #ffff;
    font-weight: 400;
    font-size: 20px;
    font-family: "Roboto";
    width: 485px;
  }

  .horizontal-image-container {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .store-imag {
    width: 235px;
    height: 70px;
  }

  .image-container {
    display: flex;
    width: 373px;
  }

  .image {
    width: 433px;
    height: 660px;
    position: absolute;
    left: 1070px;
    top: 175px;
  }

  .container {
    padding: 10px;
    background-color: #ffff;
    padding-inline: 375px;
    width: auto;
  }

  .title-text-black {
    color: #000000;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 145px;
  }

  .text-black {
    color: #333333;
    font-weight: 400;
    font-size: 20px;
    font-family: "Roboto";
    margin-top: 21px;
  }

  .about-sub-container {
    margin-top: 61px;
    display: flex;
  }

  .squere-image {
    width: 542px;
    height: 377px;
    border-radius: 20px;
  }

  .text-container {
    margin-left: 54px;
  }

  .midiam-text {
    color: #333333;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
  }

  .small-midim-text {
    color: #333333;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
  }

  .mobile-image {
    width: 380px;
    height: 773px;
  }

  .card-container {
    width: 617px;
    height: 160px;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding-block: 5px;
    padding-inline: 15px;
    margin-top: 20px;
  }

  .imag-10 {
    width: 180px;
    height: 366.16px;
  }

  .imag-8 {
    width: 200px;
    height: 406.84px;
  }

  .imag-6 {
    width: 240px;
    height: 488.21px;
  }
`;
