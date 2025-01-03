import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useTheme } from "../context/ThemeContext";

function Root() {
  const { theme } = useTheme();
  return (
    <div className={`${theme}`}>
      <Header />
      <main className="min-h-[calc(100vh-5rem)] overflow-auto bg-background px-7 pb-14 md:px-[4.75rem]">
        <Outlet />
      </main>
    </div>
  );
}
export default Root;
