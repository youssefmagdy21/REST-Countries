import { useEffect, useState } from "react";
import { useDebounce } from "../hooks";
import { useSearchParams } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaRotate } from "react-icons/fa6";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedValue = useDebounce(searchQuery);
  const [, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams((prev) => {
      if (!debouncedValue) prev.delete("name");
      else prev.set("name", debouncedValue);

      return prev;
    });

    return () => setIsSearching(false);
  }, [debouncedValue, setSearchParams]);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value.trimStart());
    setIsSearching(true);
  }
  return (
    <label className="bg-accent relative flex h-12 w-full items-center rounded-md px-7 font-bold shadow md:h-14 md:w-[480px]">
      <IoSearchSharp className="text-input" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for a country..."
        className="placeholder:text-input/90 bg-accent h-full w-full px-6 py-4 text-base/4 placeholder:text-xs placeholder:font-light focus:outline-none md:py-[1.125rem]"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {isSearching && (
        <FaRotate className="text-input absolute right-7 animate-spin" />
      )}
    </label>
  );
}
export default SearchBar;
