export const Input = ({
  label,
  name,
  placeholder,
  inputHandler,
  error,
  value,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 ease-in-out">
      <p className="text-[#334155] text-[14px] font-semibold leading-4">
        {label} <span className="text-red-500">*</span>
      </p>

      <input
        value={value}
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={inputHandler}
        className={`w-full h-[44px] p-3 border-[1px] rounded-lg  focus:outline-none ${
          error[name]
            ? "focus:border-red-500 border-red-500"
            : "focus:border-[#0CA5E9]"
        }`}
      />
      <p
        className={`${
          error[name]
            ? "visible text-red-500 text-[14px] focus:border-red-500 "
            : "hidden"
        }`}
      >
        {error[name]}
      </p>
    </div>
  );
};
