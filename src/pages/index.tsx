import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollProgress } from "../components/ui/scroll-progress";
import AutomateProcess from "../components/AutomateProcess";
import Waves from "../components/ui/Waves";
import WhyAI from "../components/WhyAI";
import Services from "../components/Services";
import HeroHome from "../components/Hero-home";
import Cta from "../components/Cta";
import Footer from "../components/ui/Footer";
import CallSample from "../components/CallSample";
import HeaderV2 from "../components/ui/HeaderV2";
import WhyUs from "../components/WhyUs";
import { ToastContainer } from "react-toastify";
import About from "../components/ui/AboutUs";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 800,
      easing: "ease-out-sine",
    });
  }, []);

  return (
    <>
      <ScrollProgress />
      <HeaderV2 />
      <HeroHome />
      <WhyAI />
      <WhyUs />
      <CallSample />
      <AutomateProcess />
      <Services />
      <Waves />

      <Cta />
      <ToastContainer />
      <About />
      <Footer />
    </>
  );
}
