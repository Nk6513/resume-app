"use client";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Event Booking Website",
      description: "My personal portfolio built with React and Material UI.",
      github: "https://github.com/Nk6513/Event_ReactApp",
      live: "",
<<<<<<< HEAD
      img: "/eventBooking.jpg",
=======
      img: "/EventBooking.png",
>>>>>>> 97b874d3576499051763889123d9da03c956101e
    },
    {
      id: 2,
      title: "Pizza Hub",
      description: "A simple pizza restaurant website built thoroughly with PHP.",
<<<<<<< HEAD
      github: "https://github.com/Nk6513/Pizza-Hub",
=======
      github: "https://github.com/username/todo-app",
>>>>>>> 97b874d3576499051763889123d9da03c956101e
      live: "",
      img: "/Pizzza.svg", 
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Inner container for hover animation */}
            <div className="card-inner">
              {project.img && (
                <div className="project-image">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={200}
                    
                  />
                </div>
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
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
    