import React from "react";
import "./../Styles/SearchResultList.css";
import { Link } from "react-router";

const SearchResultList = ({ results, onSelect }) => {
  return (
    <div className="search-dropdown">
      {results.slice(0, 10).map((movie) => (
        <div
          key={movie.id}
          className="search-item"
          onClick={() => onSelect(movie)}
        >
          <span className="search-title">{movie.title}</span>
          <Link to={`/movie/${movie.id}`} className="stretched-link"></Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;
