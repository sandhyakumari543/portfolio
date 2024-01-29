import React, { useState, useEffect, useContext } from 'react';

const ThemeContext = React.createContext();

const THEME = {
    dark: "dark",
    light: "light"
}

const ThemeContextProvider = (props) => {
    const [currentTheme, setCurrentTheme] = useState();

    const toggleTheme = () => {
       const theme= onThemeChangeHandler(currentTheme !== THEME.dark);
        localStorage.setItem("my-theme",theme);
    };

    const onThemeChangeHandler = (isDarkMode) => {
        if (isDarkMode) {
            setCurrentTheme(THEME.dark);
            document.querySelector('body').setAttribute('data-theme', THEME.dark);
            
         return THEME.dark;
        }
        else {
            setCurrentTheme(THEME.light)
            document.querySelector('body').removeAttribute('data-theme');
           return THEME.light;
        }
    };

    useEffect(() => {
        const isThemePreferenceDarkMode = window.matchMedia(
            "(prefers-color-scheme)"
        ).matches;
        
        const lastActiveTheme=localStorage.getItem("my-theme");
        if(lastActiveTheme){
                    onThemeChangeHandler(lastActiveTheme ===THEME.dark);
        }else{
            onThemeChangeHandler(isThemePreferenceDarkMode)
        }
    }, []);

    return (
    <ThemeContext.Provider {...props} value={{toggleTheme,currentTheme}}/>
    )
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeContextProvider;