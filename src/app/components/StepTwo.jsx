import { UserIcon } from "lucide-react";
import { Input } from "./Input";

export const StepTwo = ({ inputHandler, error, value }) => {
  console.log(value);
  return (
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
          value={value.email}
          label="Email"
          name="email"
          placeholder="Your email"
          inputHandler={inputHandler}
          error={error}
        />
        <Input
          value={value.phone}
          label="Phone Number"
          name="phone"
          placeholder="Your phone number"
          inputHandler={inputHandler}
          error={error}
        />
        <Input
          value={value.password}
          label="Password"
          name="password"
          placeholder="Password"
          inputHandler={inputHandler}
          error={error}
        />
        <Input
          value={value.passwordConfirm}
          label="Confirm Password"
          name="passwordConfirm"
          placeholder="Password"
          inputHandler={inputHandler}
          error={error}
        />
      </div>
    </div>
  );
};
