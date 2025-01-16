import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export const ButtonThree = ({
  setErrorMessage,
  currentStep,
  setCurrenStep,
  userInfo,
  label,
}) => {
  const checkIfAdult = (birthdate) => {
    let inputtedDate = birthdate.replaceAll("-", "");

    let year = Number(inputtedDate.substr(0, 4));

    let month = Number(inputtedDate.substr(4, 2));
    let day = Number(inputtedDate.substr(6, 2));

    let today = new Date();

    let age = today.getFullYear() - year;

    if (age == 18) {
      if (
        today.getMonth() + 1 < month ||
        (today.getMonth() + 1 == month && today.getDate() < day)
      ) {
        return false;
      }

      if (age < 18) {
        return false;
      } else return true;
    }
    localStorage.setItem("savedUserInfo", JSON.stringify(userInfo));
    localStorage.setItem("currentStep", currentStep);
  };

  const checkValue = () => {
    const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const emailPattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const checkError = {
      birthDate: !userInfo.birthDate
        ? "Date of birth field is empty"
        : !checkIfAdult(userInfo.birthDate)
        ? "You are not over 18"
        : "",
      image: !userInfo.image ? "You must upload your profile image" : "",
    };

    setErrorMessage(checkError);
    if (!Object.values(checkError).some((v) => v)) {
      setCurrenStep(currentStep + 1);
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
          <p>{label} 3/3</p>
          <ChevronRight />
        </div>
      </button>
    </div>
  );
};
