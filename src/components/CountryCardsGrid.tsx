import CountryCard from "./CountryCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../api/countries-api";
import LoadingSpinner from "./LoadingSpinner";
import { useSearchParams } from "react-router-dom";
import { TCountries } from "../types/globalTypes";
import { useCallback } from "react";

function CountryCardsGrid() {
  const [searchParams] = useSearchParams();
  const regionFilter = searchParams.get("region");
  const nameFilter = searchParams.get("name");
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
    select: useCallback(
      (data: TCountries) => {
        if (!regionFilter && !nameFilter) {
          return data;
        }

        let filteredData = data;
        if (regionFilter) {
          filteredData = data.filter(
            (ele) => ele.region.toLowerCase() === regionFilter,
          );
        }
        if (nameFilter) {
          return filteredData.filter((ele) =>
            ele.name.common.toLowerCase().includes(nameFilter),
          );
        }

        return filteredData;
      },
      [regionFilter, nameFilter],
    ),
  });

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

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
export default CountryCardsGrid;
