import React from "react";
import logo from "../assets/logo.png";
//const logo = require("../assets/logo.png");

const Header = () => {
  return (
    <header className="center">
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
