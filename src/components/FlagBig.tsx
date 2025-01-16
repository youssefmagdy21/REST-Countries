import { TFlags } from "../types/global-types";

function FlagBig({ flagInfo }: { flagInfo: TFlags }) {
  return (
    <div className="h-[14.25rem] w-full max-w-[35rem] bg-accent shadow-sm sm:h-[25rem]">
      <img
        src={flagInfo.svg}
        alt={flagInfo.alt}
        width={560}
        height={400}
        className="h-full w-full"
      />
    </div>
  );
}

export default FlagBig;
