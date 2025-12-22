import { Link, NavLink } from "react-router-dom";
import logo from "../Images/movieLogo.png";
import "../Styles/Navbar.css";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container navbar-inner">
        
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Movie Logo" className="navbar-logo" />
        </Link>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <Search  />

          <div className="nav-links ms-auto">
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
      </div>
    </nav>
  );
};

export default Navbar;
