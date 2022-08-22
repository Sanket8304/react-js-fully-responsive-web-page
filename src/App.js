import React, { useState, useEffect } from "react";

import "./App.css";

import NavBar from "./Components/NavBar";
import Home from "./Screens/Home";
import Footer from "./Components/Footer";

function App() {
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

  const responsive = {
    showTopNavMenu: width > 1024,
  };

  return (
    <div className="App">
      <NavBar showTopNavMenu={responsive.showTopNavMenu} />

      <Home showTopNavMenu={responsive.showTopNavMenu} />

      <Footer showTopNavMenu={responsive.showTopNavMenu} />
    </div>
  );
}

export default App;
