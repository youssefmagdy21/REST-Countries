import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { generateBordersMap } from "../utils/countries-api";

export default function BorderCountryLink({
  countryCode,
}: {
  countryCode: string;
}) {
  const { data } = useQuery({
    queryKey: ["borders"],
    queryFn: generateBordersMap,
    select: useCallback(
      (data: Map<string, string>) => {
        return data.get(countryCode);
      },
      [countryCode],
    ),
  });
  return (
    <Link
      to={`/countries/${data?.toLowerCase()}`}
      className="block h-[30px] min-w-24 rounded-sm bg-accent px-2 py-1.5 text-center text-xs/4 transition-transform duration-300 hover:-translate-y-1 md:text-sm/4"
      style={{ boxShadow: "0 0 4px 1px rgba(0,0,0,0.1)" }}
    >
      {data}
    </Link>
  );
}
