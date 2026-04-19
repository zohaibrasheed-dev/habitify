import { useState, createContext, useEffect } from "react";

// Create Context
export const ThemeContext = createContext();

// Create Provider
export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme || "light-theme";
    })

    const toggleTheme = () => {
        setTheme(prev => (prev === "light-theme" ? "dark-theme" : "light-theme"));
    }

    useEffect(() => {
        // 1. The Action
        document.body.className = theme;

        localStorage.setItem("theme", theme);

    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}