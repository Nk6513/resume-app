"use client";
import React from "react";


const certifications = [
  {
    file: "/Angular Essential Training.pdf",
    alt: "Angular Essential Training - Linkedin Learning",
  },
  {
    file: "/DevOps Foundations.pdf",
    alt: "DevOps Foundation - Linkedin Learning",
  },
  {
    file: "/JavaScript Certificate.pdf",
    alt: "JavaScript Certificate - Coursera",
  },
  {
    file: "/React.pdf",
    alt: "React - Coursera",
  },
    {
    file: "/Version Control.pdf",
    alt: "Version Control - Coursera",
  },
    {
    file: "/Learning REST APIs.pdf",
    alt: "Learning REST APIs - Linkedin Learning",
  },
   {
    file: "/SEO Foundations.pdf",
    alt: "SEO Foundations - Linkedin Learning",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2 className="certifications__title">Certifications</h2>
      <div className="certifications__carousel">
        <div className="certifications__track">
          {certifications.map((cert, index) => (
            <div className="certifications__card" key={index}>
              <iframe
                src={cert.file}
                title={cert.alt}
                className="certifications__pdf"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
