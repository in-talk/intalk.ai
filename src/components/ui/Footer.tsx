import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="w-full lg:px-10  pb-6  bg-gray-900 ">
        <div className="flex flex-col min-[830px]:flex-row items-center justify-between gap-6 py-5 border-b-2 border-indigo-100">
          <Logo />
          <ul className="hidden md:flex flex-row  items-center gap-5 sm:gap-12">
            <li>
              <a
                href="/"
                className="text-lg font-normal transition-all duration-300 text-indigo-200 focus-within:text-indigo-200 focus-within:outline-0"
              >
                In Talk
              </a>
            </li>
            {/* <li>
              <a
                href="jaascript:;"
                className="text-lg font-normal  transition-all duration-300 text-indigo-200 focus-within:text-indigo-200 focus-within:outline-0"
              >
                Services
              </a>
            </li> */}
            <li>
              <a
                href="#whyus"
                className="text-lg font-normal  transition-all duration-300 text-indigo-200 focus-within:text-indigo-200 focus-within:outline-0"
              >
                Why Us
              </a>
            </li>

            <li>
              <a
                href="#support"
                className="text-lg font-normal  transition-all duration-300 text-indigo-200 focus-within:text-indigo-200 focus-within:outline-0"
              >
                Support
              </a>
              <a
                href="#about"
                className="text-lg font-normal  transition-all duration-300 text-indigo-200 focus-within:text-indigo-200 focus-within:outline-0"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-5 flex flex-col min-[520px]:flex-row items-center justify-between gap-6">
          <ul className="flex items-center gap-9">
            <li>
              <a
                href="jaascript:;"
                className="text-sm font-normal  transition-all duration-300 text-indigo-200 focus-within:text-indigo-600 focus-within:outline-0"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="jaascript:;"
                className="text-sm font-normal transition-all duration-300 text-indigo-200 focus-within:text-indigo-600 focus-within:outline-0"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="jaascript:;"
                className="text-sm font-normal  transition-all duration-300 text-indigo-200 focus-within:text-indigo-600 focus-within:outline-0"
              >
                Cookies
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4 lg:mr-12">
            <a
              href="https://www.linkedin.com/company/ai-intalk"
              className="border border-gray-300 p-2 rounded-full aspect-square text-gray-700 transition-all duration-500 hover:text-indigo-600 hover:border-indigo-600 focus-within:outline-0 focus-within:text-indigo-600 focus-within:border-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.87818 15.5556V7.87128H4.31767V15.5556H6.87845H6.87818ZM5.59846 6.82229C6.49118 6.82229 7.04695 6.23223 7.04695 5.49481C7.03024 4.74059 6.49118 4.16699 5.61544 4.16699C4.7391 4.16699 4.16675 4.74059 4.16675 5.49474C4.16675 6.23216 4.72232 6.82223 5.58168 6.82223H5.59826L5.59846 6.82229ZM8.29546 15.5556H10.8558V11.2648C10.8558 11.0354 10.8725 10.8055 10.9401 10.6417C11.1251 10.1826 11.5464 9.70742 12.2539 9.70742C13.1802 9.70742 13.551 10.412 13.551 11.4451V15.5556H16.1112V11.1497C16.1112 8.78945 14.8482 7.69112 13.1636 7.69112C11.7825 7.69112 11.1759 8.46114 10.8389 8.9856H10.856V7.87154H8.29559C8.32901 8.59243 8.29539 15.5559 8.29539 15.5559L8.29546 15.5556Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
