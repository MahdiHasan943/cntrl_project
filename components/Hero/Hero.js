import React from "react";
import { Lato } from "next/font/google";
import Image from "next/image";
const lato = Lato({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});
const Hero = () => {
  return (
    <div className="text-center">
      <a className="text-[#3185FF] text-center" href="#">
        #1 Most Powerful AI Companion
      </a>
      <h1
        className={`${lato.className} text-[40px] py-2 leading-[40px] laptop:text-[80px] laptop:leading-[80px] text-[#fff]`}
      >
        TAKE FULL <span className="text-[#3185FF]">CNTRL</span> <br /> OF YOUR
        AI
      </h1>
      <p className="text-[#fff] py-2 text-[16px]">
        Optimize AI performance, tailor it to your needs, and extract valuable
        <br className="hidden laptop:block" /> insights from your data with
        ease. Experience the simplicity of interacting <br  className='hidden laptop:block'/> with AI through CNTRL AI.
          </p>
          <div className="py-5 flex flex-col laptop:flex-row justify-center items-center gap-4">
              <button className="text-white    bg-gradient-to-l from-[#2665EB] to-[#3185FF] py-3 rounded-full px-14 relative"><Image src={'/images/videoIcon.png'} alt="video-icon" width={30} height={30} className="absolute top-[10px] left-[20px]"/>  WATCH VIDEO</button>
              <button className="text-white border-2 border-[#3185FF]   hover:bg-gradient-to-l from-[#2665EB] to-[#3185FF]  duration-200 delay-100 ease-linear  py-3 rounded-full px-12 relative"> TRY IT FOR FREE <Image src={'/images/rightArrow.png'} alt="arrow-icon" width={20} height={20} className="absolute top-[15px] right-[20px]"/></button>    
        </div>
    </div>
  );
};

export default Hero;
