function CountryCard() {
  return (
    <div className="h-[336px] w-[264px] overflow-hidden rounded-md bg-white shadow-sm">
      <img
        src="https://flagcdn.com/de.svg"
        alt=""
        className="h-[160px] w-full object-cover"
      />
      <div className="px-6 py-8 text-sm/4">
        <h2 className="mb-4 text-base/4 font-extraBold">Germany</h2>
        <div className="space-y-2">
          <p>
            <strong className="font-bold">Population:</strong>{" "}
            <span>81,770,900</span>
          </p>
          <p>
            <strong className="font-bold">Region:</strong> <span>Europe</span>
          </p>
          <p>
            <strong className="font-bold">Capital:</strong> <span>Berlin</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default CountryCard;
