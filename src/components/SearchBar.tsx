import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaRotate } from "react-icons/fa6";
import debounce from "lodash.debounce";

function SearchBar() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameQuery = searchParams.get("name") ?? "";
  useEffect(() => {
    const ele = document.getElementById("search") as HTMLInputElement;
    ele.value = nameQuery;
  }, [nameQuery]);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = e.target.value.trimStart();
    setSearchParams((prev) => {
      if (searchValue.length === 0) prev.delete("name");
      else prev.set("name", searchValue);
      return prev;
    });

    setIsSearching(false);
  }
  const debouncedSearch = debounce(handleSearchChange, 750);
  return (
    <label className="relative flex h-12 w-full items-center rounded-md bg-accent px-7 font-bold shadow md:h-14 md:w-[480px]">
      <IoSearchSharp className="text-input" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for a country..."
        className="h-full w-full bg-accent px-6 py-4 text-base/4 placeholder:text-xs placeholder:font-light placeholder:text-input/90 focus:outline-none md:py-[1.125rem]"
        defaultValue={nameQuery}
        onChange={debouncedSearch}
        onKeyDown={() => setIsSearching(true)}
      />
      {isSearching && (
        <FaRotate className="absolute right-7 animate-spin text-input" />
      )}
    </label>
  );
}
export default SearchBar;
