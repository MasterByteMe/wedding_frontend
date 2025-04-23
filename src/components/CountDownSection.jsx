import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import goldFlower1 from "../assets/images/gold_flower1.png";
import goldFlower2 from "../assets/images/gold_flower2.png";
import countdownImg from "../assets/images/1countdown-img.jpg";
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("April 26, 2025 10:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCountdown(); // initial run
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-100 position-relative py-5" id="countdown-section">
      {/* Decorative Images */}
      <div
        className="position-absolute"
        style={{ top: "10px", right: "0", width: "160px", height: "160px" }}
      >
        <img
          src={goldFlower2}
          className="img-fluid"
          alt="Gold Flower Right"
          loading="lazy"
        />
      </div>

      <div
        className="position-absolute"
        style={{ top: "10px", left: "0", width: "160px", height: "160px" }}
      >
        <img
          src={goldFlower1}
          className="img-fluid"
          alt="Gold Flower Left"
          loading="lazy"
        />
      </div>

      {/* Countdown Section */}
      <div className="container position-relative">
        <div
          className="mx-auto text-center mb-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h5 className="text-name">Time Left Until</h5>
          <h1 className="text-header px-5">Our Big Day</h1>
          <h4 className="text-subheader mb-0">
            San Diego De Alcala Parish Church <br />
            Marcelo H. Del Pilar St, Poblacion Polo, Valenzuela
          </h4>
        </div>

        {/* Timer */}
        <div
          className="d-flex align-items-center justify-content-center mb-5"
          id="countdown"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="fs-2">
            <div className="text-days animate">{timeLeft.days}</div>
            <br />
            <span>Days</span>
          </div>
          <div className="fs-2">
            <div className="text-days animate">{timeLeft.hours}</div>
            <br />
            <span>Hours</span>
          </div>
          <div className="fs-2">
            <div className="text-days animate">{timeLeft.minutes}</div>
            <br />
            <span>Mins</span>
          </div>
          <div className="fs-2 me-0">
            <div className="text-days animate">{timeLeft.seconds}</div>
            <br />
            <span>Secs</span>
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="w-100">
        <div className="image-section position-relative">
          <img
            src={countdownImg}
            alt="Couple"
            className="img-fluid w-100 h-100"
          />
          <div className="dark-overlay"></div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section py-5" id="gallery-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11 col-sm-12 text-center">
              <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="gallery-swiper"
              >
                {[
                  gallery1,
                  gallery2,
                  gallery3,
                  gallery4,
                  gallery5,
                  gallery6,
                ].map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      className="img-fluid gallery-img w-100"
                      alt={`Gallery ${idx + 1}`}
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
