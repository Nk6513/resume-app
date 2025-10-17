"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar"; 
import About from "@/components/About";
import Education from "@/components/Education";
import DigitalSkills from "@/components/DigitalSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ToggleButton from "@/components/ToggleButton";

export default function Page() {
  const [toggleClass, setToggleClass] = useState('');

  return (
    <>
      <div className={toggleClass}>
        <NavBar 
          toggleDiv={
            <ToggleButton toggleClass={toggleClass} setToggleClass={setToggleClass} />
          } 
        />
        <main>
          <About />
          <Education />
          <DigitalSkills />
          <Projects />
          <Contact />
        </main>
        <Footer toggleDiv = {<ToggleButton toggleClass={toggleClass} setToggleClass={setToggleClass} />}/>
      </div>
    </>
  );
}
