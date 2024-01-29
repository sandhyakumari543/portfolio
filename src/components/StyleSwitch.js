import React, { useEffect } from 'react';
import { FaCog } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import '../StyleSwitch.css';
import StyleSwitcher from './StyleSwitcher';
import { useTheme } from './ThemeContext';

const StyleSwitch = ({ setIsOpen }) => {
    const colors = ['#f021b2', '#1854b4', ' #37b182', '#fa5b0f', '#ec1839'];

    useEffect(() => {
        const currentColor = localStorage.getItem('color');
        setTheme(currentColor);
    }, []);

    const setTheme = (color) => {
        document.documentElement.style.setProperty('--skin-color', color);
    };

    const setColor = (event) => {
        const currentColor = event.target.style.getPropertyValue('--skin-color');
        setTheme(currentColor);
        localStorage.setItem('color', currentColor);
    };

    const { toggleTheme, currentTheme } = useTheme();

    return (
        <>
            <div className="style-switcher-toggler s-icon">
                <i >
                    <FaCog className="rotate-infinite" onClick={() => setIsOpen((prevState) => !prevState)} />
                </i>
            </div>
            <div className="day-night s-icon">
                <i className="fas fa" onClick={toggleTheme}>
                    {/* <i className="fas fa" > */}
                    {' '}
                    {currentTheme !== "dark" ? <MdDarkMode className='fas' /> : < MdLightMode />}

                </i>
                {/* <MdDarkMode /> */}

            </div>
            <h4>Theme Colors</h4>
            <div className="color-list">
                {colors.map((color, idx) => (
                    <StyleSwitcher key={idx} setColor={setColor} color={color} />
                ))}
            </div>
        </>
    );
};

export default StyleSwitch;
