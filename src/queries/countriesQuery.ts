import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getCountries } from "../utils/countries-api";
import { TCountries } from "../types/global-types";

export const countriesQuery = queryOptions({
  queryKey: ["countries"],
  queryFn: getCountries,
});

export function useCountriesQuery(regionFilter: string, nameFilter: string) {
  const { data } = useSuspenseQuery({
    ...countriesQuery,
    select: (data: TCountries) =>
      filterCountries(data, regionFilter, nameFilter),
  });

  return data;
}

function filterCountries(
  data: TCountries,
  regionFilter: string,
  nameFilter: string,
) {
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
}
