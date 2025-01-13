import CountryCard from "./CountryCard";
import { useCountriesQuery } from "../queries/countriesQuery";
import { useLoaderData } from "react-router-dom";
import { TCountriesLoader } from "../utils/countriesLoader";

function CountriesGrid() {
  const { nameFilter, regionFilter } = useLoaderData() as TCountriesLoader;
  const data = useCountriesQuery(regionFilter, nameFilter);
  return (
    <section className="mt-8 grid grid-cols-[repeat(auto-fit,_16.5rem)] justify-center gap-10 md:mt-12 md:justify-between md:gap-x-5 md:gap-y-[4.625rem] lg:gap-x-7">
      {data.map((ele) => {
        return (
          <CountryCard
            key={ele.name.common}
            flagImage={ele.flags.png}
            flagAlt={ele.flags.alt}
            name={ele.name.common || ele.name.official}
            population={ele.population}
            region={ele.region}
            capital={ele.capital}
          />
        );
      })}
    </section>
  );
}
export default CountriesGrid;
