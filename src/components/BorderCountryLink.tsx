import { Link } from "react-router-dom";
import { generateBordersMap } from "../api/countries-api";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

function BorderCountryLink({ countryCode }: { countryCode: string }) {
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
    <li className="w-24 rounded-sm bg-light-accent text-center shadow transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <Link
        to={`/countries/${data}`}
        className="block py-1.5 text-xs/4 md:text-sm/4"
      >
        {data}
      </Link>
    </li>
  );
}
export default BorderCountryLink;
