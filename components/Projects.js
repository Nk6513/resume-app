"use client";

// ------------------------------------------
// Imports
// ------------------------------------------
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiPhp, SiMui } from "react-icons/si";

// ------------------------------------------
// Projects Data
// ------------------------------------------
const projects = [
  {
    id: 1,
    title: "Event Booking",
    description:
      "Full-stack event booking app — browse events and book tickets. Backend is still on the process",
    tech: ["React", "Material UI", "PHP"],
    github: "https://github.com/Nk6513/Event_ReactApp",
    live: "",
    img: "/EventBooking.svg",
  },
  {
    id: 2,
    title: "Pizza Hub",
    description:
      "Full-stack pizza restaurant app — manage menus, track orders at one dashboard.",
    tech: ["PHP", "Material UI"],
    github: "https://github.com/Nk6513/Pizza-Hub",
    live: "",
    img: "/Pizzza.svg",
  },
  {
    id: 3,
    title: "CityLens",
    description:
      "Explore any city instantly — see the weather, map, and Wikipedia info, all in one place!",
    tech: ["React", "Tailwind"],
    github: "https://github.com/Nk6513/Weather-app",
    live: "https://city-lens-7hz7.vercel.app/",
    img: "/cityLens-logo.svg",
  },
];

// ------------------------------------------
// Tech Icons Mapping
// ------------------------------------------
const techIcons = {
  React: <FaReact className="tech-icon tech-react" />,
  Tailwind: <SiTailwindcss className="tech-icon tech-tailwind" />,
  JavaScript: <SiJavascript className="tech-icon tech-js" />,
  PHP: <SiPhp className="tech-icon tech-php" />,
  "Material UI": <SiMui className="tech-icon tech-mui" />,
};

// ---------------------------------------------------
// Projects Component
// ---------------------------------------------------
export default function Projects() {
  return (
    // Wrapper section for Projects
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>

      {/*---------- Projects Grid ----------*/}
      <div className="projects-grid">
        {projects.map((project) => (
          // Individual Project Card
          <div key={project.id} className="project-card">
            <div className="card-inner">

              {/*---------- Project Image ----------*/}
              {project.img && (
                <div className="project-image">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="image"
                  />
                </div>
              )}

              {/*---------- Project Title & Description ----------*/}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/*---------- Tech Stack ----------*/}
              <div className="tech-list">
                {project.tech?.map((tech) => (
                  <div key={tech} className="tech-item">
                    {techIcons[tech]}
                    <span className="tech-name">{tech}</span>
                  </div>
                ))}
              </div>

              {/*---------- Project Links ----------*/}
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
