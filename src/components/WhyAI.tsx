import Image from "next/image";
import AIImage from "@/public/images/aivshuman.png";
import { TextAnimate } from "./ui/text-animate";
import { cn } from "../lib/utils";
import { DotPattern } from "./ui/dot-pattern";

export default function WhyAI() {
  return (
    <section id="whyAi" className="relative ">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="mx-auto px-4 sm:px-6 ">
        <div className=" pt-12 pb-7  md:py-10">
          {/* Section header */}
          <div className="mx-auto max-w-3xl py-4 text-center md:py-4">
            <TextAnimate
              className="font-nacelle text-2xl font-semibold md:text-4xl text-gray-300"
              animation="blurInUp"
              by="word"
            >
              Why AI is the Future of Call Centers
            </TextAnimate>
          </div>

          <div className="flex flex-col md:flex-row items-center relative z-40 justify-center gap-6 p-6">
            <div className="flex flex-col gap-6">
              <div className=" p-4 rounded-lg shadow text-center">
                <article className=" text-left">
                  <svg
                    className="mb-3 fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                  >
                    <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                    <path
                      fillOpacity=".48"
                      d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                    />
                  </svg>
                  <h3 className="mb-1 font-nacelle text-[1.3rem] font-semibold text-gray-300">
                    Maximizing Profitability
                  </h3>
                  <p className="text-gray-200 text-md">
                    By implementing AI, businesses can reduce operational costs
                    by eliminating the need for hiring, training, and managing
                    large human call center teams.
                  </p>
                </article>
              </div>
              <div className=" p-4 rounded-lg shadow text-center">
                <article className=" text-left">
                  <svg
                    className="mb-3 fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                  >
                    <path
                      fillOpacity=".48"
                      d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z"
                    />
                    <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
                  </svg>
                  <h3 className="mb-1 font-nacelle text-[1.3rem] font-semibold text-gray-300">
                    Solving HR and Hiring Challenges
                  </h3>
                  <p className="text-gray-200 text-md">
                    As a SaaS company, we address not just customer service
                    needs but also your human resource problems. Hiring,
                    onboarding, and retaining call center staff can be a major
                    pain point. With AI bots, these HR challenges are solved.
                  </p>
                </article>
              </div>
            </div>

            <div className="flex-1 min-w-[375px] md:min-w-[500px] max-w-[600px]">
              <article className="w-full">
                <Image
                  className="w-full rounded-2xl"
                  src={AIImage}
                  alt="robot facing human"
                />
              </article>
            </div>

            <div className="flex flex-col gap-6">
              <div className=" p-4 rounded-lg shadow text-center">
                <article className=" text-left">
                  <svg
                    className="mb-3 fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                  >
                    <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                    <path
                      fillOpacity=".48"
                      d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                    />
                  </svg>
                  <h3 className="mb-1 font-nacelle text-[1.3rem] font-semibold text-gray-300">
                    Consistency and Accuracy
                  </h3>
                  <p className="text-gray-200 text-md">
                    AI bots maintain a high level of accuracy and consistency in
                    every interaction. AI bots provide a steady,
                    reliable experience for customers every time they call.
                  </p>
                </article>
              </div>
              <div className=" p-4 rounded-lg shadow text-center">
                <article className=" text-left">
                  <svg
                    className="mb-3 fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                  >
                    <path
                      fillOpacity=".48"
                      d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z"
                    />
                    <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
                    <path
                      d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z"
                      opacity=".48"
                    />
                    <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
                  </svg>
                  <h3 className="mb-1 font-nacelle text-[1.3rem] font-semibold text-gray-300">
                    Unmatched Efficiency & Scalability
                  </h3>
                  <p className="text-gray-200 text-md">
                    AI bots can handle thousands of customer inquiries
                    simultaneously without compromising quality or response
                    time. Whether it’s 10 or 10,000 calls, AI scales
                    seamlessly with your business needs—ensuring every customer
                    interaction is handled swiftly and effectively.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
