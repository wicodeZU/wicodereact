import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="nav__menu">
        <div className="logo">
            <h1>WIcode</h1>
        </div>
        <div className="nav__items">
            <Link to='/' className='nav__links'>Home</Link>
            <Link to='/about' className='nav__links'>About</Link>
            <Link to='/team' className='nav__links'>Team</Link>
            <Link to='/contact' className='nav__links'>Contact</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
