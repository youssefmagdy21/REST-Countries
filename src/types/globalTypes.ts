export type TCountry = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  region: string;
  population: number;
};

export type TDetailedCountry = TCountry & {
  subregion: string;
  borders: string[];
  tld: string[];
  languages: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
};

export type TRegion = "africa" | "america" | "asia" | "europe" | "oceania";
