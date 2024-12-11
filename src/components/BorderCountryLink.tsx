import { Link } from "react-router-dom";

function BorderCountryLink() {
  return (
    <li className="w-24 rounded-sm bg-light-accent text-center shadow transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <Link
        to={"/countries/french"}
        className="block py-1.5 text-xs/4 md:text-sm/4"
      >
        Netherlands
      </Link>
    </li>
  );
}
export default BorderCountryLink;
