import { useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext/ThemeContext";
import { useRouteErrorMessage } from "../hooks/useRouteErrorMessage";

export default function ErrorPage() {
  const { theme } = useTheme();
  const errorMessage = useRouteErrorMessage();

  const { pathname } = useLocation();
  const regex = /\/countries\/[A-Za-z]+/i;

  return (
    <main
      className={`grid w-full place-content-center gap-5 bg-background px-1 text-center text-text ${regex.test(pathname) ? "h-[calc(100vh-5rem)]" : "h-screen " + theme}`}
    >
      <h1 className="text-6xl font-extraBold">Oops!</h1>
      <p className="text-2xl">Sorry, something went wrong.</p>
      <p className="text-input">
        <i>{errorMessage}</i>
      </p>
    </main>
  );
}
