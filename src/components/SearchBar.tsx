import { IoMdSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div>
      <div className="flex items-center rounded-md bg-light-accent px-9 text-light-text shadow md:w-[440px]">
        <IoMdSearch className="text-3xl text-light-text opacity-40" />
        <input
          type="search"
          placeholder="Search for a country..."
          className="w-full px-6 py-6 font-bold placeholder:text-light-text placeholder:opacity-40 sm:py-4"
        />
      </div>
    </div>
  );
}
export default SearchBar;

{
  /* <label
        htmlFor="searchBar"
        className="flex items-center rounded-md bg-light-accent px-9 text-light-text shadow"
      >
        <IoMdSearch className="text-3xl text-light-text opacity-40" />
        <input
          id="searchBar"
          name="searchBar"
          type="search"
          placeholder="Search for a country..."
          className="w-full px-6 py-6 font-bold placeholder:text-light-text placeholder:opacity-40 sm:py-4"
        />
      </label> */
}
