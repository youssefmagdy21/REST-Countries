import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-center gap-2 rounded-md bg-accent px-6 py-2 text-sm/4 transition-transform duration-300 hover:-translate-y-1 md:gap-[0.625rem] md:px-9 md:py-3 md:text-base/4"
      style={{ boxShadow: "0 0 4px 2px rgba(0,0,0,0.1)" }}
      onClick={() => navigate(-1)}
    >
      <MdKeyboardBackspace className="h-4 w-5" />
      <span>Back</span>
    </button>
  );
}
export default BackButton;
