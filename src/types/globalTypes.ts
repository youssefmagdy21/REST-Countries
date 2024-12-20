export type TCountry = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: TNativeName;
  };
  capital: string[];
  region: string;
  population: number;
};

export type TDetailedCountry = TCountry & {
  subregion: string;
  borders: string[];
  tld: string[];
  languages: TLanguages;
  currencies: TCurrencies;
};
export type TNativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
};

export type TCurrencies = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

export type TLanguages = {
  [key: string]: string;
};

export type TCountries = TCountry[];

export type TRegion =
  | "africa"
  | "americas"
  | "asia"
  | "europe"
  | "oceania"
  | "antarctic";
