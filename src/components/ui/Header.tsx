import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import MatrixButton from "./MatrixButton";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <header
        data-aos="fade-down"
        className=" relative z-[9999]  w-full hidden lg:block "
      >
        <div className=" md:px-12 sm:px-6 flex w-full justify-between items-center">
          <Logo />
          <div className="  bg-[linear-gradient(90deg,_rgba(146,_142,_230,_1)_0%,_rgba(49,_60,_221,_1)_100%)] relative -top-[25]  w-[70%] rounded-3xl bg-gray-900/90 px-5 pt-[3rem] pb-[1.5rem] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
            {/* Site branding */}

            {/* Desktop sign in links */}
            <ul className="flex flex-1 items-center justify-around gap-3">
              <li>
                <Link
                  href={"#"}
                  className="inline-block py-[8px] text-center w-40  text-base border-none  hover:bg-indigo-800  border-2 rounded-md  transition-all duration-300    lg:py-[8px]  hover:text-indigo-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="inline-block py-[8px] text-center w-40  text-base border-none  hover:bg-indigo-800 border-2 rounded-md  transition-all duration-300    lg:py-[8px]  hover:text-indigo-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"#whyAi"}
                  className="inline-block py-[8px] text-center w-40  text-base border-none  hover:bg-indigo-800  border-2 rounded-md  transition-all duration-300    lg:py-[8px]    hover:text-indigo-200"
                >
                  Why AI
                </Link>
              </li>
              <li>
                <Link
                  href={"#features"}
                  className="inline-block py-[8px] text-center w-40  text-base  border-none hover:bg-indigo-800  border-2 rounded-md  transition-all duration-300    lg:py-[8px]   hover:text-indigo-200"
                >
                  Experience
                </Link>
              </li>
              {/* <li>
              <Link
                href={"#support"}
                className="inline-block py-[8px] text-center w-40  text-base border-none hover:bg-indigo-800  border-2 rounded-md  transition-all duration-300    lg:py-[8px]    hover:text-indigo-200"
              >
                Support
              </Link>
            </li> */}
            </ul>
          </div>
          <MatrixButton
            buttonText="Contact Us"
            onClick={() => router.push("#contact")}
          />
        </div>
      </header>
      <div className="block md:hidden relative z-[9999]">
        <MobileNav />
      </div>
    </>
  );
}
