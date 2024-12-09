import { Link } from "react-router-dom";

function BorderCountryLink() {
  return (
    <li className="w-24 rounded-sm bg-light-accent py-2 text-center shadow transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <Link to={""} className="block w-full">
        France
      </Link>
    </li>
  );
}
export default BorderCountryLink;
