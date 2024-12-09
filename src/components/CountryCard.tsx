import { Link } from "react-router-dom";

function CountryCard() {
  return (
    <Link to={"/"} className="mx-auto block h-fit w-fit">
      <div className="h-[336px] w-full overflow-hidden rounded-md bg-white shadow-sm transition-transform duration-300 hover:scale-105">
        <img
          src="https://flagcdn.com/de.svg"
          alt=""
          className="h-[160px] w-full object-cover"
        />
        <div className="px-6 py-8 text-sm/4">
          <h2 className="mb-4 text-base/4 font-extraBold">Germany</h2>
          <div className="space-y-2">
            <p>
              <strong className="font-bold">Population:</strong>{" "}
              <span>81,770,900</span>
            </p>
            <p>
              <strong className="font-bold">Region:</strong> <span>Europe</span>
            </p>
            <p>
              <strong className="font-bold">Capital:</strong>{" "}
              <span>Berlin</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default CountryCard;
