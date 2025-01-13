import React, { useState, useEffect } from 'react';
import Toggle from '../../components/toggle.tsx';
import { setTheme } from '../../utils/themes.js';
const Settings = () => {

    let theme = localStorage.getItem('theme');
    const [togClass, setTogClass] = useState(theme === 'theme-light' ? 'light' : 'dark')
    

     const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light');
        } else {
            setTheme('theme-dark');
            setTogClass('dark');
        }
    }

    return (
        <div className="settings">
            <h2 className="toggle-text">Theme:</h2> 
            <Toggle handleOnClick={handleOnClick} togClass={togClass} />
        </div>
    );
};

export default Settings;