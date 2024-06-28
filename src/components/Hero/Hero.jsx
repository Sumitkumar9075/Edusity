import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/edusity_assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for better world</h1>
        <p>
          Empowering minds with innovative learning and fostering a community of
          excellence and leadership. Our dedicated faculty and comprehensive
          programs ensure that every student achieves their fullest potential.
        </p>
        <button className="btn">
          {" "}
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
