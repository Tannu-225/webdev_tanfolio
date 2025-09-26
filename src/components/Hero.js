// src/components/Hero.jsx
import React from "react";
import Lottie from "lottie-react";
import Freelance from "../assets/lottie/Freelance woman working.json"; // path to your JSON

export default function Hero() {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: text */}
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <h1 className="hero-name">
              Hi all I'm <span className="accent">Tannu</span>
            </h1>
            <h4 className="handle">( webdev_creator )</h4>
            <p className="hero-desc">
              I am passionate about building responsive, user-friendly, and
              visually appealing web applications that bring ideas to life. My
              focus is on creating clean, efficient code and delivering modern
              solutions that enhance user experience while maintaining
              performance and accessibility.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 my-3 fs-4">
              <a href="#" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            {/* GitHub Star Button */}
            {/* <button className="btn btn-dark mt-3 star-btn animate__animated animate__pulse animate__infinite">
              <i className="fa fa-star"></i> &nbsp; Star Me On Github
            </button> */}

            {/* New Buttons */}
            <div className="hero-buttons animate__animated animate__fadeInUp mt-4">
              <a href="#contact" className="btn btn-purple">
                <i className="fas fa-envelope"></i> Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline-purple">
                Browse Projects <i className="fas fa-arrow-down"></i>
              </a>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="col-md-6 text-center animate__animated animate__fadeInRight">
            {/* Lottie animation */}
        <Lottie 
          animationData={Freelance} 
          loop={true} 
          className="hero-lottie" 
        />
          </div>
        </div>
      </div>
    </section>
  );
}
