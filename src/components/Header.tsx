import { MdOutlineDarkMode } from "react-icons/md";

function Header() {
  return (
    <header className="bg-light-accent text-light-text drop-shadow">
      {/* container */}
      <div className="flex items-center justify-between px-4 py-14 sm:px-16 sm:py-7">
        <h1 className="cursor-default text-lg font-extraBold sm:text-2xl">
          Where in the world?
        </h1>
        <button className="group flex items-center gap-1 text-base font-bold transition-all duration-300 ease-in-out hover:-translate-y-1 hover:opacity-80">
          <MdOutlineDarkMode className="transition-transform duration-300 ease-in-out group-hover:-rotate-90" />
          Dark Mode
        </button>
      </div>
    </header>
  );
}

export default Header;

// <MdOutlineLightMode />
