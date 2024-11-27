import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

function DropdownFilter() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [choosenRegion, setChoosenRegion] = useState<string | undefined>();

  const regions = ["africa", "america", "asia", "europe", "oceania"];

  const handleSwitchMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const handleChooseRegion = (e: React.MouseEvent<HTMLLIElement>) => {
    setChoosenRegion(e.currentTarget.innerText);
    handleSwitchMenu();
  };

  return (
    //  dropdown
    <div className="relative w-[55%] text-light-text md:w-[220px]">
      {/* selector */}
      <div
        className="flex cursor-pointer items-center justify-between rounded-md bg-light-accent px-8 py-6 shadow sm:py-4"
        onClick={handleSwitchMenu}
      >
        <span>{choosenRegion ?? "Filter by Region"}</span>
        <RiArrowDropDownLine
          className={`text-3xl transition-transform duration-300 ease-in-out ${isOpenMenu ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      {/* menu */}
      <ul
        className={`absolute top-[5.5rem] space-y-1 rounded-md bg-light-accent px-6 py-6 shadow sm:top-[4.5rem] sm:py-4 ${isOpenMenu ? "block" : "hidden"} z-10 w-full`}
      >
        {regions.map((region) => (
          <li
            key={region}
            className="cursor-pointer rounded-md px-2 capitalize transition-all duration-200 ease-in-out hover:bg-dark-accent/40"
            onClick={(e) => {
              handleChooseRegion(e);
            }}
          >
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownFilter;
