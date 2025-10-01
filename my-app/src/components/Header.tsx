import { useState } from "react";

import sunIcon from '../assets/images/icon-sun.svg';
import moonIcon from '../assets/images/icon-moon.svg';

export default function Header() {

    const [darkmode, setDarkMode] = useState(false); // useState

    const handleDarkMode = () => {
        const newMode = !darkmode;
        setDarkMode(newMode);
        (document.querySelector('body') as HTMLBodyElement).style.backgroundColor = darkmode ? 'white' : 'black';
    }; // dark mode handler function

    return (
        <div className={ darkmode ? "dark-hero-image-container" : "light-hero-image-container"}  >
            <div className="hero-inner-container" >
                <h1>TODO</h1>
                <button className="mode-icon-button" onClick={handleDarkMode} ><img src={darkmode ? sunIcon : moonIcon} alt="" /></button>
            </div>
        </div>
    )
}
