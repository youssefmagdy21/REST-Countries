import DropdownFilter from "./DropdownFilter";
import SearchBar from "./SearchBar";

function FormContainer() {
  return (
    <section className="mt-6 flex flex-col gap-10 md:mt-12 md:flex-row md:justify-between">
      <SearchBar />
      <DropdownFilter />
    </section>
  );
}
export default FormContainer;
