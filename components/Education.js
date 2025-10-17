"use client";
import Image from "next/image";

export default function Education() {
  const education = [
    {
      id: 1,
      degree: "BSc. Infomation Technology",
      institution: "University of Malakand",
      duration: "2011 – 2015",
      description: "Majored in Information Technology with a focus on software development, databases, and networking. Gained practical experience through projects and tech workshops.",
      logo: "/uom.png",
    },
    {
      id: 2,
      degree: "MSc. Computer and System Engineering",
      institution: "Technical University of Ilmenau",
      duration: "2021 – Current",
      description:"Pursued a Master's in Computer and System Engineering with emphasis on advanced software engineering, system design, and research-driven projects.",
      logo: "/tu.png",
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-grid">
        {education.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="card-inner">
              {/* {edu.logo && (
                <div className="education-logo">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    width={80}
                    height={80}
                  />
                </div>
              )} */}
              <h3>{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-duration">{edu.duration}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
