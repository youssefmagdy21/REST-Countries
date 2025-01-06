import { ReactNode, useState } from "react";
import { ThemeContext, ThemeType } from "./ThemeContext";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(() => {
    return localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme") as ThemeType)
      : "light";
  });

  function toggleTheme() {
    setTheme((prev) => {
      const currentTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", JSON.stringify(currentTheme));
      return currentTheme;
    });
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
