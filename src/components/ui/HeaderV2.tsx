import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import MatrixButton from "./MatrixButton";
import DemoDialog from "../DemoDialog";

function HeaderV2() {
  const [toggle, setToggle] = useState(false);
  const [openDemoForm, setOpenDemoForm] = useState(false);

  const navitem = [
    {
      text: "Home",
      url: "#",
    },
    {
      text: "Why AI",
      url: "#whyAi",
    },
    {
      text: "Why Us",
      url: "#WhyUs",
    },
    {
      text: "Support",
      url: "#suport",
    },
    {
      text: "Features",
      url: "#features",
    },
  ];
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleClass = () => {
    setIsNavOpen(!isNavOpen);
    const closeAfterClick = document.querySelector("#nav-icon4");
    closeAfterClick?.classList?.toggle("open");
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`w-full flex md:block px-5 pt-3 md:pt-5 ${
          isScrolled &&
          "backdrop-blur-sm bg-white/20 fixed top-0  z-[100] backdrop-filter md:h-20 overscroll-none"
        }`}
      >
        <div className="md:max-w-[1120px] lg:max-w-[1240px] md:flex hidden md:px-0 md:gap-5 mb-8 md:mb-16 container md:mx-auto">
          <div className="gap-5 w-full items-center justify-between md:flex hidden z-[100]">
            <Logo />
            <ul className="flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0">
              {navitem.map((data, index) => {
                return (
                  <li key={data.text}>
                    <a href={data.url} className="relative group">
                      <span className="text-gray-200 text-lg group-hover:text-white transition-colors duration-300">
                        {data.text}
                      </span>
                      <div className="absolute  left-0 w-0 h-[3px] bg-gradient-to-r from-indigo-600 to-indigo-300 group-hover:w-full transition-all duration-300"></div>
                      <div className="absolute  left-0 w-0 h-[3px] bg-white/20 group-hover:w-full transition-all duration-500 delay-100"></div>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className=" hidden md:flex">
              <MatrixButton
                buttonText="Schedule a demo"
                onClick={() => setOpenDemoForm(true)}
              />
            </div>
          </div>
        </div>
        <div className=" w-full z-[100] flex md:hidden items-center justify-between">
          <Logo />
          <button
            className="w-12 h-12 relative focus:outline-none md:hidden overscroll-none"
            onClick={() => {
              toggleClass();
              setToggle(!toggle);
            }}
          >
            <div className="block w-5 absolute left-1 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <span
                className={`
              block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out
              ${toggle ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                className={`
              block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out
              ${toggle && "opacity-0"}`}
              ></span>
              <span
                className={`
              block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out
              ${toggle ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
        <div
          className={`fixed left-0 top-[60px] z-40 w-full rounded-b-2xl bg-indigo-600 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggle ? "h-0" : "h-[300px]"
          }`}
        >
          <ul className="flex flex-col p-5 ">
            {navitem.map((link) => (
              <li key={link.text} className="border-b-2 p-2">
                <a href={link.url} className="relative group">
                  <span className="text-gray-200 text-lg group-hover:text-white transition-colors duration-300">
                    {link.text}
                  </span>
                  <div className="absolute  left-0 w-0 h-[3px] bg-gradient-to-r from-indigo-600 to-indigo-300 group-hover:w-full transition-all duration-300"></div>
                  <div className="absolute  left-0 w-0 h-[3px] bg-white/20 group-hover:w-full transition-all duration-500 delay-100"></div>
                </a>
              </li>
            ))}
          </ul>
          
        </div>
      </header>
      <DemoDialog
        isOpen={openDemoForm}
        onClose={() => setOpenDemoForm(false)}
      />
    </>
  );
}

export default HeaderV2;
