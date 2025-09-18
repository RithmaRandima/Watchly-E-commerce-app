import React from "react";
import "./Hero.css";
import { FaHandPeace } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <FaHandPeace className="hand-icon" />
          </div>
          <p>Collection</p>
          <p>for Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <FaArrowRight />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
