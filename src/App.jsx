// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import StorySection from "./components/StorySection";
import CountDownSection from "./components/CountDownSection";
import WeddingEventsSection from "./components/WeddingEventsSection";
import ImageBgSection from "./components/ImageBgSection";
import EntourageSection from "./components/EntourageSection";
import DressSection from "./components/DressSection";
import RsvpSection from "./components/RsvpSection";
import ScrollButton from "./components/ScrollButton";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ViewGuest from "./components/ViewGuest";
import "./assets/css/style.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Default route now shows the homepage */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Navbar />
              <AboutSection />
              <StorySection />
              <CountDownSection />
              <WeddingEventsSection />
              <ImageBgSection />
              <EntourageSection />
              <DressSection />
              <RsvpSection />
              <ScrollButton />
              <Footer />
            </>
          }
        />
        {/* Login is now available at /login */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view-guest/:id" element={<ViewGuest />} />
      </Routes>
    </Router>
  );
}

export default App;
