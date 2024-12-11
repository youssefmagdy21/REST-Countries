import CountryCardsGrid from "../components/CountryCardsGrid";
import FormContainer from "../components/FormContainer";

function Index() {
  return (
    <main className="bg-light-primary px-4 md:px-[4.75rem]">
      <FormContainer />
      <CountryCardsGrid />
    </main>
  );
}
export default Index;
