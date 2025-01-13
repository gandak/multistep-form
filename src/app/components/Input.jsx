export const Input = ({ label, placeholder }) => {
  return (
    <div className="w-full flex flex-col gap-2 ease-in-out">
      <p className="text-[#334155] text-[14px] font-semibold leading-4">
        {label}
      </p>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-[44px] p-3 border-[1px] rounded-lg outline-[#0CA5E9] outline-1"
      />
    </div>
  );
};
