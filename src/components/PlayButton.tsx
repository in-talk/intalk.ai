import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useRouter } from 'next/router'
import React from 'react'

function PlayButton() {
    const router =useRouter()

  return (
    <div className="flex relative justify-center items-center ">
         <div data-aos="fade-up" data-aos-duration="1000" className=" cursor-pointer absolute -top-[230px]  h-[200px] w-[200px]" onClick={()=>router.push('#callSample')}>
           <DotLottieReact src="/animations/play.lottie" loop autoplay />
         </div>
         </div>
  )
}

export default PlayButton