import { Input } from "./Input";
import * as motion from "motion/react-client";

export const StepTwo = ({ inputHandler, error, value }) => {
  return (
    <div className="w-full">
      <div className="w-full pb-[28px]">
        <img src="/pinecone.png" alt="" />
        <h1 className="font-bold text-[#202124] text-[26px] font-semibold">
          Join Us!{" "}
          <span role="img" aria-label="smile">
            😎
          </span>
        </h1>
        <p className="text-[#8E8E8E]">
          Please provide all current information accurately
        </p>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-3"
      >
        <Input
          value={value.email}
          label="Email"
          name="email"
          placeholder="Your email"
          inputHandler={inputHandler}
          error={error}
          type="email"
        />
        <Input
          value={value.phone}
          label="Phone Number"
          name="phone"
          placeholder="Your phone number"
          inputHandler={inputHandler}
          error={error}
          type="text"
        />
        <Input
          value={value.password}
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
          inputHandler={inputHandler}
          error={error}
        />
        <Input
          value={value.passwordConfirm}
          type="password"
          label="Confirm Password"
          name="passwordConfirm"
          placeholder="Confirm password"
          inputHandler={inputHandler}
          error={error}
        />
      </motion.div>
    </div>
  );
};
