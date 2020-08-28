import React from "react";
import logo from "../../images/logo.jpg";
import cover from "../../images/download.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt=""></img>
      <nav>
        <a href="/courses">My Courses</a>
        <a href="/notification">Notification</a>
        <a href="/logout">Log Out</a>
      </nav>
    </div>
  );
};

export default Header;
