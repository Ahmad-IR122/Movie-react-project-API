import React from "react";
import logo from "../Images/movieLogo.png";
import "../Styles/Navbar.css";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar d-flex justify-content-between align-items-center gap-3 ">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Movie Logo" />
          </a>
        </div>
          <Link to="/now-playing" className="nav-link m-0">
            Now Playing
          </Link>
          <Link to="/upcoming" className="nav-link m-0">
            Upcoming
          </Link>
      </nav>
    </div>
  );
};

export default Navbar;
