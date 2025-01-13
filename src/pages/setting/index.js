import React, { useState, useEffect } from 'react';
import Toggle from '../../components/toggle.tsx';
import { setTheme } from '../../utils/themes.js';
const Settings = () => {

    let theme = localStorage.getItem('theme');

     const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');
        }
    }

    return (
        <div className="settings">
            <h2 className="toggle-text">Theme:</h2> 
            <Toggle theme={theme} handleOnClick={handleOnClick} />
        </div>
    );
};

export default Settings;