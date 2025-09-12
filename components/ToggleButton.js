"use client";
import { FiSun, FiMoon } from "react-icons/fi";




export default function ToggleButton ({toggleClass, setToggleClass}) {


    const HandleClick = () => {
        setToggleClass(toggleClass === '' ? 'light-mode': '');
    }
    return (
        <div className={`toggle-div ${toggleClass}`} onClick={HandleClick}>
          {toggleClass === 'light-mode' ? <FiSun/> : <FiMoon/> }
        </div>
    )
}