"use client";
import { Input } from "./components/Input";
import { useState } from "react";
import { Button } from "./components/Button";

export default function Home() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    birthDate: "",
  });

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    username: false,
    password: false,
    email: false,
    phone: false,
    birthDate: false,
  });

  const inputHandler = (e) => {
    userInfo[e.target.name] = e.target.value;
    setUserInfo({ ...userInfo });
  };

  const checkValue = () => {
    const checkError = {
      firstName:
        !userInfo.firstName || /[0-9]/.test(userInfo.firstName) ? true : false,
      lastName:
        !userInfo.lastName || /[^a-zA-Z]/.test(userInfo.lastName)
          ? true
          : false,
      username: !userInfo.username ? true : false,
    };

    setError(checkError);
  };

  return (
    <div className="bg-white w-[470px] h-[655px] p-8 flex flex-col items-center justify-between rounded-lg">
      <div className="w-full">
        <div className="w-full pb-[28px]">
          <img src="/pinecone.png" alt="" />
          <h1 className="font-bold text-[#202124] text-[26px] font-semibold">
            Join Us! smile
          </h1>
          <p className="text-[#8E8E8E]">
            Please provide all current information accurately
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Input
            label="First name"
            name="firstName"
            placeholder="Your first name"
            inputHandler={inputHandler}
            error={error}
          />
          <Input
            label="Last name"
            name="lastName"
            placeholder="Your last name"
            inputHandler={inputHandler}
            error={error}
          />
          <Input
            label="Username"
            name="username"
            placeholder="Username"
            inputHandler={inputHandler}
            error={error}
          />
        </div>
      </div>
      <Button label="Continue" onClick={checkValue} />
    </div>
  );
}
