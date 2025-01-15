import { TCountries, TDetailedCountry } from "../types/global-types";

const API_URL = "https://restcountries.com/v3.1";
const FIELDS = "name,flags,population,region,capital,cca3";
const DETAILED_FIELDS = `${FIELDS},subregion,borders,tld,languages,currencies`;

function handleFetchError(res: Response) {
  if (res.status === 404) throw new Error("Not Found");
  else if (res.status === 500) throw new Error("Internal Server Error");
  else throw new Error("Network response was not ok");
}

export async function getCountries() {
  const res = await fetch(`${API_URL}/all?fields=${FIELDS}`);
  if (!res.ok) {
    handleFetchError(res);
  }
  const data: TCountries = await res.json();

  return data;
}

export async function getCountryByName(name: string) {
  const res = await fetch(
    `${API_URL}/name/${name}?fullText=true&fields=${DETAILED_FIELDS}`,
  );
  if (!res.ok) {
    handleFetchError(res);
  }
  const data: TDetailedCountry[] = await res.json();

  return data[0];
}
