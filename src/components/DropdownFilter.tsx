import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TRegion } from "../types/globalTypes";
import { useSearchParams } from "react-router-dom";

function DropdownFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [choice, setChoice] = useState<TRegion | undefined>();
  const [, setSearchParams] = useSearchParams();
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
    setChoice(ele);
    setSearchParams({ region: ele });
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative h-12 text-sm/4 font-bold text-light-text md:h-14">
      {/* switch */}
      <div
        className="flex h-full w-[200px] cursor-pointer items-center justify-between rounded-md bg-white px-5 py-[18px] shadow-sm transition-colors duration-300 ease-in-out hover:bg-light-text hover:text-white md:py-[1.125rem]"
        onClick={handleToggleMenu}
      >
        <span className="capitalize">
          {!isOpen && choice ? choice : "Filter by Region"}
        </span>
        <MdKeyboardArrowDown
          className={`${isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-300 ease-in-out`}
        />
      </div>
      {/* menu */}
      <div
        className={`absolute left-0 top-14 z-10 w-[200px] rounded-md bg-white px-5 py-[18px] shadow-sm transition-all duration-300 ease-in-out md:top-16 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        aria-hidden={!isOpen}
      >
        <ul className="space-y-[10px]">
          {regions.map((ele) => (
            <li
              key={ele}
              className="cursor-pointer capitalize transition-colors duration-300 ease-in-out hover:bg-light-text/30"
              onClick={() => handleChooseRegion(ele)}
            >
              {ele}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownFilter;
