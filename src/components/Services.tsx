import { TextAnimate } from "@/src/components/ui/text-animate";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Services() {
  return (
    <section id="support" className=" m-5 relative" data-aos='fade-up'>
    <div className="md:absolute top-10 flex flex-col md:flex-row">
    <div className="w-full md:w-[50%]">
        <DotLottieReact src="/animations/Aicenter.lottie" loop autoplay />
      </div>
      <div className=" relative flex flex-col  gap-[30px] justify-center items-center md:items-start z-30  w-full md:w-[50%] h-[100%]   rounded-lg  shadow-xl ">
        <TextAnimate
          className="font-nacelle text-2xl font-semibold md:text-3xl text-gray-300"
          animation="fadeIn"
          by="character"
        >
          Always Available 24/7.
        </TextAnimate>
        <p className="text-gray-200 text-lg text-center md:text-left md:w-[60%]">
          Our AI bots are available 24/7, 365 days a year, ensuring no customer
          is left waiting. Whether it’s after-hours, peak times, or weekends,
          our bots provide instant responses, ensuring consistent customer
          satisfaction.
        </p>
      </div>
    </div>
    </section>
  );
}
