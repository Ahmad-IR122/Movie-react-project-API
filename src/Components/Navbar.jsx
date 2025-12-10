import React from "react";
import logo from "../Images/movieLogo.png";
import "../Styles/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar" >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={logo} 
              alt="Movie Logo"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
