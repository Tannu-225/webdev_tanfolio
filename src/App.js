// src/App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WhatIDo from "./components/WhatIDo";
import TechnicalSkills from "./components/TechnicalSkills";
import Education from "./components/Education";

function App(){
  return (
    <>
       <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <WhatIDo /> {/* stack section here */}
        < TechnicalSkills/>
        <Education />
        <Footer />
      </main>
    </>
  );
}
export default App;

