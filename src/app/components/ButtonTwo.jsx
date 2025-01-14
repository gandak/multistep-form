import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export const ButtonTwo = ({ label, onClick, goBack }) => {
  return (
    <div className="w-full overflow-hidden flex justify-center gap-3">
      <button
        onClick={goBack}
        className="w-1/4 h-[44px] bg-white pt-[10px] pb-[10px] pl-[12px] pr-[12px] rounded-lg border-[1px] border-[#CBD5E1]"
      >
        <div className="flex justify-center items-center">
          <ChevronLeft />
          <p>Back</p>
        </div>
      </button>
      <button
        onClick={onClick}
        className="w-3/4 bg-black text-white h-[44px] pt-[10px] pb-[10px] pl-[12px] pr-[12px] rounded-lg"
      >
        <div className="flex justify-center items-center">
          <p>{label} 2/3</p>
          <ChevronRight />
        </div>
      </button>
    </div>
  );
};
