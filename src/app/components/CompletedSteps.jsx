export const CompletedSteps = () => {
  localStorage.removeItem("savedUserInfo");
  localStorage.removeItem("currentStep");
  return (
    <div className="w-full">
      <div className="w-full pb-[28px]">
        <img src="/pinecone.png" alt="" />
        <h1 className="font-bold text-[#202124] text-[26px] font-semibold">
          You're All Set
          <span role="img" aria-label="fire">
            🔥
          </span>
        </h1>
        <p className="text-[#8E8E8E]">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
