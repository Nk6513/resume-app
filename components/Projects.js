"use client";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiPhp, SiMui } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Event Booking Website",
      description: "Full-stack event booking app — browse events and book tickets with a ready UI.",
      tech: ["React", "Material UI", "PHP"],
      github: "https://github.com/Nk6513/Event_ReactApp",
      live: "",
      img: "/eventBooking.jpg",
    },
    {
      id: 2,
      title: "Pizza Hub",
      description: "Full-stack pizza app — manage menus, track orders, and monitor pending and recent orders at one dashboard.",
      tech: ["PHP", "HTML5", "Material UI"],
      github: "https://github.com/Nk6513/Pizza-Hub",
      live: "",
      img: "/Pizzza.svg",
    },
    {
      id: 3,
      title: "CityLens",
      description: "Explore any city instantly — see the weather, map, and Wikipedia info, all in one place!",
      tech: ["React", "Tailwind", "JavaScript"],
      github: "https://github.com/Nk6513/Weather-app",
      live: "",
      img: "/Weather-amico.svg",
    },
  ];

  const techIcons = {
    React: <FaReact className="tech-icon tech-react" />,
    Tailwind: <SiTailwindcss className="tech-icon tech-tailwind" />,
    JavaScript: <SiJavascript className="tech-icon tech-js" />,
    PHP: <SiPhp className="tech-icon tech-php" />,
    "Material UI": <SiMui className="tech-icon tech-mui" />,
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-inner">
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

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-list">
                {project.tech?.map((tech) => (
                  <div key={tech} className="tech-item">
                    {techIcons[tech]}
                    <span className="tech-name">{tech}</span>
                  </div>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
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
