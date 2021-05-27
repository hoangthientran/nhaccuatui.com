import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

// kho luu tru(la 1 component)
const ThemeContextProvider = ({ children }) => {
  // state
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      backgroundColor: "#fff",
    },
    dark: {
      backgroundColor: "#ff99ff",
    },
  });

  // Func change color
  const changeColor = () => {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  };
  // Context Data
  const themeContextData = {
    theme,
    changeColor,
  };

  // return provider
  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
