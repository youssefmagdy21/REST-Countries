import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Root() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-5rem)] overflow-auto bg-light-primary px-7 pb-14 md:px-[4.75rem]">
        <Outlet />
      </main>
    </>
  );
}
export default Root;
