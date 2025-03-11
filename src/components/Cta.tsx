import Image from "next/image";
import callBott from "@/public/images/robot-face2.png";
import { VelocityScroll } from "./ui/scroll-based-velocity";

export default function Cta() {
  return (
    <section id="#contact" className="relative overflow-hidden">
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <Image className="" src={callBott} alt="bot with headphone" />
        <div className="py-12  absolute left-0 top-[20%] md:left-[18%] w-full ">
          <div className="mx-auto max-w-3xl text-center">
            <VelocityScroll defaultVelocity={2}>
              The Future of call centers is here.
            </VelocityScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
