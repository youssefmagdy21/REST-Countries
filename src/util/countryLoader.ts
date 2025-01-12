import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router-dom";
import { countryDetailsQuery } from "../queries/countryDetailsQuery";

export function countryLoader(queryClient: QueryClient) {
  return async function ({ params }: LoaderFunctionArgs) {
    if (!params.countryName) {
      throw new Error("No Country Name Provided");
    }

    await queryClient.ensureQueryData(countryDetailsQuery(params.countryName));

    return { countryName: params.countryName };
  };
}

export type TCountryLoader = Awaited<
  ReturnType<ReturnType<typeof countryLoader>>
>;
