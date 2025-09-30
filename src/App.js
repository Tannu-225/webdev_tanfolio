// src/App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WhatIDo from "./components/WhatIDo";
import TechnicalSkills from "./components/TechnicalSkills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App(){
  return (
    <>
       <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <WhatIDo /> 
        < TechnicalSkills/>
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
export default App;

