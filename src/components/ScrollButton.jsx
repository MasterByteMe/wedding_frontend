import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      id="scrollBtn"
      className="scroll-btn"
      aria-label="Back to Top"
      title="Back to Top"
      onClick={scrollToTop}
      style={{ display: isVisible ? "inline-block" : "none" }}
    />
  );
};

export default ScrollToTopButton;
