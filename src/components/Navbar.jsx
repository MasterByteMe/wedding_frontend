// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <header
      className="sticky-top navbar-light"
      style={{ backgroundColor: "rgba(13, 71, 21, 0.85)" }}
    >
      <div id="fh5co-header-section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            {/* Brand */}
            <a className="navbar-brand" href="#">
              Jay-R and Mira
            </a>

            {/* Toggle Button for Mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#weddingAbout">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#story-timeline">
                    Story
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#gallery-section">
                    Gallery
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    The Wedding
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#countdown-section">
                        Timeline
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#wedding-events">
                        Wedding Events
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#entrourage-section">
                        Meet the Entourage
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#dress-section">
                        Dress to Celebrate
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#weddingRsvp">
                    RSVP
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
