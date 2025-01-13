import { TCurrencies, TLanguages, TNativeName } from "../types/global-types";

export const getNativeName = (name: TNativeName) => {
  const generatedName = Object.values(name).reverse()[0];

  return generatedName.common || generatedName.official;
};

export const getCurrencies = (currencies: TCurrencies) =>
  Object.values(currencies)
    .map((ele) => ele.name)
    .join(", ");

export const getLanguages = (languages: TLanguages) =>
  Object.values(languages).reverse().join(", ");

export const formatPopulation = (population: number) =>
  new Intl.NumberFormat().format(population);

export const isObjectEmpty = (obj: object) => JSON.stringify(obj) === "{}";

export const isArrayEmpty = <T>(arr: Array<T>) => arr.length <= 0;
