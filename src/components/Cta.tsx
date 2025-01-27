import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { cn } from "../lib/utils";
import MatrixButton from "./ui/MatrixButton";
import { DotPattern } from "./ui/dot-pattern";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="w-full"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
            The Future of Call-Centers Starts Here.
            </h2>
            <div className="mx-auto max-w-xs md:gap-5 sm:flex sm:max-w-none gap-2 sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={800}>
               
                <MatrixButton buttonText="Schedule a demo"/>
              </div>"
              <div data-aos="fade-up" data-aos-delay={900}>
              <MatrixButton buttonText="Start building"/>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
