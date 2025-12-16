import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
    const api_key = process.env.REACT_APP_API_KEY;
    useEffect(()=>{
      const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;
      fetch (URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
    },[api_key]);
  return (
    <div>
      <Navbar/>
            <div className="container mt-5">
        <div className="row">
          {movies.map((movie) => (
            <div className="col-md-3 mb-4" key={movie.id}>
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top img-fluid"
                  alt={movie.title}
                />
                <Link to={`/movie/${movie.id}`} className="stretched-link"></Link>
                <div className="card-body">
                  <h6 className="card-title">{movie.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Upcoming;
