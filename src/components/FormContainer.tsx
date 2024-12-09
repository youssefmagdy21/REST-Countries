import DropdownFilter from "./DropdownFilter";
import SearchBar from "./SearchBar";

function FormContainer() {
  return (
    <section className="flex flex-col gap-10 px-4 pb-8 pt-6 md:flex-row md:justify-between md:px-[4.75rem] md:py-12">
      <SearchBar />
      <DropdownFilter />
    </section>
  );
}
export default FormContainer;
