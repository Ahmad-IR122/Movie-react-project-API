import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Card from "./Components/Card";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (data?.results?.length > 0) {
          setMovies((prevMovies) => [...prevMovies, ...(data.results || [])]);
        }
      });
  }, [page]);
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };


  // function displayMovieDetails(movieId) {
  //   const URL = `https://api.themoviedb.org/3/movie/?api_key=${API_KEY}&language=en-US`
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="d-flex justify-content-start p-3 m-3">
        <h1>Popular Movies</h1>
      </div>
      <div className="container">
        <div className="row g-4">
          {movies.map((movie) => (
            <Card
              // image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              // key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center p-4">
        <button className="btn btn-success " onClick={handleLoadMore}>
          <i className="bi bi-cloud-upload-fill"></i> Load More
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
