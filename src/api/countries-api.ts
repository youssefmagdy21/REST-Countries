import {
  TCountries,
  TDetailedCountry,
  TNativeName,
} from "../types/globalTypes";

const API_URL = "https://restcountries.com/v3.1";
const FIELDS = "name,flags,population,region,capital,cca3";
const DETAILED_FIELDS = `${FIELDS},subregion,borders,tld,languages,currencies`;

export async function getAllCountries() {
  const res = await fetch(`${API_URL}/all?fields=${FIELDS}`);
  if (!res.ok) {
    throw new Error("Somthing went wrong");
  }
  const data: TCountries = await res.json();

  return data;
}

export async function getCountryByName(name: string) {
  const res = await fetch(
    `${API_URL}/name/${name}?fullText=true&fields=${DETAILED_FIELDS}`,
  );
  if (!res.ok) {
    throw new Error("Somthing went wrong");
  }

  const data: TDetailedCountry[] = await res.json();

  return data[0];
}
type TBordersMapInfo = {
  name: {
    common: string;
  };
  cca3: string;
};

export async function getBordersMapInfo() {
  const res = await fetch(`${API_URL}/all?fields=name,cca3`);
  const data: TBordersMapInfo[] = await res.json();

  return data;
}

type TBordersMap = {
  name: {
    common: string;
    official: string;
    nativeName: TNativeName;
  };
  cca3: string;
};

export async function generateBordersMap() {
  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,cca3`,
  );
  if (!res.ok) {
    throw new Error("Somthing went wrong");
  }
  const data: TBordersMap[] = await res.json();

  const test: [string, string][] = data.map((ele) => [
    ele.cca3,
    ele.name.common,
  ]);

  return new Map<string, string>(test);
}
