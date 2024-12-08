import { IoSearchSharp } from "react-icons/io5";

function SearchBar() {
  return (
    <label className="flex items-center rounded-md bg-white px-7 font-bold">
      <IoSearchSharp className="text-black/40" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for a country..."
        className="w-full px-6 py-4 text-base/4 text-light-text placeholder:text-sm placeholder:text-black/40 md:py-[1.125rem]"
      />
    </label>
  );
}
export default SearchBar;
