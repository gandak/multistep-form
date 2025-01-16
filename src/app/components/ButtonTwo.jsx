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
    const checkError = {
      email: !userInfo.email
        ? "Email field is empty"
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)
        ? "Email cannot contain special characters or numbers."
        : "",
      phone: !userInfo.phone.trim()
        ? "Phone number field is wrong"
        : /[a-zA-z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(userInfo.phone)
        ? "Your phone number can contain only numbers"
        : userInfo.phone.length !== 8
        ? "Your phone number must be contain 8 numbers"
        : "",
      password: !userInfo.password
        ? "Password field is empty."
        : userInfo.password.length < 6
        ? "Password must be contain 6 or more characters"
        : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])\S{8,16}$/.test(
            userInfo.password
          )
        ? "at least 1 number, 1 uppercase letter, 1 special character"
        : "",
      passwordConfirm: !userInfo.passwordConfirm
        ? "Confirm password field is empty."
        : userInfo.passwordConfirm !== userInfo.password
        ? "Password are not same. Please input same password"
        : "",
    };

    setErrorMessage(checkError);

    if (!Object.values(checkError).some((v) => v)) {
      setCurrenStep(currentStep + 1);
      localStorage.setItem("savedUserInfo", JSON.stringify(userInfo));
      localStorage.setItem("currentStep", currentStep);
    }
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
