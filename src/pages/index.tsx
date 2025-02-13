import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollProgress } from "../components/ui/scroll-progress";
import AutomateProcess from "../components/AutomateProcess";
import Waves from "../components/ui/Waves";
import WhyAI from "../components/WhyAI";
import Services from "../components/Services";
import Header from "../components/ui/Header";
import HeroHome from "../components/Hero-home";
import About from "../components/About";
import Workflows from "../components/Workflows";
import Cta from "../components/Cta";
import Footer from "../components/ui/Footer";
import CallSample from "../components/CallSample";


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
      <Header />
      <HeroHome/>
      <WhyAI />
      <About />
      <AutomateProcess />
      <CallSample/>
      <Services/>
      <Waves />
      <Workflows />
      <Cta />
      <Footer />
    </>
  );
}
