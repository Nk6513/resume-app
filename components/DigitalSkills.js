"use client";
import { useState, useEffect } from "react";

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
];

export default function DigitalSkills() {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(skills.map((s) => s.percent));
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="digitalSkills" className="digital-skills-section">
      <h2 className="section-title">Digital Skills</h2>
      <div className="skills-container">
        {skills.map((skill, idx) => (
          <div key={skill.name} className="skill-bar">
            <p className="skill-title">{skill.name}</p>
            <div className="progress-container">
              <div
                className="progress-filled"
                style={{ width: `${progress[idx]}%` }}
              >
                <span className="percent">{progress[idx]}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
