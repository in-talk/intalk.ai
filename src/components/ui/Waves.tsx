import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

function Waves() {
  return (
    <div className="w-full md:rotate-180">
      <DotLottieReact src="/animations/topwaves.lottie" loop autoplay />
    </div>
  );
}

export default Waves;
