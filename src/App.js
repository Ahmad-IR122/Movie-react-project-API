import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Card from "./Components/Card";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, []);

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
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              key={movie.id}
            />
          ))}

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
