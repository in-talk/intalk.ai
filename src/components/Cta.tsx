import Image from "next/image";
import callBott from "@/public/images/robot-face2.png";
import { VelocityScroll } from "./ui/scroll-based-velocity";
import MatrixButton from "./ui/MatrixButton";
import { useState } from "react";
import DemoDialog from "./DemoDialog";

export default function Cta() {
  const [openDemoForm, setOpenDemoForm] = useState(false);

  return (
    <section id="#contact" className="relative mt-10 overflow-hidden">
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <Image className="" src={callBott} alt="bot with headphone" />
        <div className="md:py-12  absolute left-0 top-[20%] md:left-[18%] w-full ">
          <div className="mx-auto max-w-3xl text-center">
            <VelocityScroll className="mb-8" defaultVelocity={2}>
              The Future of call centers is here.
            </VelocityScroll>
            <MatrixButton
              buttonText="Schedule a demo"
              onClick={() => setOpenDemoForm(true)}
            />
          </div>
        </div>
      </div>
      <DemoDialog
        isOpen={openDemoForm}
        onClose={() => setOpenDemoForm(false)}
      />
    </section>
  );
}
