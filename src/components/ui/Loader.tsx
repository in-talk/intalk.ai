import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";
import Logo from "./Logo";
import MatrixButton from "./MatrixButton";

const Loader = ({ onComplete}:any) => {
  const [clicked ,setClicked] = useState(false)

 function handleClick(){
    setClicked(true)
    if (onComplete) {
      onComplete(); // Notify the parent component
    }
  }
  return (
    <div
      data-cursor="-custom"
      className={` ${clicked ? 'loading-screen':''} absolute z-[100] flex h-screen w-full flex-col items-center justify-center overflow-hidden  md:shadow-xl  bg-gray-950`}
    >
      <div className="flex flex-col gap-[10px]  justify-between items-center">
       <Logo/>

        <div className="flex flex-col justify-between items-center" >
          <div data-aos="fade-down" className="w-[200px] h-[200px]">
            <DotLottieReact src="/animations/loader.lottie" loop autoplay />
          </div>
        </div>
       <MatrixButton buttonText ='Click here and explore' onClick={handleClick}  />
      </div>
    </div>
  );
};

export default Loader;
