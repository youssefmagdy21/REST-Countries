function CountriesGrid({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-8 grid grid-cols-[repeat(auto-fit,_16.5rem)] justify-center gap-10 md:mt-12 md:justify-between md:gap-x-5 md:gap-y-[4.625rem] lg:gap-x-7">
      {children}
    </section>
  );
}
export default CountriesGrid;
