"use client";
// app/page.js importing components
import NavBar from "@/components/NavBar"; 
import About from "@/components/About";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DigitalSkills from "@/components/DigitalSkills";
import ToggleButton from "@/components/ToggleButton";
import { useState } from "react";
import Education from "@/components/Education";


// import useSte for toggle-theme logic

export default function Page() {
  const[toggleClass, setToggleClass] = useState('');
  const handleClick = () => {
    setToggleClass(toggleClass === '' ? 'light-mode' : '');
      }
      
  return (
    <>
      <div className={toggleClass}>
      <NavBar toggleDiv={<ToggleButton handleClick={handleClick} />} />
      <main>
        <About/>
        <Education/>
        <DigitalSkills/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
      </div>
    </>
  );
}
