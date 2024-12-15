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
      eng: {
        official: string;
        common: string;
      };
    };
  };
  capital: [string];
  region: string;
  population: number;
};

export type TRegion = "africa" | "america" | "asia" | "europe" | "oceania";
