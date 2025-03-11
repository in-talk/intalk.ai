import React, { useState } from "react";
import Logo from "./Logo";

function HeaderV2() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = [
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

  return (
    <header className="relative z-[100]">
      <nav className=" border-gray-200 px-4 lg:px-6 py-5 bg-transparent">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Logo />

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className=" hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0">
              {navLinks.map((link) => (
                <li key={link.text}>
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
          {/* 
          {openMenu && (
            <div data-aos='zoom-in-left'  className=" block justify-between items-center w-full lg:hidden  mt-2 bg-slate-500 ">
              <ul className="flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0">
                {navLinks.map((link) => (
                  <li key={link.text}>
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
          )} */}

          <div
            className={`fixed left-0 top-[80px] z-40 w-full rounded-b-2xl bg-indigo-600 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
              !toggleMenu ? "h-0" : "h-[300px]"
            }`}
          >
            <ul className="flex flex-col p-5 ">
              {navLinks.map((link) => (
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
        </div>
      </nav>
    </header>
  );
}

export default HeaderV2;
