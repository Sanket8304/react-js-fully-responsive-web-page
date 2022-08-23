import React, { useState, useEffect } from "react";

import "./responsiveHome.css";

import { HomeWrapper } from "./styles";

const Home = (props) => {
  const data = false;

  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  return (
    <HomeWrapper data={data}>
      <div
        className={`${
          width > 1630 ? "main-container" : "responsive-main-container"
        }`}
      >
        <div>
          <div
            className={`${
              width > 1630
                ? "title-text-container"
                : "responsive-title-text-container"
            }`}
          >
            <p
              className={`${
                width > 1630 ? "title-text" : "responsive-title-text"
              }`}
            >{`Make ${"\n"}Your Own Plan\n& Enjoy it`}</p>
          </div>

          <p
            className={`${width > 1630 ? "text" : "responsive-text"}`}
          >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</p>

          <div
            className={`${
              width > 1630
                ? "horizontal-image-container"
                : "responsive-horizontal-image-container"
            }`}
          >
            <img
              className={`${
                width > 1630 ? "store-imag" : "responsive-store-imag"
              } margin-left`}
              src={require("../../Assets/Images/Clice-web (1)/image 2.png")}
              alt={require("../../Assets/Images/Clice-web (1)/image 2.png")}
            />
            <img
              className={`${
                width > 1630 ? "store-imag" : "responsive-store-imag"
              }`}
              src={require("../../Assets/Images/Clice-web (1)/image 3.png")}
              alt={require("../../Assets/Images/Clice-web (1)/image 3.png")}
            />
          </div>
        </div>

        <div className="image-container">
          <img
            className={`${width > 1630 ? "image" : "responsive-image"}`}
            src={require("../../Assets/Images/image 1.png")}
            alt={require("../../Assets/Images/image 1.png")}
          />
        </div>
      </div>

      <div className={`${width > 1790 ? "container" : "responsive-container"}`}>
        <p className="title-text-black">{"About us"}</p>

        <p className="text-black center">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`}</p>

        <div
          className={`${
            width > 1650
              ? "about-sub-container"
              : "responsive-about-sub-container"
          }`}
        >
          <img
            className={`${
              width > 1860 ? "squere-image" : "responsive-squere-image"
            }`}
            src={require("../../Assets/Images/image 4.png")}
            alt={require("../../Assets/Images/image 4.png")}
          />

          <div
            className={`${
              width > 1230 ? "text-container" : "responsive-text-container"
            }`}
          >
            <p className="midiam-text">{`Contrary to popular belief`}</p>

            <p className="small-midim-text">{`It is a long established fact that a reader`}</p>

            <p className="text-black">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.`}</p>

            <p className="small-midim-text">{`It is a long established fact that a reader`}</p>

            <p className="text-black">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking.`}</p>
          </div>
        </div>
      </div>

      <div
        className={`${
          width > 1790 ? "container" : "responsive-container"
        } gray-background`}
      >
        <p className="title-text-black">{"Unique Features"}</p>

        <p className="text-black center">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`}</p>

        <div
          className={`${
            width > 1650
              ? "about-sub-container"
              : "responsive-about-sub-container"
          }`}
        >
          <img
            className={`${
              width > 1650 ? "mobile-image" : "responsive-mobile-image"
            }`}
            src={require("../../Assets/Images/image 6.png")}
            alt={require("../../Assets/Images/image 6.png")}
          />

          <div
            className={`${
              width > 1230 ? "text-container" : "responsive-text-container"
            }`}
          >
            <div
              className={`${
                width > 1650 ? "card-container" : "responsive-card-container"
              }`}
            >
              <p className="midiam-text">{`Innovative Scheduling`}</p>

              <p className="text-black">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking.`}</p>
            </div>

            <div
              className={`${
                width > 1650 ? "card-container" : "responsive-card-container"
              }`}
            >
              <p className="midiam-text">{`Event Collaboration`}</p>

              <p className="text-black">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking.`}</p>
            </div>

            <div
              className={`${
                width > 1650 ? "card-container" : "responsive-card-container"
              }`}
            >
              <p className="midiam-text">{`Communication`}</p>

              <p className="text-black">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking.`}</p>
            </div>

            <div
              className={`${
                width > 1650 ? "card-container" : "responsive-card-container"
              }`}
            >
              <p className="midiam-text">{`Social Networking`}</p>

              <p className="text-black">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking.`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${width > 1790 ? "container" : "responsive-container"}`}>
        <p className="title-text-black">{"App Screenshots"}</p>

        <p className="text-black center">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`}</p>

        <div
          className={`${
            width > 530
              ? "horizontal-image-container"
              : "responsive-horizontal-image-container"
          }`}
        >
          <img
            className={`${
              width > 1630 ? "store-imag" : "responsive-store-imag"
            } margin-left`}
            src={require("../../Assets/Images/Clice-web (1)/image 2.png")}
            alt={require("../../Assets/Images/Clice-web (1)/image 2.png")}
          />
          <img
            className={`${
              width > 1630 ? "store-imag" : "responsive-store-imag"
            }`}
            src={require("../../Assets/Images/Clice-web (1)/image 3.png")}
            alt={require("../../Assets/Images/Clice-web (1)/image 3.png")}
          />
        </div>

        <div
          className={`${
            width > 1230
              ? "horizontal-image-container"
              : "responsive-horizontal-image-container"
          } margin-top`}
        >
          <img
            className={`${
              width > 1230 ? "imag-10" : "responsive-imag-10"
            } margin-left`}
            src={require("../../Assets/Images/Clice-web/image 10.png")}
            alt={require("../../Assets/Images/Clice-web/image 10.png")}
          />
          <img
            className={`${
              width > 1230 ? "imag-8" : "responsive-imag-8"
            } margin-left`}
            src={require("../../Assets/Images/Clice-web/image 8.png")}
            alt={require("../../Assets/Images/Clice-web/image 8.png")}
          />
          <img
            className={`${
              width > 1230 ? "imag-6" : "responsive-imag-6"
            } margin-left`}
            src={require("../../Assets/Images/Clice-web/image 6.png")}
            alt={require("../../Assets/Images/Clice-web/image 6.png")}
          />
          <img
            className={`${
              width > 1230 ? "imag-8" : "responsive-imag-8"
            } margin-left`}
            src={require("../../Assets/Images/Clice-web/image 7.png")}
            alt={require("../../Assets/Images/Clice-web/image 7.png")}
          />
          <img
            className={`${
              width > 1230 ? "imag-10" : "responsive-imag-10"
            } margin-left`}
            src={require("../../Assets/Images/Clice-web/image 9.png")}
            alt={require("../../Assets/Images/Clice-web/image 9.png")}
          />
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
