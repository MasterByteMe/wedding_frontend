// src/components/DressSection.jsx
import React from "react";
import manWomanImg from "../assets/images/man-woman.png";

const DressSection = () => {
  return (
    <section
      className="container-fluid position-relative dress-section"
      id="dress-section"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Text Section */}
          <div className="col-md-6 text-md-end text-end" data-aos="fade-right">
            <h2 className="text-header text-end mb-4">Dress to Celebrate</h2>
            <p className="lead">
              Please be in <strong>CASUAL/FORMAL ATTIRE</strong>
              <br />
              Wear something comfortable and
              <br />
              presentable with a Warm
              <br />
              Neutral color palette.
            </p>
            <div className="d-flex justify-content-md-end gap-2 mt-3">
              <span
                className="rounded-circle d-inline-block color-swatch"
                style={{ backgroundColor: "#81520b" }}
              ></span>
              <span
                className="rounded-circle d-inline-block color-swatch"
                style={{ backgroundColor: "#c78b4b" }}
              ></span>
              <span
                className="rounded-circle d-inline-block color-swatch"
                style={{ backgroundColor: "#dfa09c" }}
              ></span>
              <span
                className="rounded-circle d-inline-block color-swatch"
                style={{ backgroundColor: "#f9d97d" }}
              ></span>
              <span
                className="rounded-circle d-inline-block color-swatch"
                style={{ backgroundColor: "#f9c5d5" }}
              ></span>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="col-md-4 d-flex flex-column align-items-center mt-4 mt-md-0"
            data-aos="fade-left"
          >
            <img
              src={manWomanImg}
              alt="Man and Woman in Attire"
              className="img-fluid outfit-image woman-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressSection;
