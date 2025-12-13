import "../Styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container">

        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex align-items-center gap-3">
              <div className="rounded-circle d-inline-flex align-items-center justify-content-center">
              </div>
              <div>
                <h5 className="mb-1 fw-bold">MTDB API React Movie</h5>
                <div className="small text-secondary">
                  Your go-to source for popular movies powered by TMDB API.
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="row g-4 justify-content-between">

          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled small">
              <li><a className="text-decoration-none text-white" href="/">About</a></li>
              <li><a className="text-decoration-none text-white" href="/">Careers</a></li>
              <li><a className="text-decoration-none text-white" href="/">News</a></li>
              <li><a className="text-decoration-none text-white" href="/">Contact</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li><a className="text-decoration-none text-white" href="/">FAQ</a></li>
              <li><a className="text-decoration-none text-white" href="/">Documentation</a></li>
              <li><a className="text-decoration-none text-white" href="/">System Status</a></li>
              <li><a className="text-decoration-none text-white" href="/">Report an Issue</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-4 text-md-start">
            <h6 className="fw-semibold mb-3">Contact</h6>
            <ul className="list-unstyled small mb-3">
              <li className="mb-2">
                <i className="fa-solid fa-location-dot me-2"></i>
                Nablus, Palestine
              </li>
              <li className="mb-2">
                <i className="fa-regular fa-envelope me-2"></i>
                info@example.com
              </li>
              <li>
                <i className="fa-solid fa-phone me-2"></i>
                +970 59 000 0000
              </li>
            </ul>

            <div className="d-flex gap-3 mt-2 justify-content-center align-items-center justify-content-md-center">
              <a className="social-circle" href="/" aria-label="X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a className="social-circle" href="/" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="social-circle" href="/" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a className="social-circle" href="/" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a className="social-circle" href="/" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="border-secondary mt-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 small">
          <div>© 2025 Ahmad Irshaid. All rights reserved.</div>
          <div className="d-flex gap-3">
            <a className="text-decoration-none text-white" href="#privacy">Privacy</a>
            <a className="text-decoration-none text-white" href="#terms">Terms</a>
            <a className="text-decoration-none text-white" href="#accessibility">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
