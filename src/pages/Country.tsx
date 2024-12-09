// import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import BorderCountryLink from "../components/BorderCountryLink";

function Country() {
  // const { countryName } = useParams();
  return (
    <main className="min-h-[calc(100vh-80px)] bg-light-primary">
      {/* container */}
      <div className="h-full px-7 py-10 md:px-[4.75rem] md:py-[4.75rem]">
        <BackButton />
        {/* country details */}
        <section className="mt-16 flex flex-col gap-12">
          <img
            src="https://flagcdn.com/de.svg"
            alt=""
            className="h-[228px] w-full object-cover"
          />
          {/* text content */}
          <div>
            {/* country info */}
            <h2 className="mb-7 text-xl/5 font-extraBold">Germany</h2>
            <div className="mb-11 flex flex-col gap-12">
              {/* info pt.1 */}
              <div className="space-y-4 text-base/4">
                <p>
                  <strong className="font-bold">Native Name:</strong>{" "}
                  <span>Deutchland</span>
                </p>
                <p>
                  <strong className="font-bold">Population:</strong>{" "}
                  <span>81,770,900</span>
                </p>
                <p>
                  <strong className="font-bold">Region:</strong>{" "}
                  <span>Europe</span>
                </p>
                <p>
                  <strong className="font-bold">Sub Region:</strong>{" "}
                  <span>Westren Europe</span>
                </p>
                <p>
                  <strong className="font-bold">Capital:</strong>{" "}
                  <span>Berlin</span>
                </p>
              </div>
              {/* info pt.2 */}
              <div className="space-y-4 text-base/4">
                <p>
                  <strong className="font-bold">Top Level Domain:</strong>{" "}
                  <span>.du</span>
                </p>
                <p>
                  <strong className="font-bold">Currencies:</strong>{" "}
                  <span>Euro</span>
                </p>
                <p>
                  <strong className="font-bold">Languages:</strong>{" "}
                  <span>German, English</span>
                </p>
              </div>
            </div>
            {/* borders */}
            <div className="flex flex-col gap-5">
              <p className="text-base/4">
                <strong className="font-bold">Border Countries:</strong>
              </p>
              <ul className="flex gap-2 text-sm/4">
                <BorderCountryLink />
                <BorderCountryLink />
                <BorderCountryLink />
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
export default Country;
