import React, { useState } from "react";
import "../App.css"; // global styles

const tabs = [
  "Languages",
  "Frameworks/Libraries",
  "UI/UX",
  "Database",
  "Concepts",
];

// 🔹 Data for each tab
const skills = {
  Languages: [
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "SQL", icon: "fa-solid fa-database" },
    { name: "PHP", icon: "fa-brands fa-php" },
  ],

  "Frameworks/Libraries": [
    { name: "React", icon: "fa-brands fa-react" },
    { name: "Node.js", icon: "fa-brands fa-node-js" },
    { name: "Express", icon: "fa-solid fa-server" },
    { name: "Django", icon: "fa-solid fa-leaf" }, // fallback (no official FA Django)
    { name: "TailwindCSS", icon: "fa-solid fa-wind" }, // fallback
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
  ],

  "UI/UX": [
    { name: "Adobe Photoshop", icon: "fa-solid fa-image" }, // no official FA Photoshop
    { name: "Adobe Illustrator", icon: "fa-solid fa-pen-nib" },
    { name: "Adobe XD", icon: "fa-solid fa-object-group" },
    { name: "Figma", icon: "fa-brands fa-figma" },
    { name: "Canva", icon: "fa-solid fa-palette" }, // no official Canva
  ],

  Database: [
    { name: "SQL", icon: "fa-solid fa-database" },
    { name: "MongoDB", icon: "fa-solid fa-leaf" }, // fallback (no official MongoDB in FA free)
  ],

  Concepts: [
    { name: "OOP", icon: "fa-solid fa-code" },
    { name: "REST API", icon: "fa-solid fa-plug" },
  ],
};


export default function TechnicalSkills() {
  const [activeTab, setActiveTab] = useState("Languages");

  return (
    <section id="skills" className="skills-section py-5">
  {/* Floating icons background */}
  <div className="skills-bg">
    <i className="fa-brands fa-html5"></i>
    <i className="fa-brands fa-css3-alt"></i>
    <i className="fa-brands fa-js"></i>
    <i className="fa-brands fa-react"></i>
    <i className="fa-brands fa-node-js"></i>
    <i className="fa-brands fa-python"></i>
    <i className="fa-solid fa-database"></i>
    <i className="fa-brands fa-php"></i>
    <i className="fa-brands fa-figma"></i>
  </div>

  {/* Foreground content */}
  <div className="container text-center">
    <h2 className="skills-title">Technical Skills</h2>
    <p className="skills-sub">
      My expertise across various technologies and tools
    </p>
    {/* your tabs + skills grid */}

        {/* Tabs */}
        <div className="tabs-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
            <div className="skills-grid">
    {skills[activeTab].map((skill) => (
        <div key={skill.name} className="skill-card">
        <i className={skill.icon}></i>
        <span>{skill.name}</span>
        </div>
          ))}
        </div>
      </div>
    </section>
  );
}
