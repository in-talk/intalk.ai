import { MorphingText } from "./ui/morphing-text";
import MatrixButton from "./ui/MatrixButton";
import PlayButton from "./PlayButton";
import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import ScheduleDemoForm from "./ScheduleDemoForm";
import { Cross1Icon } from "@radix-ui/react-icons";

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
              AI-Driven tools for
            </h1>
            <MorphingText
              texts={["Call centers", "Call Agents", "Bots", " Products"]}
            />
            <div className="mx-auto md:mt-4 max-w-3xl px-5">
              <p className="mb-8  text-xl md:text-2xl text-gray-200">
                Revolutionizing Customer Interactions with AI-Powered Calling
                Bots—Delivering Smart, Human-Like Conversations That Work 24/7
                to Enhance Customer Satisfaction and Drive Business Growth.
              </p>
            </div>
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
      <Dialog
        open={openDemoForm}
        onClose={() => setOpenDemoForm(false)}
        transition
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4  data-[closed]:opacity-0"
      >
        {/* <DialogBackdrop className="fixed inset-0 bg-black/30" />{" "} */}
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              data-aos="fade-down"
              data-aos-duration="500"
              className="w-full max-w-lg rounded-xl bg-white/5 p-6 backdrop-blur-2xl data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex items-center justify-between">
                <DialogTitle
                  as="h3"
                  className="text-gray-200 font-nacelle text-3xl font-semibold leading-10 mb-[16px]"
                >
                  Send Us A Message
                </DialogTitle>
                <CloseButton className="p-2 rounded-sm hover:bg-indigo-500 bg-indigo-700 shadow-sm transition-all duration-800">
                  <Cross1Icon strokeWidth={2} />
                </CloseButton>
              </div>
              <ScheduleDemoForm />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </section>
  );
}
