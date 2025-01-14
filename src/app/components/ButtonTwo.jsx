import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export const ButtonTwo = ({
  setErrorMessage,
  currentStep,
  setCurrenStep,
  userInfo,
  label,
}) => {
  const checkValue = () => {
    const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const checkError = {
      email: !userInfo.email
        ? "Email field is empty"
        : /[^a-zA-Z]/.test(userInfo.email)
        ? "Email cannot contain special characters or numbers."
        : "",
      phone: !userInfo.phone.length ? "Your phone number is wrong" : "",
      // password: !userInfo.username
      //   ? "Username field is empty."
      //   : userInfo.username.length < 6
      //   ? "Username must be contain 6 or more characters"
      //   : /^\d+$/.test(userInfo.username)
      //   ? "Username cannot be only numbers"
      //   : specialCharacters.test(userInfo.username)
      //   ? "Username cannot contain special characters"
      //   : "",
    };

    setErrorMessage(checkError);
    if (!Object.values(checkError).some((v) => v))
      setCurrenStep(currentStep + 1);
  };

  const goBack = () => {
    setCurrenStep(currentStep - 1);
  };

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
        onClick={checkValue}
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