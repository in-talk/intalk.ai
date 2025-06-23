import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useRouter } from "next/router";
import React from "react";

function PlayButton() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center ">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" cursor-pointer h-[100px] w-[100px] lg:h-[150px] lg:w-[150px]"
        onClick={() => router.push("#features")}
      >
        <DotLottieReact src="/animations/play.lottie" loop autoplay />
      </div>
    </div>
  );
}

export default PlayButton;
