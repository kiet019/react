import { useState, useEffect } from 'react'
import React from 'react'
const themes = {
  dark: {
    backgroundColor: "rgb(17,17,17)",
  },
  light: {
    backgroundColor: "white",
  },
};
const initialState = {
  dark: true,
  theme: themes.dark,
  toggle: () => {},
};
const ThemeContext = React.createContext(initialState);
function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true); // Default theme is light
  // On mount, read the preferred theme from the persistence
  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);
  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };
  const theme = dark ? themes.dark : themes.light;
  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
        {children}
    </ThemeContext.Provider>
  );
}
export { ThemeProvider, ThemeContext };
