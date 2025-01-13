import React, { useEffect, useState } from 'react';
import '../styles/toggle.css';


interface ToggleProps {

    theme: string;

    togClass: string;

    handleOnClick: () => void;

}

const Toggle: React.FC<ToggleProps> = ({ theme, togClass, handleOnClick }) => {
    
    // let theme = localStorage.getItem('theme');

    // const handleOnClick = () => {
    //     if (localStorage.getItem('theme') === 'theme-dark') {
    //         setTheme('theme-light');
    //         setTogClass('light')
    //     } else {
    //         setTheme('theme-dark');
    //         setTogClass('dark')
    //     }
    // }

    

    return (
        <div className="container--toggle">
            {
                togClass === "light" ?
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked />
                :
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
            }
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}
export default Toggle;

