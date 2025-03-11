import { TextAnimate } from "./ui/text-animate";
import { cn } from "../lib/utils";
import { DotPattern } from "./ui/dot-pattern";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./Carousel/EmblaCarousel";

export default function WhyUs() {
  const OPTIONS: EmblaOptionsType = { align: "start", loop: true };

  const SLIDES = [
    {
      image: "/icons/time_save.svg",
      text1: "24/7",
      text2: "Support & Availability",
    },
    {
      image: "/icons/boost.svg",
      text1: "+200%",
      text2: "Growth Potential",
    },
    {
      image: "/icons/dashboard.svg",
      text1: "60%",
      text2: "Data-Driven Decisions",
    },
    {
      image: "/icons/trends.svg",
      text1: "95%",
      text2: "Precision & Accuracy",
    },
    {
      image: "/icons/working.svg",
      text1: "-50%",
      text2: "Manual Work",
    },
    {
      image: "/icons/cost_reduction.svg",
      text1: "50%",
      text2: "Operational Cost Reduction",
    },
  ];

  return (
    <section id="whyus" className="relative px-6 bg-[#5541e8] bg-opacity-80 rounded-3xl">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="mx-auto ">
        <div className="py-6 md:py-12">
          {/* Section header */}
          <div className="mx-auto max-w-3xl py-4 text-center md:py-4">
            <TextAnimate
              className="font-nacelle text-2xl font-semibold md:text-4xl text-gray-300"
              animation="blurInUp"
              by="character"
             
            >
              Why Choose Us?
            </TextAnimate>
          </div>
          <div className="mx-auto my-[16px] lg:max-w-[65%] pb-[5%] pt-[1%] text-center">
            <h2 className=" text-lg lg:text-xl text-gray-200">
              With 24/7 reliable support, smarter call handling, and
              seamless issue resolution, we ensure superior customer
              satisfaction while unlocking new levels of success for your
              business. It’s time to work smarter, not harder choose <b>InTalk </b>
               for intelligent, efficient, and scalable customer interactions! 🚀
            </h2>
          </div>

          <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            {/* <Carousel /> */}
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>
    </section>
  );
}
