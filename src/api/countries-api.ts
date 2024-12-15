import { TCountry } from "../types/globalTypes";

const API_URL = "https://restcountries.com/v3.1";

export async function getAllCountries(): Promise<TCountry[]> {
  const res = await fetch(
    `${API_URL}/all?fields=name,flags,population,region,capital`,
  );
  if (!res.ok) {
    throw new Error("Somthing went wrong");
  }

  return res.json();
}

// export async function getCountriesByRegion(region: TRegion) {}

// export async function getCountryByName(name: string) {}
