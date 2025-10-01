"use client";

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
  return (
    <section id="digitalSkills" className="digital-skills-section">
      <h2 className="section-title">Digital Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-percent">{skill.percent}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
