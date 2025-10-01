"use client";
import { FiSun, FiMoon } from "react-icons/fi";


export default function ToggleButton ({toggleClass, handleClick}) {
    return (
        <div className={`toggle-div ${toggleClass}`} onClick={handleClick}>
          {toggleClass === 'light-mode' ? <FiSun/> : <FiMoon/> }
        </div>
    )
}