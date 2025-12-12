import React from 'react';
import { Link } from 'react-router';
import "../Styles/MovieHeader.css";
const MovieHeader = ({movieTitle}) => {
  return (
    <div className="movie-header d-flex align-items-start text-white gap-2 m-0 p-2" >
      <Link to={"/"}  className="nav-link ">
      <h3>Back</h3></Link>
      <h3> /</h3>
      <h3>{movieTitle}</h3>
    </div>
  );
}

export default MovieHeader;
