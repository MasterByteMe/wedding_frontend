import React from "react";

import goldFlower1 from "../assets/images/gold_flower1.png";
import goldFlower2 from "../assets/images/gold_flower2.png";
import lineHeart from "../assets/images/line_heart.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";

const StorySection = () => {
  return (
    <div
      className="container-fluid story position-relative"
      id="story-timeline"
    >
      {/* Top Decorative Flowers */}
      <div
        className="position-absolute"
        style={{ top: "10px", right: 0, width: "160px", height: "160px" }}
      >
        <img
          src={goldFlower2}
          className="img-fluid"
          alt="gold flower right"
          loading="lazy"
        />
      </div>
      <div
        className="position-absolute"
        style={{ top: "10px", left: 0, width: "160px", height: "160px" }}
      >
        <img
          src={goldFlower1}
          className="img-fluid"
          alt="gold flower left"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="container position-relative pt-5 text-center">
        {/* Section Header */}
        <div
          className="text-center mb-5 mx-auto px-md-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-header px-3">Our Love Story</h1>
          <img
            src={lineHeart}
            alt="Line Heart"
            className="line-heart"
            loading="lazy"
          />
        </div>

        {/* First Met */}
        <div className="row g-5 py-5">
          <div className="col-lg-6" data-aos="fade-right">
            <img
              src={img3}
              className="d-block mx-lg-auto img-fluid"
              alt="First Met"
              width="500"
              height="600"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h1 className="fw-bold lh-1 mb-3">
              First Met <i className="bi bi-hearts"></i>
            </h1>
            <p>
              Our journey began over coffee, where a simple hello turned into
              endless conversations. What started as a casual meeting quickly
              became something more—filled with laughter, shared dreams, and a
              growing connection we couldn’t ignore.
            </p>
          </div>
        </div>

        {/* Engagement */}
        <div className="row flex-lg-row-reverse g-5 py-5">
          <div className="col-lg-6" data-aos="fade-left">
            <img
              src={img4}
              className="d-block mx-lg-auto img-fluid"
              alt="Engagement"
              width="500"
              height="600"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <h1 className="fw-bold lh-1 mb-3">Engagement</h1>
            <p>
              With a heart full of love and trembling hands, one unforgettable
              "yes" sealed our promise for forever. Under the stars (or in a
              place close to our hearts), we embraced the future together,
              filled with excitement for the beautiful road ahead.
            </p>
          </div>
        </div>

        {/* Our Future */}
        <div className="row g-5 py-5">
          <div className="col-lg-6" data-aos="fade-right">
            <img
              src={img5}
              className="d-block mx-lg-auto img-fluid"
              alt="Our Future"
              width="500"
              height="600"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h1 className="fw-bold lh-1 mb-3">Our Future</h1>
            <p>
              Now, we’re ready to write the next chapter—one filled with love,
              laughter, and lifelong adventures. From spontaneous getaways to
              quiet evenings at home, we can’t wait to create a lifetime of
              memories hand in hand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
