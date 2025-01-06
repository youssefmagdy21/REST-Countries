import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
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
    <label className="relative flex h-12 w-full items-center rounded-md bg-accent px-7 font-bold shadow md:h-14 md:w-[480px]">
      <IoSearchSharp className="text-input" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for a country..."
        className="h-full w-full bg-accent px-6 py-4 text-base/4 placeholder:text-xs placeholder:font-light placeholder:text-input/90 focus:outline-none md:py-[1.125rem]"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {isSearching && (
        <FaRotate className="absolute right-7 animate-spin text-input" />
      )}
    </label>
  );
}
export default SearchBar;
