export const Input = ({ label, name, placeholder, inputHandler, error }) => {
  const errorMessages = {
    empty: "This field cannot be empty.",
    firstName: "First name cannot contain special characters or numbers.",
    lastName: "Last name cannot contain special characters or numbers.",
    username: "This username is already taken. Please choose another one.",
  };

  return (
    <div className="w-full flex flex-col gap-2 ease-in-out">
      <p className="text-[#334155] text-[14px] font-semibold leading-4">
        {label}
      </p>

      <input
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
        {errorMessages[name]}
      </p>
    </div>
  );
};
