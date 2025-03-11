import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

function Waves() {
  return (
    <div className="relative md:h-[700px]">
      <div className="w-full hidden md:block md:rotate-180 absolute bottom-0">
        <DotLottieReact src="/animations/topwaves.lottie" loop autoplay />
      </div>

      <div className="mx-auto max-w-3xl  px-[30px] md:absolute md:left-[25%] -bottom-[20px] pt-12 pb-12 text-center md:pb-20">
        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
          <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            Tailored Workflows
          </span>
        </div>
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-3xl">
          Streamline Your Customer Support Journey
        </h2>
        <p className="text-lg text-gray-200">
          Our intuitive and powerful interface lets you start automating
          customer interactions in minutes. Seamlessly integrate our AI bots
          with your existing systems and provide human-like support across
          multiple languages and platforms.
        </p>
      </div>
    </div>
  );
}

export default Waves;
