import { TextAnimate } from "@/src/components/ui/text-animate";

export default function About() {
  return (
    <section id="about" className=" relative flex h-[80vh] bg-[url('../../public/images/gradiantwaves.jpg')] backdrop-blur-lg rounded-3xl bg-cover bg-center">
      <div className="absolute w-[100%] h-[100%]">
        <div className=" relative flex flex-col  gap-[50px] justify-center items-center z-30 w-[100%] h-[100%] backdrop-blur-sm  rounded-lg  shadow-xl p-12">
          <TextAnimate
            className="font-nacell text-2xl font-semibold md:text-4xl text-indigo-500"
            animation="blurInUp"
            by="character"
          >
            Revolutionizing Call Centers, One AI at a Time
          </TextAnimate>
          <p className=" text-indigo-200 text-xl md:text-2xl text-center w-full md:w-[55%]">
            Transform your call center operations with advanced AI-driven
            automation. By intelligently managing customer interactions and
            streamlining communication workflows, we enable you to deliver
            exceptional efficiency and customer satisfaction, unlocking new
            levels of success for your business in the world of customer
            support.
          </p>
        </div>
      </div>
    </section>
  );
}
