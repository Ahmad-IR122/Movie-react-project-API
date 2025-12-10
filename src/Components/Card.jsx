import React from "react";

const Card = ({ image }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
    <div className="card border-0 d-col" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
    </div></div>
  );
};

export default Card;
