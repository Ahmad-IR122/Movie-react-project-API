import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Card from "./Components/Card";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies,incrementPage } from "./features/movie/movieSlice";

function App() {
  // const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // useEffect(() => {
  //   const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data?.results?.length > 0) {
  //         setMovies((prevMovies) => [...prevMovies, ...(data.results || [])]);
  //       }
  //     });
  // }, [page]);
  // const handleLoadMore = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };


  const dispatch = useDispatch();
  const {movies , loading, page} = useSelector((state) => state.movies);
  useEffect(()=> {
    dispatch(fetchMovies(page));
  }, [dispatch , page]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  }
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
              movie={movie}
            />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center p-4">
        <button className="btn btn-primary w-25 h-25" onClick={handleLoadMore}>
          <i className="bi bi-cloud-upload-fill"></i> {loading ? "Loading..." : "Load More"}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
