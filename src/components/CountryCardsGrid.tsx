import CountryCard from "./CountryCard";

function CountryCardsGrid() {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_264px)] justify-center gap-10 px-4 pb-8 md:justify-between md:gap-x-5 md:gap-y-[74px] md:px-[4.75rem] md:pb-12 lg:gap-x-7">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </section>
  );
}
export default CountryCardsGrid;
