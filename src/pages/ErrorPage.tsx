import {
  isRouteErrorResponse,
  useLocation,
  useRouteError,
} from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext/ThemeContext";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  const { theme } = useTheme();

  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
      ? error.message
      : "";
  const { pathname } = useLocation();
  console.log(pathname);
  // className="min-h-[calc(100vh-5rem)] overflow-auto bg-background px-7 pb-14 md:px-[4.75rem]"
  const regex = /\/countries\/[A-Za-z]+/i;
  console.log(regex.test(pathname));
  return (
    <main
      // className={`min-h-[calc(100vh-5rem)] w-full bg-background px-1 text-text ${theme} grid place-content-center gap-5 text-center`}
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
