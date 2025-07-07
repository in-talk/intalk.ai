import { AccordionContent, AccordionTrigger } from "../../ui/Accordion";
import React from "react";
import AgentAvatar from "./AgentAvatar";
import Arrow from "./Arrow";
import CommentBox from "./CommentBox";
import StepBox from "./StepBox";

function CallFlowSolution() {
  return (
    <>
      <AccordionTrigger className="w-full text-left px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white font-semibold transition-all duration-300 shadow-md hover:bg-white/20">
        <h2 className="font-nacelle text-2xl lg:text-3xl font-semibold">
          🤖 How WE Solve these Challenges!
        </h2>
      </AccordionTrigger>
      <AccordionContent className="pb-40 pt-10  w-full overflow-x-auto">
        <div className="min-w-[425px] md:min-w-full flex flex-col items-center justify-center gap-4">
          <StepBox
            icon=""
            label={"OUTBOUND CALLS FROM\nAUTO DIALER"}
            bgColor="bg-blue-600"
          />

          <Arrow />

          <div className="flex flex-col items-center relative">
            <StepBox
              icon="📞"
              label={"CALL CONNECTS WITH\nINTALK AI BOT"}
              bgColor="bg-green-500"
            />
            <CommentBox
              position="right-[-250px] -top-[40px]"
              heading="💡 Solution"
            >
              <div className="flex items-center">
                <span className="mr-2">✅</span> Easy to scale and descale
              </div>
              <div className="flex items-center">
                <span className="mr-2">✅</span> No training required
              </div>
              <div className="flex items-center">
                <span className="mr-2">✅</span>No equipment needed
              </div>
            </CommentBox>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <AgentAvatar emoji="🤖" label="INTALK AI BOT" />
          </div>

          <Arrow />

          <div className="flex flex-col items-center relative">
            <StepBox
              icon="👤"
              label={"INTRODUCTION &\nPURPOSE OF CALL"}
              bgColor="bg-orange-500"
            />
            <CommentBox
              position="right-[-250px] -top-[30px]"
              heading="💡 Solution"
            >
              Uses high-quality American/British-accented voices, optimized for
              clarity and engagement.
            </CommentBox>
          </div>

          <Arrow />

          <div className="flex flex-col items-center relative">
            <StepBox icon="✅" label="PITCH" bgColor="bg-blue-500" />
            <CommentBox
              position="left-[-270px] -top-[30px]"
              heading="💡 Solution"
            >
              Delivers the exact pitch every time, with no variation or
              sloppiness
            </CommentBox>
          </div>

          <Arrow />

          <div className="flex flex-col items-center relative">
            <StepBox
              icon="📋"
              label={"CUSTOMER\nQUALIFICATION"}
              bgColor="bg-purple-700"
            />
            <CommentBox
              position="right-[-260px] -top-[60px]"
              heading="💡 Solution"
            >
              Applies real-time logic trees to qualify/disqualify based on
              customer responses with no delay
            </CommentBox>
          </div>

          <Arrow />

          <div className="flex gap-10 items-start">
            <div className="flex flex-col items-center relative">
              <StepBox
                icon="👍"
                label="TRANSFER TO VERIFIER"
                bgColor="bg-yellow-500"
              />
              <div className="flex gap-4 mt-4">
                <AgentAvatar emoji="👨‍💼" label="Verifier" />
              </div>
              <CommentBox
                position="left-[-260px] -top-[40px]"
                heading="💡 Solution"
              >
                Uses strict logic trees and consistent rules — only fully
                qualified leads get transferred.
                <br /> Verifier spends 100% of time on real, ready-to-close
                customers, increasing close rate.
              </CommentBox>
            </div>
            <div className="flex flex-col items-center relative">
              <StepBox
                icon="📞"
                label={"CALL ENDS\n(DISPOSITION)"}
                bgColor="bg-green-700"
              />

              <div className="mt-8">
                <CommentBox position="left-[50px]" heading="💡 Solution">
                  Finalizes disposition instantly at call end
                </CommentBox>
              </div>
            </div>
          </div>
        </div>
      </AccordionContent>
    </>
  );
}

export default CallFlowSolution;
