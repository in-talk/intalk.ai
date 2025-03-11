import React from "react";
import { CircleArrowOutUpRight } from "lucide-react";
export default function AutomateProcess() {
  return (
    <div id="video" className="bg-transparent w-full flex flex-col justify-center items-center p-8 mt-10"  data-aos='fade-up'>
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-[80%] rounded-lg shadow-lg p-8 flex items-center gap-3 flex-wrap justify-between">
        <h1 className="text-3xl font-bold text-white ">Automate Processing</h1>
        <p className="text-lg text-white w-full md:w-[50%]  ">
          Streamline operations, boots efficiency, and optimize workflows with
          AI powered solutions.
        </p>
        <a href="#" className="text-white font-bold py-2 px-4 rounded">
          <CircleArrowOutUpRight />
        </a>
      </div>
    </div>
  );
}
