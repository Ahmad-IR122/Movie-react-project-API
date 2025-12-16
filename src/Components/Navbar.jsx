
import { Link, NavLink } from "react-router-dom";
import logo from "../Images/movieLogo.png";
import "../Styles/Navbar.css";
import Search from "./Search";

const Navbar = () => {
  
  return (
    <nav className="navbar-custom">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Movie Logo" className="navbar-logo" />
        </Link>

        <Search/>

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
