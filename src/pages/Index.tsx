import { useNavigation } from "react-router-dom";
import CountriesGrid from "../components/CountriesGrid";
import FormContainer from "../components/FormContainer";
import LoadingSpinner from "../components/LoadingSpinner";

function Index() {
  const navigation = useNavigation();
  return (
    <main className="min-h-[calc(100vh-5rem)] overflow-auto bg-background px-7 pb-14 md:px-[4.75rem]">
      {navigation.state === "loading" ? (
        <LoadingSpinner />
      ) : (
        <>
          <FormContainer />
          <CountriesGrid />
        </>
      )}
    </main>
  );
}
export default Index;
