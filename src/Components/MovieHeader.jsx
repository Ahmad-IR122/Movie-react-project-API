import React from "react";
import { Link } from "react-router-dom";
import "../Styles/MovieHeader.css";

const MovieHeader = ({ movieTitle }) => {
  return (
    <div className="movie-header">
      <div className="container d-flex align-items-center gap-2">
        <hr />
        <Link to="/" className="nav-link ">
          Back
        </Link>
        <span className="separator">/</span>
        <h3 className="movie-title m-0">{movieTitle}</h3>
      </div>
    </div>
  );
};

export default MovieHeader;
