import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useTheme } from "../contexts/ThemeContext/ThemeContext";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

function Root() {
  const { theme } = useTheme();

  return (
    <div className={`${theme} text-text`}>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
export default Root;
