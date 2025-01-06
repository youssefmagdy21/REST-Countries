import { createContext, useContext } from "react";

export type ThemeType = "light" | "dark";
type ThemeContextType = { theme: ThemeType; toggleTheme: () => void };

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
