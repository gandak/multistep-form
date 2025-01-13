"use client";
import Image from "next/image";
import { Input } from "./components/Input";
import { useState } from "react";
import { Button } from "./components/Button";

export default function Home() {
  const [error, setError] = useState(0);
  const [state, setState] = useState("default");
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    birthDate: "",
  });

  const getFirstName = (e) => {
    value.password = e.target.value;
    setValue({ ...value });
  };

  const getLastName = (e) => {
    console.log("Last name");
  };

  const getPassword = (e) => {
    console.log("Password");
  };

  const checkValues = () => {};

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
            placeholder="Your first name"
            inputHandler={getFirstName}
            error={error}
          />
          <Input
            label="Last name"
            placeholder="Your last name"
            inputHandler={getLastName}
          />
          <Input
            label="Username"
            placeholder="Username"
            inputHandler={getPassword}
          />
        </div>
      </div>
      <Button label="Continue" onClick={checkValues} state={state} />
    </div>
  );
}
