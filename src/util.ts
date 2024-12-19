import { TCurrencies, TLanguages, TNativeName } from "./types/globalTypes";

const getNativeName = (name: TNativeName) =>
  Object.values(name).reverse()[0].common;

const getCurrencies = (currencies: TCurrencies) =>
  Object.values(currencies)
    .map((ele) => ele.name)
    .join(", ");

const getLanguages = (languages: TLanguages) =>
  Object.values(languages).reverse().join(", ");

const formatPopulation = (population: number) =>
  new Intl.NumberFormat().format(population);

export { getNativeName, getCurrencies, getLanguages, formatPopulation };
