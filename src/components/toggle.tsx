import React, { useEffect, useState } from 'react';
import '../styles/toggle.css';


interface ToggleProps {

    togClass: string;

    handleOnClick: () => void;

}

const Toggle: React.FC<ToggleProps> = ({ togClass, handleOnClick }) => {

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

