import { Input } from "./Input";

export const StepOne = ({ inputHandler, error, value }) => {
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
      <div className="flex flex-col gap-3">
        <Input
          value={value.firstName}
          label="First name"
          name="firstName"
          placeholder="Your first name"
          inputHandler={inputHandler}
          error={error}
          type="text"
        />
        <Input
          value={value.lastName}
          label="Last name"
          name="lastName"
          placeholder="Your last name"
          inputHandler={inputHandler}
          error={error}
          type="text"
        />
        <Input
          value={value.username}
          label="Username"
          name="username"
          placeholder="Username"
          inputHandler={inputHandler}
          error={error}
          type="text"
        />
      </div>
    </div>
  );
};
