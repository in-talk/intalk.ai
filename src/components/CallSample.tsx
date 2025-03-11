"use client"
import MediaThemeTailwindAudio from "player.style/tailwind-audio/react";
import { TextAnimate } from "./ui/text-animate";

function CallSample() {
  return (
    <section
      id="callSample"
      className="m-5 mb-[50px] lg:mb-5 p-3 lg:p-8 lg:h-screen"
    >
      <div className="py-6 md:py-12">
        {/* Section header */}
        <div className="mx-auto max-w-3xl py-4 text-center md:py-4">
          <TextAnimate
            className="font-nacelle text-2xl font-semibold md:text-4xl text-gray-300"
            animation="blurInUp"
            by="character"
          >
            AI Call Agents in-action
          </TextAnimate>
        </div>
        <div className="mx-auto my-[16px] lg:max-w-[75%]  pt-[1%] text-center">
          <h2 className="hidden lg:block text-lg lg:text-xl text-gray-200">
            Intalk revolutionizes customer interactions by automating
            conversations with ease. Powered by advanced AI and machine
            learning, Intalk.ai seamlessly manages diverse scenarios, delivers
            personalized and efficient support, and gathers valuable insights to
            enhance products and services.
          </h2>
          <h2 className=" lg:hidden text-lg lg:text-xl text-gray-200" >
            Intalk.ai automates customer interactions with AI, handling diverse
            scenarios, delivering personalized support, and gathering insights
            to improve services.
          </h2>
        </div>
      </div>
      <div className="flex  flex-col lg:flex-row items-center gap-8 justify-center ">
        <div className=" order-2 lg:order-1">
          <p className="text-lg lg:text-xl text-gray-200 p-3">
            {" "}
            Boost efficiency, productivity, and results with Intalk.ai’s
            automated outbound calls.
          </p>
          <ul className=" mt-5 list-disc list-inside pl-4">
            <li className="text-lg lg:py-3">Smart Telemarketing</li>
            <li className="text-lg lg:py-3">Engaging Customer Conversations</li>
            <li className="text-lg lg:py-3">Timely Insurance Renewals</li>
            <li className="text-lg lg:py-3">Reliable Payment Reminders</li>
            <li className="text-lg lg:py-3">Maximized Productivity</li>
          </ul>
        </div>
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
