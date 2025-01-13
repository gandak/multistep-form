export const Button = ({ label, onclick, state }) => {
  return (
    <div className="w-full overflow-hidden flex justify-center">
      <button className="w-full bg-black text-white h-[44px] pt-[10px] pb-[10px] pl-[12px] pr-[12px] rounded-lg">
        <div>
          <p>{label}</p>
          <ChevronRight />
        </div>
      </button>
    </div>
  );
};
