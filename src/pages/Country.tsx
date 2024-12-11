import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import BorderCountryLink from "../components/BorderCountryLink";

function Country() {
  const { countryName } = useParams();
  return (
    <main className="min-h-[calc(100vh-80px)] bg-light-primary px-7 md:px-[4.75rem]">
      <div className="pt-10 md:pt-[4.75rem]">
        <BackButton />
      </div>
      {/* grid container --> py 60px / 78px */}
      <section className="flex flex-col items-start gap-12 py-[3.75rem] md:py-20 xl:flex-row xl:items-center xl:gap-[108px]">
        {/* image */}
        <div className="max-w-[560px]">
          <img
            src="https://flagcdn.com/de.svg"
            alt=""
            className="h-[228px] w-full object-cover md:h-[400px]"
          />
        </div>
        {/* content */}
        <div className="w-full max-w-[980px] text-sm md:text-base xl:w-auto xl:flex-1">
          <h2 className="mb-7 text-xl/5 font-extraBold capitalize md:mb-8 md:text-3xl">
            {countryName}
          </h2>
          {/* country info */}
          <div className="2xl mb-11 flex flex-col gap-12 md:mb-[4.25rem] md:flex-row md:justify-between md:gap-0">
            {/* info pt.1 */}
            <div className="space-y-3">
              <p>
                <b className="font-bold">Native Name:</b>{" "}
                <span>Deutchland</span>
              </p>
              <p>
                <b className="font-bold">Population:</b> <span>81,770,900</span>
              </p>
              <p>
                <b className="font-bold">Region:</b> <span>Europe</span>
              </p>
              <p>
                <b className="font-bold">Sub Region:</b>{" "}
                <span>Westren Europe</span>
              </p>
              <p>
                <b className="font-bold">Capital:</b> <span>Berlin</span>
              </p>
            </div>
            {/* info pt.2 */}
            <div className="space-y-3">
              <p>
                <b className="font-bold">Top Level Domain:</b> <span>.du</span>
              </p>
              <p>
                <b className="font-bold">Currencies:</b> <span>Euro</span>
              </p>
              <p>
                <b className="font-bold">Languages:</b>{" "}
                <span>German, English, Dutch</span>
              </p>
            </div>
          </div>
          {/* borders */}
          <div className="flex flex-wrap items-center gap-3">
            <p>
              <b className="font-bold">Border Countries:</b>{" "}
            </p>
            <ul className="flex flex-wrap gap-2">
              <BorderCountryLink />
              <BorderCountryLink />
              <BorderCountryLink />
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Country;
