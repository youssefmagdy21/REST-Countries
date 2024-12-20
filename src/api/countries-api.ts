import { TCountries, TDetailedCountry } from "../types/globalTypes";

const API_URL = "https://restcountries.com/v3.1";
const FIELDS = "name,flags,population,region,capital";
const DETAILED_FIELDS =
  "name,flags,population,region,capital,subregion,borders,tld,languages,currencies";

export async function getAllCountries(): Promise<TCountries> {
  const res = await fetch(`${API_URL}/all?fields=${FIELDS}`);
  if (!res.ok) {
    throw new Error("Somthing went wrong");
  }
  const data: TCountries = await res.json();

  return data;
}

// export async function getCountriesByRegion(
//   region: TRegion,
// ): Promise<TCountries> {
//   const res = await fetch(`${API_URL}/region/${region}?fields=${FIELDS}`);
//   if (!res.ok) {
//     throw new Error("Somthing went wrong");
//   }

//   const data: TCountries = await res.json();

//   return data;
// }

export async function getCountryByName(
  name: string,
): Promise<TDetailedCountry> {
  const res = await fetch(
    `${API_URL}/name/${name}?fullText=true&fields=${DETAILED_FIELDS}`,
  );
  if (!res.ok) {
    throw new Error("Somthing went wrong");
  }

  const data: TDetailedCountry[] = await res.json();

  return data[0];
}
