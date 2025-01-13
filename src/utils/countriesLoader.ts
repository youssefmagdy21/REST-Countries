import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router-dom";
import { countriesQuery } from "../queries/countriesQuery";

export const countriesLoader =
  (queryClient: QueryClient) =>
  async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const nameFilter = url.searchParams.get("name") ?? "";
    const regionFilter = url.searchParams.get("region") ?? "";

    await queryClient.ensureQueryData(countriesQuery);
    return { nameFilter, regionFilter };
  };

export type TCountriesLoader = Awaited<
  ReturnType<ReturnType<typeof countriesLoader>>
>;
