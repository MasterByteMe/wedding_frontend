// src/components/EntourageSection.jsx
import React from "react";
import goldFlower1 from "../assets/images/gold_flower1.png";
import goldFlower2 from "../assets/images/gold_flower2.png";
import lineHeart from "../assets/images/line_heart.png";

const EntourageSection = () => {
  return (
    <div className="w-100 position-relative py-4" id="entrourage-section">
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

      <div className="container position-relative pt-5">
        {/* Title */}
        <div
          className="text-center mb-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-header text-center">Meet the Entourage</h1>
          <img
            src={lineHeart}
            alt="Line Heart"
            className="line-heart"
            loading="lazy"
          />
        </div>

        {/* Parents Section */}
        <div
          className="row g-4 py-5 row-cols-1 row-cols-lg-4 d-flex justify-content-center text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="feature col text-center text-md-center">
            <h3 className="entourage-text-title">Bride's Parent</h3>
            <ul className="list-unstyled mt-3 mb-4 entourage-text-name">
              <li>Mrs. Arsenia S. Tizon</li>
              <li>Mr. Antonio C. Tizon</li>
            </ul>
          </div>
          <div className="feature col text-center text-md-center">
            <h3 className="entourage-text-title">Groom's Parent</h3>
            <ul className="list-unstyled mt-3 mb-4 entourage-text-name">
              <li>Mrs. Imelda A. Samonte</li>
            </ul>
          </div>
        </div>

        {/* Principal Sponsors */}
        <div className="row g-4 pt-1" data-aos="fade-up" data-aos-delay="300">
          <div className="col-12 text-center pb-4">
            <h3 className="entourage-text-title">Principal Sponsor</h3>
          </div>
          <div className="row g-4 justify-content-center align-items-start">
            {/* Godfather */}
            <div className="col-lg-3 text-center text-md-center">
              <h4 className="entourage-text-subtitle">Godfather</h4>
              <ul className="list-unstyled my-2 mb-4 entourage-text-name">
                {[
                  "Mr. Rudolf Velasco",
                  "Mr. Elmar Isidro",
                  "Mr. Jimmy Alonzo",
                  "Mr. Louie Quinto",
                  "Kap. Geraldo Gonzales",
                  "Kap. Rizalino Ferrer",
                  "Mr. Renato Reyes",
                  "Mr. Reynaldo Aguila",
                  "Mr. Renato Salvador",
                  "Mr. Joseph Salvador",
                  "Joan Pajarillaga",
                ].map((name, idx) => (
                  <li key={idx}>{name}</li>
                ))}
              </ul>
            </div>

            {/* Godmother */}
            <div className="col-lg-3 text-center text-md-center">
              <h4 className="entourage-text-subtitle">Godmother</h4>
              <ul className="list-unstyled my-2 mb-4 entourage-text-name">
                {[
                  "Mrs. Julie Salvador",
                  "Mrs. Belinda Corea",
                  "Mrs. Angelina Dizon",
                  "Mrs. Gerlie Gonzales",
                  "Mrs. Eva Bal",
                  "Kag. Ellaine Manalaysay",
                  "Mrs. Haide Casin",
                  "Mrs. Leah Salvador",
                  "Ms. Ofelia Mirasol",
                  "Mrs. Josie Ramos",
                  "Mrs. Ancy Llanera",
                ].map((name, idx) => (
                  <li key={idx}>{name}</li>
                ))}
              </ul>
            </div>

            {/* Maid of Honor & Bridesmaids */}
            <div className="col-lg-3 text-center text-md-center">
              <h4 className="entourage-text-subtitle">Maid of Honor</h4>
              <ul className="list-unstyled mt-1 mb-4 entourage-text-name">
                <li>Ms. Lovina Ramos</li>
              </ul>
              <h4 className="entourage-text-subtitle">Bridesmaid</h4>
              <ul className="list-unstyled mt-1 mb-4 entourage-text-name">
                {[
                  "Ms. Angela Malasa",
                  "Ms. Krina Lopez",
                  "Ms. Elena Ricamadas",
                  "Ms. Aileene De Guzman",
                ].map((name, idx) => (
                  <li key={idx}>{name}</li>
                ))}
              </ul>
            </div>

            {/* Bestman & Groomsmen */}
            <div className="col-lg-3 text-center text-md-center">
              <h4 className="entourage-text-subtitle">Bestman</h4>
              <ul className="list-unstyled mt-1 mb-4 entourage-text-name">
                <li>Mr. Imelito Samonte</li>
              </ul>
              <h4 className="entourage-text-subtitle">Groomsmen</h4>
              <ul className="list-unstyled mt-1 mb-4 entourage-text-name">
                {[
                  "Mr. Jeston Tulio",
                  "Mr. Andrei Artuz",
                  "Mr. Adan Balminero",
                ].map((name, idx) => (
                  <li key={idx}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Secondary Sponsors */}
        <div className="row g-4 pt-3" data-aos="fade-up" data-aos-delay="400">
          <div className="col-12 text-center">
            <h3 className="entourage-text-title">Secondary Sponsor</h3>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center text-center text-md-center">
            {[
              {
                title: "To Light our Path",
                names: ["Mr. Andrew Antalan", "Ms. Xena Yukeeh Buendia"],
              },
              {
                title: "To Clothe Us as One",
                names: ["Mr. Majesty Josh Carsido", "Mrs. Arianne Ruiz"],
              },
              {
                title: "To Bind Us as One",
                names: ["Mr. Raymart Samante", "Ms. May Ann Obsiana"],
              },
              {
                title: "To Carry Our Symbol of Love",
                names: ["Deandre Jeston Tulio"],
              },
            ].map((group, idx) => (
              <div className="col" key={idx}>
                <h4 className="entourage-text-subtitle">{group.title}</h4>
                <ul className="list-unstyled mt-1 mb-4 entourage-text-name">
                  {group.names.map((name, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center text-center text-md-center mt-3">
            {[
              {
                title: "To Carry Our Symbol of Faith",
                names: ["Joseph Clark Constantino"],
              },
              {
                title: "To Carry Our Symbol of Treasure",
                names: ["Timothy Yugeeh Gawat"],
              },
              {
                title: "Flower Girl",
                names: ["Hosea Jahnella Gumabon"],
              },
            ].map((group, idx) => (
              <div className="col" key={idx}>
                <h4 className="entourage-text-subtitle">{group.title}</h4>
                <ul className="list-unstyled mt-1 mb-4 entourage-text-name">
                  {group.names.map((name, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntourageSection;
