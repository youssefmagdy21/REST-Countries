import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="relative bg-accent px-4 shadow md:px-[4.75rem]">
      <div className="flex items-center justify-between py-[1.875rem] md:py-6">
        <h1 className="text-base/5 font-extraBold md:text-xl/8">
          <Link to="/">Where in the world?</Link>
        </h1>
        <button
          className="group flex items-center gap-1 text-xs font-bold transition-opacity duration-300 hover:opacity-80 md:text-sm"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <>
              <MdOutlineDarkMode className="transition-transform duration-700 group-hover:rotate-[360deg]" />
              Dark Mode
            </>
          ) : (
            <>
              <MdOutlineLightMode className="transition-transform duration-700 group-hover:rotate-[360deg]" />
              Light Mode
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
