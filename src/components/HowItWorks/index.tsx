import { TextAnimate } from "../ui/text-animate";
import AgentAvatar from "./components/AgentAvatar";
import Arrow from "./components/Arrow";
import CommentBox from "./components/CommentBox";
import StepBox from "./components/StepBox";

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600  p-5 overflow-auto rounded-3xl">
      <div className="mx-auto max-w-3xl py-4 text-center my-[50px]">
        <TextAnimate
          className="font-nacelle text-2xl font-semibold md:text-4xl text-light"
          animation="blurInUp"
          by="character"
        >
          How It Works Behind the Scenes
        </TextAnimate>
      </div>
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 pb-52">
        {/* Step 1 */}
        <StepBox
          icon=""
          label={"OUTBOUND CALLS FROM\nAUTO DIALER"}
          bgColor="bg-blue-600"
        />

        <Arrow />

        {/* Step 2 */}
        <div className="flex flex-col items-center relative">
          <StepBox
            icon="📞"
            label={"CALL CONNECTS WITH\nHUMAN FRONTER AGENTS"}
            bgColor="bg-green-500"
          />
          <CommentBox position="right-[-250px] -top-[40px]">
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

        {/* Agents */}
        <div className="flex flex-wrap justify-center gap-4">
          {["👨‍💼", "👩‍💼", "👨‍💻", "👩‍💻"].map((emoji, i) => (
            <AgentAvatar key={i} emoji={emoji} label={`Agent ${i + 1}`} />
          ))}
        </div>

        <Arrow />

        {/* Step 3: Introduction */}
        <div className="flex flex-col items-center relative">
          <StepBox
            icon="👤"
            label={"INTRODUCTION &\nPURPOSE OF CALL"}
            bgColor="bg-orange-500"
          />
          <CommentBox position="right-[-250px] -top-[30px]">
            Loss of qualified leads due to accent issues giving impression of
            scam call.
          </CommentBox>
        </div>

        <Arrow />

        {/* Step 4: Pitch */}
        <div className="flex flex-col items-center relative">
          <StepBox icon="✅" label="PITCH" bgColor="bg-blue-500" />
          <CommentBox position="left-[-250px] -top-[30px]">
            Human may stumble, forget lines, or go off-script.
          </CommentBox>
        </div>

        <Arrow />

        {/* Step 5: Qualification */}
        <div className="flex flex-col items-center relative">
          <StepBox
            icon="📋"
            label={"CUSTOMER\nQUALIFICATION"}
            bgColor="bg-purple-700"
          />
          <CommentBox position="right-[-260px] -top-[40px]">
            Loss of qualified leads due to manual remembering or reference.
          </CommentBox>
        </div>

        <Arrow />

        {/* Step 6: Transfer and End */}
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
            <CommentBox position="left-[-260px] -top-[40px]">
              May send unqualified or semi-qualified leads due to misjudgment,
              pressure to hit quotas, or poor training.
              <br /> Might pass call too early.
            </CommentBox>
          </div>

          {/* Call Ends */}
          <div className="flex flex-col items-center relative">
            <StepBox
              icon="📞"
              label={"CALL ENDS\n(DISPOSITION)"}
              bgColor="bg-green-700"
            />
            {/* Final Comment */}
            <div className="mt-8">
              <CommentBox position="left-[50px]">
                Manually types call summary (if at all), often vague or
                inconsistent
              </CommentBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
