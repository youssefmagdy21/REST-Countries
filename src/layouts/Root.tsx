import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <h1>Root Layout Fixed View</h1>
      <Outlet />
    </>
  );
}
export default Root;
