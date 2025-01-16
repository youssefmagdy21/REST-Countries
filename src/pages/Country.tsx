import { useLoaderData, useNavigation } from "react-router-dom";
import BackButton from "../components/BackButton";
import {
  formatPopulation,
  getCurrencies,
  getLanguages,
  getNativeName,
  isArrayEmpty,
  isObjectEmpty,
} from "../utils/util";
import LoadingSpinner from "../components/LoadingSpinner";
import { useCountryDetailsQuery } from "../queries/countryDetailsQuery";
import { TCountryLoader } from "../utils/countryLoader";
import BordersList from "../components/BordersList";
import FlagBig from "../components/FlagBig";

export default function Country() {
  const { countryName } = useLoaderData() as TCountryLoader;
  const countryInfo = useCountryDetailsQuery(countryName);
  const navigation = useNavigation();

  return (
    <main className="min-h-[calc(100vh-5rem)] overflow-auto bg-background px-7 pb-14 md:px-[4.75rem]">
      {navigation.state === "loading" ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="mt-10 md:mt-[4.75rem]">
            <BackButton />
          </div>
          <section className="mt-[3.75rem] flex flex-col items-start gap-12 md:mt-20 xl:flex-row xl:items-center xl:gap-[6.75rem]">
            <FlagBig flagInfo={countryInfo.flags} />
            {/* content */}
            <div className="w-full max-w-[61.25rem] text-sm md:text-base xl:flex-1">
              <h2 className="mb-7 text-xl/5 font-extraBold capitalize md:mb-8 md:text-3xl">
                {countryInfo.name.common || countryInfo.name.official}
              </h2>
              {/* country info */}
              <div className="2xl mb-11 flex flex-col gap-12 md:mb-[4.25rem] md:flex-row md:justify-between md:gap-0">
                {/* info pt.1 */}
                <div className="space-y-3">
                  <p>
                    <b className="font-bold">Native Name: </b>
                    <span>
                      {!isObjectEmpty(countryInfo.name.nativeName)
                        ? getNativeName(countryInfo.name.nativeName)
                        : "--"}
                    </span>
                  </p>
                  <p>
                    <b className="font-bold">Population: </b>
                    <span>{formatPopulation(countryInfo.population)}</span>
                  </p>
                  <p>
                    <b className="font-bold">Region: </b>{" "}
                    <span>{countryInfo.region}</span>
                  </p>
                  <p>
                    <b className="font-bold">Sub Region: </b>
                    <span>
                      {countryInfo.subregion ? countryInfo.subregion : "--"}
                    </span>
                  </p>
                  <p>
                    <b className="font-bold">Capital: </b>
                    <span>
                      {!isArrayEmpty(countryInfo.capital)
                        ? countryInfo.capital.join(", ")
                        : "--"}
                    </span>
                  </p>
                </div>
                {/* info pt.2 */}
                <div className="space-y-3">
                  <p>
                    <b className="font-bold">Top Level Domain: </b>
                    <span>
                      {!isArrayEmpty(countryInfo.tld)
                        ? countryInfo.tld.join(", ")
                        : "--"}
                    </span>
                  </p>
                  <p>
                    <b className="font-bold">Currencies: </b>
                    <span>
                      {!isObjectEmpty(countryInfo.currencies)
                        ? getCurrencies(countryInfo.currencies)
                        : "--"}
                    </span>
                  </p>
                  <p>
                    <b className="font-bold">Languages: </b>
                    <span>
                      {!isObjectEmpty(countryInfo.languages)
                        ? getLanguages(countryInfo.languages)
                        : "--"}
                    </span>
                  </p>
                </div>
              </div>

              <BordersList borders={countryInfo.borders} />
            </div>
          </section>
        </>
      )}
    </main>
  );
}
