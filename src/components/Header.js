import React from "react";
import "./Header.css";
import * as AiIcons from "react-icons/ai";
import { GiCloak } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import logo from "../images/tomaszew_logo.png";

const Header = ({ toggleBar, isNavShown }) => {
  const burger = (
    <div className={isNavShown ? "burger-hidden" : "burger-existed"}>
      {/* zajebister nmazwy debilu jebany */}
      <FaHamburger onClick={toggleBar} />
    </div>
  );

  return (
    <header className="header">
      {burger}
      {/* <GiCloak className="logo" /> */}
      <img src={logo} alt="" />
      <span className="brand"> zdaj.SE </span>
    </header>
  );
};

export default Header;
