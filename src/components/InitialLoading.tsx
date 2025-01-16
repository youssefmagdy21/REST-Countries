import loadingSpinner from "../assets/loading-spinner.svg";
import { useTheme } from "../contexts/ThemeContext/ThemeContext";

export default function InitialLoading() {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme} flex h-screen w-full flex-col items-center justify-center gap-5 bg-background px-1 text-center`}
    >
      <img src={loadingSpinner} alt="loading spinner" width={150} />
      <h1 className="text-xl font-extraBold text-text sm:text-3xl">
        ⏳Page will load very soon⏳
      </h1>
    </div>
  );
}
