import Image from "next/image";
import { Input } from "./components/Input";

export default function Home() {
  const inputHander = () => {};
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
            placeholder="Please input your first name"
          />
          <Input label="Last name" placeholder="Please input your last name" />
          <Input label="Username" placeholder="Please input your username" />
        </div>
      </div>
      <div className="w-full overflow-hidden flex justify-center">
        <button className="w-full bg-black text-white h-[44px] pt-[10px] pb-[10px] pl-[12px] pr-[12px] rounded-lg">
          Continue 1/3
        </button>
      </div>
    </div>
  );
}
