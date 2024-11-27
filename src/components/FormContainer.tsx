import DropdownFilter from "./DropdownFilter";
import SearchBar from "./SearchBar";

function FormContainer() {
  return (
    <section>
      <div className="flex flex-col gap-14 px-4 pt-11 sm:px-16 sm:pt-12 md:flex-row md:justify-between md:gap-5">
        <SearchBar />
        <DropdownFilter />
      </div>
    </section>
  );
}
export default FormContainer;
