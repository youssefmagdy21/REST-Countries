import { Link } from "react-router-dom";
import { formatPopulation, isArrayEmpty } from "../util";

type TCountryCardProps = {
  flagImage: string;
  flagAlt: string;
  name: string;
  population: number;
  region: string;
  capital: string[];
};

export default function CountryCard({
  flagImage,
  flagAlt,
  name,
  population,
  region,
  capital,
}: TCountryCardProps) {
  return (
    <Link
      to={`countries/${name.toLowerCase()}`}
      className="block shadow-sm transition-transform duration-300 hover:scale-105"
    >
      <div className="h-[21rem] overflow-hidden rounded-md bg-white">
        <div className="h-[10rem] shadow-sm">
          <img
            src={flagImage}
            alt={flagAlt}
            className="h-full w-full"
            height={160}
            width={320}
            loading="lazy"
          />
        </div>
        <div className="px-6 py-8 text-sm/4">
          <h2 className="mb-4 text-base/4 font-extraBold">{name}</h2>
          <div className="space-y-2">
            <p>
              <strong className="font-bold">Population:</strong>{" "}
              <span>{formatPopulation(population)}</span>
            </p>
            <p>
              <strong className="font-bold">Region:</strong>{" "}
              <span>{region}</span>
            </p>
            <p>
              <strong className="font-bold">Capital:</strong>{" "}
              <span>{!isArrayEmpty(capital) ? capital.join(", ") : "--"}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
