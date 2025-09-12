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


// import useSte for toggle-theme logic

export default function Page() {
  const[toggleClass, setToggleClass] = useState('');
  return (
    <>
      <div className={toggleClass}>
      <NavBar toggleDiv={<ToggleButton toggleClass={toggleClass} setToggleClass={setToggleClass}/>} />
      <main>
        <About/>
        <DigitalSkills/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
      </div>
    </>
  );
}
