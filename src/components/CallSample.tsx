import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useEffect, useRef, useState } from "react";

function CallSample() {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const audioFile = new Audio("/audios/call.mp3");
      setAudio(audioFile);
  
      return () => {
        audioFile.pause();
        audioFile.currentTime = 0; // Reset audio when unmounted
      };
    }, []);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            playAudio();
          } else {
            pauseAudio();
          }
        },
        { threshold: 0.5 } // Play when 50% of the section is visible
      );
  
      if (sectionRef.current) observer.observe(sectionRef.current);
  
      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }, [audio]);

    const playAudio = () => {
        if (audio) {
          audio.muted = false;
          audio
            .play()
            .then(() => console.log("Audio started successfully."))
            .catch((error) => console.error("Audio playback error:", error));
        }
      };
    
      const pauseAudio = () => {
        if (audio) {
          audio.pause();
        }
      };
    
  return (
    <section ref={sectionRef} id="callSample" className=" m-5">
      <div className="flex justify-center">
        <audio
          src="/audios/call.mp3"
          controls={false}
          preload="auto"
        ></audio>
        {/* <video  className="" loop controls={false}  autoPlay={false} poster="/images/Ai_calling_bot.png">
        <source src={"/videos/final_video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

        <div className="">
          <DotLottieReact src="/animations/waves.lottie" loop autoplay />
        </div>
      </div>
    </section>
  );
}

export default CallSample;
