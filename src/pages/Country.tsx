import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import BorderCountryLink from "../components/BorderCountryLink";
import { useQuery } from "@tanstack/react-query";
import { getCountryByName } from "../api/countries-api";
import LoadingSpinner from "../components/LoadingSpinner";
import {
  formatPopulation,
  getCurrencies,
  getLanguages,
  getNativeName,
  isArrayEmpty,
  isObjectEmpty,
} from "../util";

export default function Country() {
  const { countryName } = useParams() as { countryName: string };

  const { isError, isPending, error, data } = useQuery({
    queryKey: ["country", countryName],
    queryFn: () => getCountryByName(countryName),
  });

  if (isPending) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <div className="mt-10 md:mt-[4.75rem]">
        <BackButton />
      </div>
      <section className="mt-[3.75rem] flex flex-col items-start gap-12 md:mt-20 xl:flex-row xl:items-center xl:gap-[6.75rem]">
        {/* image */}
        <div className="bg-accent h-[14.25rem] w-full max-w-[35rem] shadow-sm sm:h-[25rem]">
          <img
            src={data.flags.svg}
            alt={data.flags.alt}
            className="h-full w-full"
            loading="lazy"
          />
        </div>
        {/* content */}
        <div className="w-full max-w-[61.25rem] text-sm md:text-base xl:flex-1">
          <h2 className="mb-7 text-xl/5 font-extraBold capitalize md:mb-8 md:text-3xl">
            {data.name.common || data.name.official}
          </h2>
          {/* country info */}
          <div className="2xl mb-11 flex flex-col gap-12 md:mb-[4.25rem] md:flex-row md:justify-between md:gap-0">
            {/* info pt.1 */}
            <div className="space-y-3">
              <p>
                <b className="font-bold">Native Name: </b>
                <span>
                  {!isObjectEmpty(data.name.nativeName)
                    ? getNativeName(data.name.nativeName)
                    : "--"}
                </span>
              </p>
              <p>
                <b className="font-bold">Population: </b>
                <span>{formatPopulation(data.population)}</span>
              </p>
              <p>
                <b className="font-bold">Region: </b> <span>{data.region}</span>
              </p>
              <p>
                <b className="font-bold">Sub Region: </b>
                <span>{data.subregion ? data.subregion : "--"}</span>
              </p>
              <p>
                <b className="font-bold">Capital: </b>
                <span>
                  {!isArrayEmpty(data.capital) ? data.capital.join(", ") : "--"}
                </span>
              </p>
            </div>
            {/* info pt.2 */}
            <div className="space-y-3">
              <p>
                <b className="font-bold">Top Level Domain: </b>
                <span>
                  {!isArrayEmpty(data.tld) ? data.tld.join(", ") : "--"}
                </span>
              </p>
              <p>
                <b className="font-bold">Currencies: </b>
                <span>
                  {!isObjectEmpty(data.currencies)
                    ? getCurrencies(data.currencies)
                    : "--"}
                </span>
              </p>
              <p>
                <b className="font-bold">Languages: </b>
                <span>
                  {!isObjectEmpty(data.languages)
                    ? getLanguages(data.languages)
                    : "--"}
                </span>
              </p>
            </div>
          </div>
          {/* borders */}
          {/* TO DO FETCH FROM CODE */}
          <div className="flex flex-wrap items-center gap-2">
            <p>
              <b className="font-bold">Border Countries:</b>
            </p>
            <div className="flex flex-wrap gap-2">
              {data.borders.length > 0
                ? data.borders.map((ele) => (
                    <BorderCountryLink key={ele} countryCode={ele} />
                  ))
                : "--"}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
