import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../Images/movieLogo.png";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const searchValue = encodeURIComponent(searchTerm.trim());
    if (searchValue) {
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchValue}&page=1`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          console.log("Search Results:", data.results);
        });
    }
  }, [searchTerm, api_key]);

  function handleFormSubmit(e) {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  }

  function handleSubmitQuery(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <nav className="navbar-custom">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Movie Logo" className="navbar-logo" />
        </Link>

        <form className="navbar-search" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSubmitQuery}
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
