import * as motion from "motion/react-client";

export const CompletedSteps = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
      }}
      className="w-full"
    >
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
    </motion.div>
  );
};
