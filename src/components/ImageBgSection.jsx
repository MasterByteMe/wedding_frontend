// src/components/ImageBgSection.jsx

import React from "react";
import imageBg from "../assets/images/image-bg.jpg"; // replace with .png/.jpg

const ImageBgSection = () => {
  return (
    <div
      className="image-bg-section"
      style={{
        backgroundImage: `url(${imageBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "100vh",
      }}
    ></div>
  );
};

export default ImageBgSection;
