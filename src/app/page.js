"use client";

import { useState } from "react";
import { ButtonOne } from "./components/ButtonOne";
import { ButtonTwo } from "./components/ButtonTwo";
import { ButtonThree } from "./components/ButtonThree";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";

export default function Home() {
  const [currentStep, setCurrenStep] = useState(0);
  const FormSteps = [StepOne, StepTwo, StepThree][currentStep];
  const Buttons = [ButtonOne, ButtonTwo, ButtonThree][currentStep];

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    phone: "",
    birthDate: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    birthDate: "",
  });

  const inputHandler = (e) => {
    userInfo[e.target.name] = e.target.value;
    setUserInfo({ ...userInfo });
  };

  const goBack = () => {
    setCurrenStep(currentStep - 1);
  };

  return (
    <div className="bg-white w-[470px] h-[655px] p-8 flex flex-col items-center justify-between rounded-lg">
      <FormSteps
        value={userInfo}
        inputHandler={inputHandler}
        error={errorMessage}
      />
      <Buttons
        setErrorMessage={setErrorMessage}
        currentStep={currentStep}
        setCurrenStep={setCurrenStep}
        userInfo={userInfo}
        label="Continue"
        goBack={goBack}
      />
    </div>
  );
}
