export const Input = ({ label, placeholder, inputHandler, error }) => {
  return (
    <div className="w-full flex flex-col gap-2 ease-in-out">
      <p className="text-[#334155] text-[14px] font-semibold leading-4">
        {label}
      </p>

      <input
        type="text"
        placeholder={placeholder}
        onChange={inputHandler}
        className={`w-full h-[44px] p-3 border-[1px] rounded-lg  focus:outline-none ${
          error ? "focus:border-red-500" : "focus:border-[#0CA5E9]"
        }`}
      />
    </div>
  );
};
