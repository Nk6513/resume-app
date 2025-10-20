"use client";

// ------------------------------------------
// Imports
// ------------------------------------------
import { UOMLogo } from "./UOMLogo";
import { TULogo } from "./TULogo";

// ------------------------------------------
// Education Data
// ------------------------------------------
const education = [
  {
    id: 1,
    degree: "BSc. Infomation Technology",
    institution: "University of Malakand",
    duration: "2011 – 2015",
    description:
      "Majored in Information Technology with a focus on software development, databases, and networking. Gained practical experience through projects and tech workshops.",
    LogoComponent: UOMLogo,
  },
  {
    id: 2,
    degree: "MSc. Computer and System Engineering",
    institution: "Technical University of Ilmenau",
    duration: "2021 – Current",
    description:
      "Pursued an MSc in Computer and System Engineering with a focus on advanced software engineering, system design, and research-driven projects.",
    LogoComponent: TULogo,
  },
];

// ---------------------------------------------------
// Education Component
// ---------------------------------------------------
export default function Education({ logoColor }) {
  return (
    // Wrapper section for Education
    <section id="education" className="education-section">
      <h2>Education</h2>

      {/*---------- Education Grid ----------*/}
      <div className="education-grid">
        {education.map((edu) => {
          const Logo = edu.LogoComponent;

          return (
            // Individual Education Card
            <div key={edu.id} className="education-card">
              <div className="card-inner">
                {/*---------- Logo ----------*/}
                {Logo && (
                  <div className="education-logo">
                    <Logo priority fill={logoColor} width={200} height={300} />
                  </div>
                )}

                {/*---------- Degree and Institution ----------*/}
                <h3>{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-duration">{edu.duration}</p>

                {/*---------- Description ----------*/}
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
