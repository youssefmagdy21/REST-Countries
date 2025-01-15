import { Link } from "react-router-dom";
import { useBorderName } from "../queries/countriesQuery";

export default function BorderLink({ countryCode }: { countryCode: string }) {
  const { data: borderName, isLoading } = useBorderName(countryCode);

  return (
    <Link
      to={`/REST-Countries/countries/${borderName?.toLowerCase()}`}
      className="block h-[1.875rem] min-w-24 rounded-sm bg-accent px-2 py-1.5 text-center text-xs/4 transition-transform duration-300 hover:-translate-y-1 md:text-sm/4"
      style={{ boxShadow: "0 0 4px 1px rgba(0,0,0,0.1)" }}
    >
      {isLoading ? "..." : borderName}
    </Link>
  );
}
