import "../Styles/Header.css";
import headerBg from "../Images/Header-back-ground-img.png";

const Header = () => {
  return (
    <header
      className="header d-flex text-white"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div className="header-content">
        <h1 className="movie-title">Title</h1>
        <p className="movie-desc">
          This is just a film description to get from the API
        </p>
      </div>
    </header>
  );
};

export default Header;
