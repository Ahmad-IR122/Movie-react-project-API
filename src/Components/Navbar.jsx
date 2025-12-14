import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../Images/movieLogo.png";
import "../Styles/Navbar.css";

const Navbar = () => {

  return (
    <nav className="navbar-custom">
      <div className="container navbar-inner">

        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Movie Logo" className="navbar-logo" />
        </Link>

        <form className="navbar-search" >
          <input
            type="text"
            placeholder="Search movies..."
            
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <div className="nav-links">
          <NavLink
            to="/now-playing"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Now Playing
          </NavLink>

          <NavLink
            to="/upcoming"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Upcoming
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
