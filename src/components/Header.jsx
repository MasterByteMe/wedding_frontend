import React, { useEffect } from "react";
import header1 from "../assets/images/header1.jpg";
import header2 from "../assets/images/header2.jpg";
import header3 from "../assets/images/header3.jpg";

const Header = () => {
  useEffect(() => {
    const carouselEl = document.querySelector("#carouselExample");
    if (carouselEl) {
      const carousel = new window.bootstrap.Carousel(carouselEl, {
        interval: 3000, // 3 seconds
        ride: "carousel",
        pause: false, // Keeps playing even on hover
      });
    }
  }, []);

  return (
    <section>
      <div
        id="carouselExample"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause="false"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {[header1, header2, header3].map((img, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
            >
              <img
                src={img}
                className="d-block w-100"
                alt={`Header ${idx + 1}`}
                loading="lazy"
              />
              <div className="carousel-overlay">
                <h2 className="header-subtitle">We Are Getting Married</h2>
                <h1 className="header-title">Jay-R & Mira</h1>
                <a href="#weddingRsvp" className="btn-transparent">
                  <span>26 April 2025</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Header;
