"use client";

import { useState, useEffect } from "react";
import { ButtonOne } from "./components/ButtonOne";
import { ButtonTwo } from "./components/ButtonTwo";
import { ButtonThree } from "./components/ButtonThree";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { CompletedSteps } from "./components/CompletedSteps";

export default function Home() {
  const [currentStep, setCurrenStep] = useState(0);
  const FormSteps = [StepOne, StepTwo, StepThree, CompletedSteps][currentStep];
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
    image: "",
  });

  // console.log(userInfo);

  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    birthDate: "",
    name: "",
  });

  const inputHandler = (e) => {
    userInfo[e.target.name] = e.target.value;
    setUserInfo({ ...userInfo });
  };

  useEffect(() => {
    const savedUserInfo = JSON.parse(localStorage.getItem("savedUserInfo"));

    const savedCurrentStep = JSON.parse(localStorage.getItem("currentStep"));

    if (savedCurrentStep) {
      setUserInfo({ ...savedUserInfo });

      setCurrenStep(savedCurrentStep);
    }
  }, []);

  return (
    <div
      className={`bg-white w-[470px] ${
        currentStep < 3 ? "h-[655px]" : "h-[193px]"
      } p-8 flex flex-col items-center justify-between rounded-lg`}
    >
      <FormSteps
        value={userInfo}
        inputHandler={inputHandler}
        error={errorMessage}
      />
      {currentStep < 3 ? (
        <Buttons
          setErrorMessage={setErrorMessage}
          currentStep={currentStep}
          setCurrenStep={setCurrenStep}
          userInfo={userInfo}
          label="Continue"
        />
      ) : (
        ""
      )}
    </div>
  );
}
