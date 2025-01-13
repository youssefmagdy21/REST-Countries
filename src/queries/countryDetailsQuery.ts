import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getCountryByName } from "../utils/countries-api";

export const countryDetailsQuery = (countryName: string) =>
  queryOptions({
    queryKey: ["country", countryName],
    queryFn: () => getCountryByName(countryName),
  });

export function useCountryDetailsQuery(countryName: string) {
  const { data } = useSuspenseQuery(countryDetailsQuery(countryName));

  return data;
}
