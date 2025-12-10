import React from "react";

const Card = ({ image }) => {
  return (
    <div className="card border-0 d-col" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
    </div>
  );
};

export default Card;
