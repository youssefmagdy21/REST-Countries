import { createContext, ReactNode, useContext, useState } from "react";

type ThemeType = "light" | "dark";
type ThemeContextType = { theme: ThemeType; toggleTheme: () => void };

// 1- create context
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// 2- provide context
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3- use context
export const useTheme = () => useContext(ThemeContext);
