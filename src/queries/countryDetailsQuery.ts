import { getCountryByName } from "../util/countries-api";

export const countryDetailsQuery = (countryName: string) => ({
  queryKey: ["country", countryName],
  queryFn: async () => getCountryByName(countryName),
});
