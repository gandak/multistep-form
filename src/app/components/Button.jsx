import { ChevronRight } from "lucide-react";

export const Button = ({ label, onClick }) => {
  return (
    <div className="w-full overflow-hidden flex justify-center">
      <button
        onClick={onClick}
        className="w-full bg-black text-white h-[44px] pt-[10px] pb-[10px] pl-[12px] pr-[12px] rounded-lg"
      >
        <div className="flex justify-center items-center">
          <p>{label}</p>
          <ChevronRight />
        </div>
      </button>
    </div>
  );
};
