import BorderLink from "./BorderLink";

function BordersList({ borders }: { borders: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <p>
        <b className="font-bold">Border Countries:</b>
      </p>
      <div className="flex flex-wrap gap-2">
        {borders.length > 0
          ? borders.map((ele) => <BorderLink key={ele} countryCode={ele} />)
          : "--"}
      </div>
    </div>
  );
}

export default BordersList;
