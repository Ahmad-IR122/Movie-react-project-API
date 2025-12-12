import "../Styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer text-center py-4 mt-5">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-camera-reels"></i>

          <h5 className="fw-bold">Movie Explorer App</h5>
        </div>

        <p>
          This app allows you to explore popular movies using real-time data
          from
          <strong> TMDB API</strong>. Built with React.
        </p>

        <p className="small">
          ⚠️ This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>

        <hr />
        <div className="d-flex justify-content-center align-items-center gap-2">
          <p className="small mb-0">
          © {new Date().getFullYear()} Movie Explorer | Created by Ahmad Irshaid
        </p>
        <i className="bi bi-github"></i>
        <i className="bi bi-discord"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-twitter-x"></i>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
