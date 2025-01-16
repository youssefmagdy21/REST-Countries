import loadingSpinner from "../assets/loading-spinner.svg";

export default function LoadingSpinner() {
  return (
    <section className="flex h-[calc(100vh-5rem)] w-full items-center justify-center bg-background">
      <img src={loadingSpinner} alt="loading spinner" width={150} />
    </section>
  );
}
