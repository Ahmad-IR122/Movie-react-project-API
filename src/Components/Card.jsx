const Card = ({ image }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center">
      <div
        className="card border-0 d-col"
        style={{ width: "18rem", maxWidth: "100%" }}
      >
        <img src={image} className="card-img-top img-fluid" alt="Movie" />
      </div>
    </div>
  );
};

export default Card;
