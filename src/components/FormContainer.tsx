import DropdownFilter from "./DropdownFilter";
import SearchBar from "./SearchBar";

function FormContainer() {
  return (
    <section>
      <div className="flex flex-col gap-10 px-4 py-6 md:px-[4.75rem] md:py-12">
        <SearchBar />
        {/* <DropdownFilter /> */}
      </div>
    </section>
  );
}
export default FormContainer;
