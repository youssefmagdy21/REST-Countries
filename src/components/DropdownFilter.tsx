import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { TRegion } from "../types/global-types";
import { useSearchParams } from "react-router-dom";

function DropdownFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const regions: TRegion[] = [
    "africa",
    "americas",
    "antarctic",
    "asia",
    "europe",
    "oceania",
  ];

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }
  function handleChooseRegion(ele: TRegion) {
    setSearchParams((prev) => {
      prev.set("region", ele);
      return prev;
    });
    setIsOpen(!isOpen);
  }
  function handleResetChoice() {
    setSearchParams((prev) => {
      prev.delete("region");
      return prev;
    });
  }
  return (
    <div className="relative h-12 w-max text-sm/4 font-bold md:h-14">
      {/* switch */}
      <div
        className="flex h-full w-[12.5rem] cursor-pointer items-center justify-between rounded-md bg-accent px-5 py-[1.125rem] shadow-sm transition-colors duration-300 ease-in-out hover:bg-text hover:text-accent md:py-[1.125rem]"
        onClick={handleToggleMenu}
      >
        <span className="capitalize">
          {searchParams.get("region") ?? "Filter by Region"}
        </span>
        <MdKeyboardArrowDown
          className={`${isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-300 ease-in-out`}
        />
      </div>
      {/* menu */}
      <div
        className={`absolute left-0 top-14 z-10 w-[200px] rounded-md bg-accent px-5 py-[18px] shadow-sm transition-all duration-300 ease-in-out md:top-16 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        aria-hidden={!isOpen}
      >
        <ul className="space-y-[10px]">
          {regions.map((ele) => (
            <li
              key={ele}
              className="cursor-pointer capitalize transition-colors duration-300 ease-in-out hover:bg-text/30"
              onClick={() => handleChooseRegion(ele)}
            >
              {ele}
            </li>
          ))}
        </ul>
      </div>
      {searchParams.get("region") && (
        <button
          className="absolute -right-6 top-1/2 -translate-y-1/2"
          onClick={handleResetChoice}
        >
          <GrPowerReset className="transition-transform duration-700 hover:rotate-[360deg]" />
        </button>
      )}
    </div>
  );
}

export default DropdownFilter;
