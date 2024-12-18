import CountryCard from "./CountryCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../api/countries-api";
import LoadingSpinner from "./LoadingSpinner";

function CountryCardsGrid() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });

  if (isPending) {
    return (
      <section className="flex h-[calc(100vh-(80px+160px))] w-full items-center justify-center md:h-[calc(100vh-(80px+104px))]">
        <LoadingSpinner />
      </section>
    );
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <section className="grid grid-cols-[repeat(auto-fit,_264px)] justify-center gap-10 py-8 md:justify-between md:gap-x-5 md:gap-y-[74px] md:py-12 lg:gap-x-7">
      {data.map((ele) => {
        return (
          <CountryCard
            key={ele.name.common}
            flagImage={ele.flags.png}
            flagAlt={ele.flags.alt}
            name={ele.name.common}
            population={ele.population}
            region={ele.region}
            capital={ele.capital[0]}
          />
        );
      })}
    </section>
  );
}
export default CountryCardsGrid;
