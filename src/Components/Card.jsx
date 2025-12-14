import { Link } from "react-router";

const Card = ({ movie }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center" key={movie.id}>
      <div
        className="card border-0 d-col"
        style={{ width: "18rem", maxWidth: "100%" }}
      >
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top img-fluid" alt="Movie" />
        <Link to={`/movie/${movie.id}`} className="stretched-link"></Link>
      </div>
    </div>
  );
};

export default Card;
