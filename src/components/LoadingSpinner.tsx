export default function LoadingSpinner() {
  return (
    <section className="flex h-[calc(100vh-(5rem+10rem))] w-full items-center justify-center md:h-[calc(100vh-(5rem+6.5rem))]">
      <img src="/loading-spinner.svg" alt="loading spinner" width={150} />
    </section>
  );
}
