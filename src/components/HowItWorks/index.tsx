import { Accordion, AccordionItem } from "../ui/Accordion";
import { TextAnimate } from "../ui/text-animate";
import CallFlowChallenges from "./components/CallFlowChallenges";
import CallFlowSolution from "./components/CallFlowSolution";

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600  p-5 pb-20 overflow-hidden rounded-3xl">
      <div className="mx-auto max-w-4xl py-4 text-center my-[50px]">
        <TextAnimate
          className="font-nacelle text-2xl font-semibold md:text-4xl text-light"
          animation="blurInUp"
          by="character"
        >
          Reimagining Call Handling: Human vs Intalk AI
        </TextAnimate>
        <h2 className=" text-lg lg:text-xl text-gray-200 max-w-xl mx-auto mt-8">
          See the key differences between traditional call centers and our
          AI-driven approach.
        </h2>
      </div>

      <div className=" flex items-center justify-center gap-8 w-full">
        <Accordion
          type="single"
          collapsible
          className="lg:min-w-[1200px]"
          defaultValue="problem"
        >
          <AccordionItem value="problem" className="mb-4 relative">
            <CallFlowChallenges />
          </AccordionItem>
          <AccordionItem value="solution">
            <CallFlowSolution />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default HowItWorks;
