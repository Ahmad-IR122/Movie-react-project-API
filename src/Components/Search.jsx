import React, { useEffect, useRef, useState } from "react";
import SearchResultList from "./SearchResultList";


const Search = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showList, setShowList] = useState(false);

  const api_key = process.env.REACT_APP_API_KEY;
  const wrapperRef = useRef(null);

  function fetchSearch(value) {
    const searchValue = encodeURIComponent(value.trim());
    if (!searchValue) {
      setResults([]);
      return;
    }

    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchValue}&page=1`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results || []);
      });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function handleSubmitQuery(e) {
    const value = e.target.value;
    setInput(value);

    if (value.trim()) {
      setShowList(true);
      fetchSearch(value);
    } else {
      setShowList(false);
      setResults([]);
    }
  }

  // ✅ Close dropdown when click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowList(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ When user clicks item
  const handleSelectMovie = (movie) => {
    setInput(movie.title);
    setShowList(false);
  };

  return (
    <div ref={wrapperRef} className="search-wrapper">
      <form className="navbar-search" onSubmit={handleFormSubmit}>
        <input
          id="valRes"
          type="text"
          placeholder="Search movies..."
          value={input}
          onChange={handleSubmitQuery}
          onFocus={() => input.trim() && setShowList(true)}
          autoComplete="off"
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      {/* ✅ Dropdown list like Google */}
      {showList && input.trim() && results.length > 0 && (
        <SearchResultList results={results} onSelect={handleSelectMovie} />
      )}
    </div>
  );
};

export default Search;
