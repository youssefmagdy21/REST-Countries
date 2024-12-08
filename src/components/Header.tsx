import { MdOutlineDarkMode } from "react-icons/md";

function Header() {
  return (
    <header className="bg-light-accent text-light-text shadow">
      <div className="flex items-center justify-between px-4 py-[30px] md:px-[4.75rem] md:py-6">
        <h1 className="cursor-default text-base/5 font-extraBold md:text-xl/8">
          Where in the world?
        </h1>
        <button className="group flex items-center gap-1 text-xs font-bold transition-all duration-300 ease-in-out hover:-translate-y-1 hover:opacity-80 md:text-sm">
          <MdOutlineDarkMode className="transition-transform duration-300 ease-in-out group-hover:-rotate-90" />
          Dark Mode
        </button>
      </div>
    </header>
  );
}

export default Header;

// <MdOutlineLightMode />
