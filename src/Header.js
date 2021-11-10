import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="nav__menu">
        <div className="logo">
            <h1>WIcode</h1>
        </div>
        <div className="nav__links">
            <span>Home</span>
            <span>About</span>
            <span>Team</span>
            <span>Contact</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
