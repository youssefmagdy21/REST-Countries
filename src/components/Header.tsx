import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-accent px-4 shadow md:px-[4.75rem]">
      <div className="flex items-center justify-between py-[1.875rem] md:py-6">
        <h1 className="cursor-default text-base/5 font-extraBold md:text-xl/8">
          <Link to="/" replace>
            Where in the world?
          </Link>
        </h1>
        <button className="group flex items-center gap-1 text-xs font-bold transition-opacity duration-300 hover:opacity-80 md:text-sm">
          <MdOutlineDarkMode className="transition-transform duration-700 group-hover:rotate-[360deg]" />
          Dark Mode
        </button>
      </div>
    </header>
  );
}

export default Header;

// <MdOutlineLightMode />
