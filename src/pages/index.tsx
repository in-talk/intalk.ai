import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollProgress } from "../components/ui/scroll-progress";
import AutomateProcess from "../components/AutomateProcess";
import Waves from "../components/ui/Waves";
import WhyAI from "../components/WhyAI";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Loader from "../components/ui/Loader";
import Header from "../components/ui/Header";
import PageIllustration from "../components/Page-illustration";
import HeroHome from "../components/Hero-home";
import About from "../components/About";
import Workflows from "../components/Workflows";
import Cta from "../components/Cta";
import Footer from "../components/ui/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 800,
      easing: "ease-out-sine",
    });

    // Load audio file
    const audioFile = new Audio("/audios/sound1.wav");
    setAudio(audioFile);

    return () => {
      audioFile.pause(); // Cleanup on unmount
    };
  }, []);

  const handleLoaderComplete = () => {
    if (audio) {
      audio.muted = false; // Ensure the audio is unmuted
      audio
        .play()
        .then(() => console.log("Audio started successfully."))
        .catch((error) => console.error("Audio playback error:", error));
    }

    setTimeout(() => setIsLoading(false), 4000);
  };

  if (isLoading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  return (
    <>
      <ScrollProgress />
      <Header />
      <PageIllustration />
      <HeroHome/>
      <About />
      <WhyAI />
      <AutomateProcess />
      <Services/>
      <Waves />
      <Workflows />
      <Cta />
      <Contact/>
      <Footer />
    </>
  );
}
