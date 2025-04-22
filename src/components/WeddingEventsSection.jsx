// src/components/WeddingEventsSection.jsx

import React from "react";
import whiteFlower1 from "../assets/images/white_flower1.png";
import whiteFlower2 from "../assets/images/white_flower2.png";
import lineHeart from "../assets/images/line_heart.png";

const WeddingEventsSection = () => {
  return (
    <section className="w-100 position-relative py-5" id="wedding-events">
      {/* Decorative Images */}
      <div
        className="position-absolute"
        style={{ top: "10px", left: 0, width: "160px", height: "160px" }}
      >
        <img
          src={whiteFlower1}
          className="img-fluid"
          alt="White Flower Left"
          loading="lazy"
        />
      </div>

      <div
        className="position-absolute"
        style={{ top: "10px", right: 0, width: "160px", height: "160px" }}
      >
        <img
          src={whiteFlower2}
          className="img-fluid"
          alt="White Flower Right"
          loading="lazy"
        />
      </div>

      <div className="container">
        {/* Heading */}
        <div className="mx-auto text-center mb-5" data-aos="fade-up">
          <h1 className="text-header px-5">Wedding Events</h1>
          <img src={lineHeart} alt="Line Heart" className="line-heart" />
        </div>

        {/* Event Cards */}
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 d-flex justify-content-center flex-wrap gap-4">
            {/* Ceremony */}
            <div
              className="card shadow-sm rounded-3 mb-4"
              style={{
                minWidth: "300px",
                maxWidth: "400px",
                flex: "1 1 300px",
              }}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">The Ceremony</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <i className="bi bi-calendar3"></i> April 26, 2025
                  </li>
                  <li>
                    <i className="bi bi-clock"></i> 10:00 AM
                  </li>
                  <li>
                    <i className="bi bi-geo-alt"></i> San Diego De Alcala Parish
                    Church
                  </li>
                  <li>
                    Marcelo H. Del Pilar St, Poblacion <br /> Polo, Valenzuela
                  </li>
                </ul>
              </div>
            </div>

            {/* Reception */}
            <div
              className="card shadow-sm rounded-3 mb-4"
              style={{
                minWidth: "300px",
                maxWidth: "400px",
                flex: "1 1 300px",
              }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">The Reception</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <i className="bi bi-calendar3"></i> April 26, 2025
                  </li>
                  <li>
                    <i className="bi bi-clock"></i> 12:00 PM
                  </li>
                  <li>
                    <i className="bi bi-geo-alt"></i> Sitio Rosal Pavilion and
                    Patio Roberto
                  </li>
                  <li>
                    Rosal St., Tagalag, <br /> Valenzuela City
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingEventsSection;
