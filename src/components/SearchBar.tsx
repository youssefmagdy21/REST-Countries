import { IoSearchSharp } from "react-icons/io5";

function SearchBar() {
  return (
    <label className="flex h-12 w-full items-center rounded-md bg-white px-7 font-bold shadow md:h-14 md:w-[480px]">
      <IoSearchSharp className="text-light-input" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for a country..."
        className="placeholder:text-light-input h-full w-full px-6 py-4 text-base/4 text-light-text placeholder:text-sm focus:outline-none md:py-[1.125rem]"
      />
    </label>
  );
}
export default SearchBar;
