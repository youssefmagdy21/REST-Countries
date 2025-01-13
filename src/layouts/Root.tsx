import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useTheme } from "../contexts/ThemeContext/ThemeContext";

function Root() {
  const { theme } = useTheme();

  return (
    <div className={`${theme} text-text`}>
      <Header />
      <Outlet />
    </div>
  );
}
export default Root;
