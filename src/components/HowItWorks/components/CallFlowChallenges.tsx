import React from "react";
import AgentAvatar from "./AgentAvatar";
import Arrow from "./Arrow";
import CommentBox from "./CommentBox";
import StepBox from "./StepBox";
import { AccordionContent, AccordionTrigger } from "../../ui/Accordion";

function CallFlowChallenges() {
  return (
    <>
      <AccordionTrigger className="w-full text-left px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white font-semibold transition-all duration-300 shadow-md hover:bg-white/20">
        <h2 className="font-nacelle text-2xl lg:text-3xl font-semibold">
          ⚠️ Challenges with Traditional Flow
        </h2>
      </AccordionTrigger>
      <AccordionContent className="pb-40 pt-10 w-full overflow-x-auto">
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
              label={"CALL CONNECTS WITH\nHUMAN FRONTER AGENTS"}
              bgColor="bg-green-500"
            />
            <CommentBox
              position=" right-[-250px] -top-[40px]"
              heading=" ⚠️ Problem"
            >
              <div className="flex items-center">
                <span className="mr-2">💰</span> High human resource cost
                <span className="ml-1 text-red-500">📉</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">💰</span> High training cost
                <span className="ml-1 text-red-500">📉</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">💰</span> High equipment cost
                <span className="ml-1 text-red-500">📉</span>
              </div>
            </CommentBox>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["👨‍💼", "👩‍💼", "👨‍💻", "👩‍💻"].map((emoji, i) => (
              <AgentAvatar key={i} emoji={emoji} label={`Agent ${i + 1}`} />
            ))}
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
              heading=" ⚠️ Problem"
            >
              Loss of qualified leads due to accent issues giving impression of
              scam call.
            </CommentBox>
          </div>

          <Arrow />

          <div className="flex flex-col items-center relative">
            <StepBox icon="✅" label="PITCH" bgColor="bg-blue-500" />
            <CommentBox
              position="left-[-250px] -top-[30px]"
              heading=" ⚠️ Problem"
            >
              Human may stumble, forget lines, or go off-script.
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
              position="right-[-260px] -top-[40px]"
              heading=" ⚠️ Problem"
            >
              Loss of qualified leads due to manual remembering or reference.
            </CommentBox>
          </div>

          <Arrow />

          <div className="flex gap-10 items-start">
            {/* Transfer */}
            <div className="flex flex-col items-center relative">
              <StepBox
                icon="👍"
                label="TRANSFER TO VERIFIER"
                bgColor="bg-yellow-500"
              />
              <div className="flex gap-4 mt-4">
                {["👨‍💼", "👩‍💼"].map((emoji, i) => (
                  <AgentAvatar
                    key={i}
                    emoji={emoji}
                    label={`Verifier ${i + 1}`}
                  />
                ))}
              </div>
              <CommentBox
                position="left-[-260px] -top-[40px]"
                heading=" ⚠️ Problem"
              >
                May send unqualified or semi-qualified leads due to misjudgment,
                pressure to hit quotas, or poor training.
                <br /> Might pass call too early.
              </CommentBox>
            </div>

            <div className="flex flex-col items-center relative">
              <StepBox
                icon="📞"
                label={"CALL ENDS\n(DISPOSITION)"}
                bgColor="bg-green-700"
              />

              <div className="mt-8">
                <CommentBox position="left-[50px]" heading=" ⚠️ Problem">
                  Manually types call summary (if at all), often vague or
                  inconsistent
                </CommentBox>
              </div>
            </div>
          </div>
        </div>
      </AccordionContent>
    </>
  );
}

export default CallFlowChallenges;
