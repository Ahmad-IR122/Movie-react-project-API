import React from "react";
import "./../Styles/SearchResultList.css";
import { Link } from "react-router-dom";
const SearchResultList = ({ results, onSelect }) => {
  return (
    <div className="search-dropdown">
      {results.map((movie) => (
        <div key={movie.id} className="search-item">
          <Link to={`/movie/${movie.id}`} >
            {movie.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;
