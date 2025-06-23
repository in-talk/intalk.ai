import { MorphingText } from "./ui/morphing-text";
import MatrixButton from "./ui/MatrixButton";
import PlayButton from "./PlayButton";
import { useState } from "react";
import DemoDialog from "./DemoDialog";

export default function HeroHome() {
  const [openDemoForm, setOpenDemoForm] = useState(false);
  return (
    <section className="md:p-10 sm:p-6 h-[90vh]" id="home">
      <video
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
      >
        <source src="/videos/robot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50 p-6 rounded-lg">
        {/* Hero content */}
        <div className="py-12 md:pt-30 md:pb-0 md:px-10">
          {/* Section header */}
          <div className="pb-7 text-center md:pb-20" data-aos="fade-down">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              AI voice bot for Telemarketing Industry
            </h1>
            <MorphingText
              texts={[
                "Cloud-based",
                "Efficiency",
                "Compatibility",
                "Consistent",
                "Precision",
              ]}
            />
            {/* <div className="mx-auto md:mt-4 max-w-3xl px-5">
              <p className="mb-8  text-xl md:text-2xl text-gray-200">
                Revolutionizing Customer Interactions with AI-Powered Calling
                Bots—Delivering Smart, Human-Like Conversations That Work 24/7
                to Enhance Customer Satisfaction and Drive Business Growth.
              </p>
            </div> */}
            <MatrixButton
              buttonText="Schedule a demo"
              onClick={() => setOpenDemoForm(true)}
            />
          </div>
        </div>
      </div>
      <div className=" absolute bottom-2 flex justify-center items-center">
        <div data-aos="fade-up">
          <PlayButton />
        </div>
      </div>
      <DemoDialog
        isOpen={openDemoForm}
        onClose={() => setOpenDemoForm(false)}
      />
    </section>
  );
}
