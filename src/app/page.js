"use client";

import { useState, useEffect } from "react";
import { ButtonOne } from "./components/ButtonOne";
import { ButtonTwo } from "./components/ButtonTwo";
import { ButtonThree } from "./components/ButtonThree";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { CompletedSteps } from "./components/CompletedSteps";
import * as motion from "motion/react-client";

export default function Home() {
  const [currentStep, setCurrenStep] = useState(0);
  const FormSteps = [StepOne, StepTwo, StepThree, CompletedSteps][currentStep];
  const Buttons = [ButtonOne, ButtonTwo, ButtonThree][currentStep];

  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: 10,
  };

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
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
      }}
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
    </motion.div>
  );
}
