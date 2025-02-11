import { MorphingText } from "./ui/morphing-text";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MatrixButton from "./ui/MatrixButton";
import PlayButton from "./PlayButton";

export default function HeroHome() {
  return (
    <section
      className="md:p-10 sm:p-6 h-[90vh]"
      id="home"
    >
      <video autoPlay loop muted playsInline controls={false} className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2">
        <source src="/videos/robot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50 p-6 rounded-lg">
        {/* Hero content */}
        <div className="py-12 md:pt-30 md:pb-0 md:px-10">
          {/* Section header */}
          <div className="pb-7 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-right"
            >
              AI-Driven tools for
            </h1>
            <MorphingText
              texts={["Call centers", "Call Agents", "Bots", " Products"]}
            />
            <div className="mx-auto mt-4 max-w-3xl px-5">
              <p
                className="mb-8 text-xl text-indigo-100"
                data-aos="fade-right"
              >
                Revolutionizing Customer Interactions with AI-Powered Calling
                Bots—Delivering Smart, Human-Like Conversations That Work 24/7
                to Enhance Customer Satisfaction and Drive Business Growth.
              </p>

              <div className="flex justify-center items-center">
                <div data-aos="fade-right">
                  <MatrixButton buttonText="Schdeule a demo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 md:left-4 md:bottom-4">
         <PlayButton />
      </div>

      
    </section>
  );
}
