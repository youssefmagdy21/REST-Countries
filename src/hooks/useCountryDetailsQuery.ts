import { useSuspenseQuery } from "@tanstack/react-query";
import { countryDetailsQuery } from "../queries/countryDetailsQuery";

export function useCountryDetailsQuery(countryName: string) {
  const { data } = useSuspenseQuery(countryDetailsQuery(countryName));

  return data;
}
