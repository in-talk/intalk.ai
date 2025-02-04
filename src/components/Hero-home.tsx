import { MorphingText } from "./ui/morphing-text";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MatrixButton from "./ui/MatrixButton";

export default function HeroHome() {
  return (
    <section className="flex flex-col-reverse md:flex-row md:p-10 sm:p-6" id="home">
      <div className="mx-auto max-w-6xl">
        {/* Hero content */}
        <div className="py-12 md:py-20 md:px-10">
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
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-right"
              >
              Revolutionizing Customer Interactions with AI-Powered Calling Bots—Delivering Smart, Human-Like Conversations That Work 24/7 to Enhance Customer Satisfaction and Drive Business Growth.
              </p>

              <div className="flex justify-center items-center">
                <div data-aos="fade-right">
                 <MatrixButton buttonText='Schdeule a demo'  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <div data-aos="fade-left" data-aos-duration="2000" className=" h-[500px]">
        <DotLottieReact src="/animations/robot.lottie" loop autoplay />
      </div>
     
    </section>
  );
}
