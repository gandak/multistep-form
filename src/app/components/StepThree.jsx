import { UserIcon } from "lucide-react";
import { Input } from "./Input";
import { useState } from "react";

export const StepThree = ({ inputHandler, error, value }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      inputHandler({ target: { name: "image", value: file } });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      inputHandler({ target: { name: "image", value: file } });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

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
          value={value.birthDate}
          label="Date of birth"
          name="birthDate"
          inputHandler={inputHandler}
          error={error}
          type="date"
        />
        <p className="text-[#334155] text-[14px] font-semibold leading-4">
          Profile Image <span className="text-red-500">*</span>
        </p>
        <div
          className="bg-[#f8f8f8] h-[180px] rounded-lg p-4 flex flex-col items-center justify-center relative"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="w-32 h-32 object-cover rounded-full"
            />
          ) : (
            <>
              <div className="bg-white p-2 rounded-full w-[28px] h-[28px]">
                <img src="/imageIcon.svg" alt="" />
              </div>
              <p className="text-[#09090B] text-[14px]">Add image</p>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />
            </>
          )}
        </div>

        <p
          className={`${
            error.image
              ? "visible text-red-500 text-[14px] focus:border-red-500 "
              : "hidden"
          }`}
        >
          {error.image}
        </p>
      </div>
    </div>
  );
};
