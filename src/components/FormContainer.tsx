import DropdownFilter from "./DropdownFilter";
import SearchBar from "./SearchBar";

function FormContainer() {
  return (
    <section className="flex flex-col gap-10 pt-6 md:flex-row md:justify-between md:pt-12">
      <SearchBar />
      <DropdownFilter />
    </section>
  );
}
export default FormContainer;
