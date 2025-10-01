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
<<<<<<< HEAD
import Education from "@/components/Education";
=======
>>>>>>> 97b874d3576499051763889123d9da03c956101e


// import useSte for toggle-theme logic

export default function Page() {
  const[toggleClass, setToggleClass] = useState('');
<<<<<<< HEAD
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
=======
  return (
    <>
      <div className={toggleClass}>
      <NavBar toggleDiv={<ToggleButton toggleClass={toggleClass} setToggleClass={setToggleClass}/>} />
      <main>
        <About/>
>>>>>>> 97b874d3576499051763889123d9da03c956101e
        <DigitalSkills/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
      </div>
    </>
  );
}
