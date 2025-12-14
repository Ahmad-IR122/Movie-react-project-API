import {  useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MovieHeader from "../Components/MovieHeader";
import "../Styles/MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div>
      <Navbar />
      <MovieHeader movieTitle={movie.title} />
      <div className="details-hero" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
        <div className="details-overlay"></div>

        <div className="container position-relative py-5 text-white">
          <div className="card bg-dark bg-opacity-75 border-0 p-4">
            <div className="row g-4 align-items-center">
              
              <div className="col-md-4 text-center">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="img-fluid rounded"
                  alt={movie.title}
                />
              </div>
              <div className="col-md-8">
                <h2 className="text-white mb-3">{movie.title}</h2>

                <h6 className="text-white ">Plot</h6>
                <p className="text-white">{movie.overview}</p>

                <h6 className="text-white mt-4">IMDB Rating</h6>
                <div className="d-flex align-items-center gap-3">
                  <div className="progress w-50" style={{ height: "8px" }}>
                    <div
                      className="progress-bar bg-success"
                      style={{ width: `${movie.vote_average * 10}%` }}
                    ></div>
                  </div>
                  <span className="text-white">{movie.vote_average}</span>
                </div>

                <h6 className="text-white mt-4">Release Date</h6>
                <p className="text-white">{movie.release_date}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
