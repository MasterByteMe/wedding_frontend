import React from "react";
import groomPhoto from "../assets/images/groom_photo.png";
import bridePhoto from "../assets/images/bride_photo.png";
import flower1 from "../assets/images/gold_flower1.png";
import flower2 from "../assets/images/gold_flower2.png";
import diamond from "../assets/images/diamond.png";
import heartLine from "../assets/images/line_heart.png";

const AboutSection = () => {
  return (
    <div className="container-fluid position-relative py-5" id="weddingAbout">
      {/* Decorative Flowers */}
      <div
        className="position-absolute top-0 end-0"
        style={{ width: "160px", height: "160px" }}
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <img
          src={flower2}
          className="img-fluid"
          alt="Gold flower right decoration"
          loading="lazy"
        />
      </div>
      <div
        className="position-absolute top-0 start-0"
        style={{ width: "160px", height: "160px" }}
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <img
          src={flower1}
          className="img-fluid"
          alt="Gold flower left decoration"
          loading="lazy"
        />
      </div>

      <div className="container position-relative">
        {/* Section Intro */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="text-header">Hello!</h1>
          <h4 className="text-subheader mt-5">
            We invite you to celebrate our wedding
          </h4>
        </div>

        {/* Groom & Bride Title */}
        <div
          className="text-center mb-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-header">Groom & Bride</h1>
          <img
            src={heartLine}
            alt="Heart divider"
            className="line-heart"
            loading="lazy"
          />
        </div>

        {/* Groom */}
        <div className="row align-items-center mb-5">
          <div
            className="col-lg-8 text-end"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2>The Groom</h2>
            <p>
              The groom is a kind, dependable, and compassionate person. Known
              for his warm heart and genuine nature, he values loyalty and
              cherishes meaningful connections. He is supportive, with a strong
              sense of responsibility and a caring spirit, he is devoted to his
              loved ones and committed to building a bright future with his
              partner.
            </p>
            <a
              href="https://www.facebook.com/lolitojrsamonte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Groom Facebook"
            >
              <button type="button" className="btn btn-outline-primary">
                <i className="bi bi-facebook"></i>
              </button>
            </a>
          </div>
          <div
            className="col-lg-4 text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src={groomPhoto}
              className="img-fluid rounded"
              alt="Photo of the Groom"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bride */}
        <div className="row align-items-center flex-lg-row-reverse">
          <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
            <h2>The Bride</h2>
            <p>
              The bride is a kind, graceful, and fun-spirited person with a
              playful sense of humor. Her warm heart and infectious laughter
              light up any room. She balances elegance with a down-to-earth
              charm, making everyone feel at ease. With her caring nature and a
              touch of wit, she brings joy to those around her and is ready to
              build a beautiful, love-filled future with her partner.
            </p>
            <a
              href="https://www.facebook.com/armira.julie"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bride Facebook"
            >
              <button type="button" className="btn btn-outline-primary">
                <i className="bi bi-facebook"></i>
              </button>
            </a>
          </div>
          <div
            className="col-lg-4 text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src={bridePhoto}
              className="img-fluid rounded"
              alt="Photo of the Bride"
              loading="lazy"
            />
          </div>
        </div>

        {/* Decorative Diamond */}
        <div
          className="text-center mt-5"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src={diamond}
            className="img-fluid"
            alt="Black diamond icon"
            style={{ width: "100px", height: "100px" }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
