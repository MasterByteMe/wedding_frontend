import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid" id="footer-section">
      <footer className="py-3 py-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#weddingAbout" className="nav-link px-2">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#story-timeline" className="nav-link px-2">
              Story
            </a>
          </li>
          <li className="nav-item">
            <a href="#wedding-events" className="nav-link px-2">
              Wedding Events
            </a>
          </li>
          <li className="nav-item">
            <a href="#entrourage-section" className="nav-link px-2">
              Entourage
            </a>
          </li>
        </ul>
        <p className="text-center text-white">
          Copyright ©2025 All rights reserved |{" "}
          <Link to="/login" className="text-white wedding-login">
            <span>The Wedding</span>
          </Link>{" "}
          is made with ❤️ by{" "}
          <a
            href="https://www.facebook.com/Mr.Ruiz24"
            target="_blank"
            rel="noreferrer"
          >
            <span>Mark.devz</span>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
