import { ChevronRight } from "lucide-react";

export const ButtonOne = ({
  setErrorMessage,
  currentStep,
  setCurrenStep,
  userInfo,
  label,
}) => {
  const checkValue = () => {
    // test123-с зөвхөн тоог эсвэл үсэг ялгаж авах
    // console.log("test123".match(/[\p{Number}\p{Mark}]+/gu));
    // console.log("test123".match(/[\p{Letter}\p{Mark}]+/gu));

    // /[0-9]/.test(userInfo.firstName)

    const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const checkError = {
      firstName:
        userInfo.firstName.length < 3
          ? "Your name must be contain 3 or more characters"
          : !userInfo.firstName || /[^a-zA-Z]/.test(userInfo.firstName)
          ? "First name cannot contain special characters or numbers."
          : "",
      lastName:
        userInfo.lastName.length < 3
          ? "Your name must be contain 3 or more characters"
          : !userInfo.lastName || /[^a-zA-Z]/.test(userInfo.lastName)
          ? "Last name cannot contain special characters or numbers."
          : "",
      username: !userInfo.username
        ? "Username field is empty."
        : userInfo.username.length < 6
        ? "Username must be contain 6 or more characters"
        : /^\d+$/.test(userInfo.username)
        ? "Username cannot be only numbers"
        : specialCharacters.test(userInfo.username)
        ? "Username cannot contain special characters"
        : "",
    };

    setErrorMessage(checkError);
    if (!Object.values(checkError).some((v) => v))
      setCurrenStep(currentStep + 1);
  };

  return (
    <div className="w-full overflow-hidden flex justify-center">
      <button
        onClick={checkValue}
        className="w-full bg-black text-white h-[44px] pt-[10px] pb-[10px] pl-[12px] pr-[12px] rounded-lg"
      >
        <div className="flex justify-center items-center">
          <p>{label} 1/3</p>
          <ChevronRight />
        </div>
      </button>
    </div>
  );
};
