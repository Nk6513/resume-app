"use client";

// ------------------------------------------
// Imports
// ------------------------------------------
import React from "react";

// ------------------------------------------
// Skills Data
// ------------------------------------------
const skills = [
  { name: "HTML5", percent: 80 },
  { name: "CSS3", percent: 80 },
  { name: "SCSS", percent: 75 },
  { name: "Bootstrap", percent: 80 },
  { name: "Tailwind", percent: 80 },
  { name: "JavaScript", percent: 80 },
  { name: "React", percent: 80 },
  { name: "Next JS", percent: 90 },
  { name: "TYPO3", percent: 90 },
  { name: "PHP", percent: 85 },
  { name: "Git", percent: 75 },
  { name: "Figma", percent: 70 },
  { name: "Node.js", percent: 70 },
  { name: "MySQL", percent: 75 },
  { name: "MongoDB", percent: 70 },
  { name: "Redux", percent: 70 },
  { name: "Jest", percent: 60 },
];

// ---------------------------------------------------
// DigitalSkills Component
// ---------------------------------------------------
export default function DigitalSkills() {
  return (
    // Wrapper section for Digital Skills
    <section id="digitalSkills" className="digital-skills-section">
      <h2>Digital Skills</h2>

      {/*---------- Skills Grid ----------*/}
      <div className="skills-grid">
        {skills.map((skill) => (
          // Individual skill badge
          <div key={skill.name} className="skill-badge" title={`${skill.percent}%`}>
            {skill.name}
            <span className="skill-percent">{skill.percent}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
