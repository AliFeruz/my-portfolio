import React, { createContext, useContext, ReactNode, ReactElement, useState, useEffect } from "react";

interface ThemeContextProps {
  themeMode: string;
  darkTheme: () => void;
  lightTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps): ReactElement => {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  const value = {
    themeMode,
    lightTheme,
    darkTheme
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
