import { useLoaderData, useNavigation } from "react-router-dom";
import CountriesGrid from "../components/CountriesGrid";
import FormContainer from "../components/FormContainer";
import LoadingSpinner from "../components/LoadingSpinner";
import { TCountriesLoader } from "../utils/countriesLoader";
import { useCountriesQuery } from "../queries/countriesQuery";
import CountryCard from "../components/CountryCard";

function Index() {
  const { nameFilter, regionFilter } = useLoaderData() as TCountriesLoader;
  const data = useCountriesQuery(regionFilter, nameFilter);
  const navigation = useNavigation();
  return (
    <main className="min-h-[calc(100vh-5rem)] overflow-auto bg-background px-7 pb-14 md:px-[4.75rem]">
      {navigation.state === "loading" ? (
        <LoadingSpinner />
      ) : (
        <>
          <FormContainer />
          <CountriesGrid>
            {data.map((ele) => {
              return (
                <CountryCard
                  key={ele.cca3}
                  flagImage={ele.flags.png}
                  flagAlt={ele.flags.alt}
                  name={ele.name.common || ele.name.official}
                  population={ele.population}
                  region={ele.region}
                  capital={ele.capital}
                />
              );
            })}
          </CountriesGrid>
        </>
      )}
    </main>
  );
}
export default Index;
