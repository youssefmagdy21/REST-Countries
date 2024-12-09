import CountryCard from "./CountryCard";

function CountryCardsGrid() {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(264px,_1fr))] gap-10 px-4 md:gap-[70px] md:px-[4.75rem] lg:gap-[74px]">
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
