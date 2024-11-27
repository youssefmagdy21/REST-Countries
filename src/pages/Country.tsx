import { useParams } from "react-router-dom";

function Country() {
  const { countryName } = useParams();
  return <div>Country Page -- {countryName}</div>;
}
export default Country;
