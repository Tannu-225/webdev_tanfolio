// src/components/WhatIDo.jsx
import React from "react";
import "animate.css";
import "../App.css"; // ensure styles are loaded
import Lottie from "lottie-react";
import webDevelopment from "../assets/lottie/Web Development.json"; // path to your JSON
import html5 from "../assets/icons/html5.svg";
import css3 from "../assets/icons/css3.svg";
import js from "../assets/icons/js.svg";
import react from "../assets/icons/react.svg";
import python from "../assets/icons/python.svg";
import npm from "../assets/icons/npm.svg";
import sqlDatabase from "../assets/icons/sql-database.svg";
import git from "../assets/icons/git.svg";

const techIcons = [
  { alt: "HTML5", src: html5 },
  { alt: "CSS3", src: css3 },
  { alt: "JavaScript", src: js },
  { alt: "React", src: react },
  { alt: "Python", src: python },
  { alt: "npm", src: npm },
  { alt: "SQL DB", src: sqlDatabase },
  { alt: "Git", src: git },
];

export default function WhatIDo() {
  return (
    <section id="stack" className="whatido-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left illustration */}
          <div className="col-md-6 text-center animate__animated animate__fadeInLeft">
            <Lottie 
                animationData={webDevelopment} 
                loop={true} 
                className="img-fluid left-illustration"
                style={{ maxWidth: 520 }}
            />
          </div>

          {/* Right content */}
          <div className="col-md-6 animate__animated animate__fadeInRight">
            <h2 className="whatido-title">What I do</h2>
            <p className="whatido-sub">
              CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </p>

            {/* icons row */}
            <div className="icons-wrap my-4">
              {techIcons.map((icon) => (
                <div
                  key={icon.alt}
                  className="tech-circle animate__animated animate__fadeInUp"
                >
                  <img src={icon.src} alt={icon.alt} />
                </div>
              ))}
            </div>

            {/* bullets */}
            <ul className="whatido-list mt-3">
              <li>
                <span className="bolt">⚡</span> Develop highly interactive Front
                end / User Interfaces for web and mobile applications
              </li>
              <li>
                <span className="bolt">⚡</span> Progressive Web Applications
                (PWA) in normal and SPA stacks
              </li>
              <li>
                <span className="bolt">⚡</span> Integration of third party
                services such as Firebase / AWS / Digital Ocean
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
