import { Link } from "react-router-dom";

type TCountryCardProps = {
  flagImage: string;
  flagAlt: string;
  name: string;
  population: number;
  region: string;
  capital: string[];
};

function CountryCard({
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
      className="mx-auto block w-full shadow-sm transition-transform duration-300 hover:scale-105"
    >
      <div className="h-[336px] overflow-hidden rounded-md bg-white">
        <div className="h-[160px] w-full shadow-sm">
          <img src={flagImage} alt={flagAlt} className="h-full w-full" />
        </div>
        <div className="px-6 py-8 text-sm/4">
          <h2 className="mb-4 text-base/4 font-extraBold">{name}</h2>
          <div className="space-y-2">
            <p>
              <strong className="font-bold">Population:</strong>{" "}
              <span>{new Intl.NumberFormat().format(population)}</span>
            </p>
            <p>
              <strong className="font-bold">Region:</strong>{" "}
              <span>{region}</span>
            </p>
            <p>
              <strong className="font-bold">Capital:</strong>{" "}
              <span>{capital.join(", ")}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default CountryCard;
