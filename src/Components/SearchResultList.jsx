import React from "react";
import "./../Styles/SearchResultList.css";
import { Link } from "react-router";

const SearchResultList = ({ results, onSelect }) => {
  return (
    <div className="search-dropdown">
      {results.map((movie) => (
        <div
          key={movie.id}
          className="search-item"
          onClick={() => console.log(movie.id )}
        >
          <span className="search-title">{movie.title}</span>
          <Link to={`/movie/${movie.id}`} className="stretched-link">{movie.id}</Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;
