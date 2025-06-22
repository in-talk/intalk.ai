"use client";
import MediaThemeTailwindAudio from "player.style/tailwind-audio/react";
import { TextAnimate } from "./ui/text-animate";

function CallSample() {
  return (
    <section id="callSample" className="m-5 mb-[50px] lg:mb-5 p-3 lg:p-8 ">
      <div className="py-6 md:py-12">
        {/* Section header */}
        <div className="mx-auto max-w-3xl py-4 text-center md:py-4">
          <TextAnimate
            className="font-nacelle text-2xl font-semibold md:text-4xl text-gray-300"
            animation="blurInUp"
            by="character"
          >
            Experience AI-Powered Conversations
          </TextAnimate>
        </div>
        <div className="mx-auto my-[16px] lg:max-w-[75%]  pt-[1%] text-center">
          <h2 className=" text-lg lg:text-xl text-gray-200">
            Listen to how our AI-driven call agents handle real-world customer
            interactions seamlessly. With advanced machine learning, Intalk.ai
            delivers natural, efficient, and intelligent responses—enhancing
            customer experience and business efficiency.
          </h2>
        </div>
      </div>
      <div className="flex  flex-col lg:flex-row items-center gap-8 justify-center ">
        <div className="flex flex-col gap-4 lg:order-2 order-1  lg:pt-10 justify-center">
          <MediaThemeTailwindAudio className="w-80">
            <audio
              slot="media"
              src="/audios/call.mp3"
              playsInline
              preload="auto"
            ></audio>
          </MediaThemeTailwindAudio>

          {/* <MediaThemeTailwindAudio className="w-80">
            <audio
              slot="media"
              src="/audios/call.mp3"
              playsInline
              preload="auto"
            ></audio>
          </MediaThemeTailwindAudio> */}
        </div>
      </div>
    </section>
  );
}

export default CallSample;
