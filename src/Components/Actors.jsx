import React from "react";
import actor from "../Images/Actors.png";
import "../Styles/Actors.css";

const Actors = () => {
  return (
    <div className="actor-card ">
      <div className="actor-image">
        <img src={actor} alt="Actor" />
      </div>
      <div className="actor-content">
        <h3 className="actor-name">Actor Name</h3>
        <p className="actor-desc">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content. This will later come from TMDB API.
        </p>
        <a className="btn btn-primary actor-btn" href="/">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default Actors;
