import {
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";
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

export function useBorderName(borderCode: string) {
  const { data, isLoading } = useQuery({
    ...countriesQuery,
    select: (data: TCountries) => getBorderName(data, borderCode),
  });

  return { data, isLoading };
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

function getBorderName(data: TCountries, borderCode: string) {
  const borderCountry = data.find((ele) => ele.cca3 === borderCode);
  if (!borderCountry) return "";

  return borderCountry.name.common || borderCountry.name.official;
}
