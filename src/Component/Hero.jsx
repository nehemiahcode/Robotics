import React from "react";
import HeroImage from "../assets/Robot_head.png";
import { HeroData } from "./Componentdata";
import { Fade } from "react-awesome-reveal";

function Hero() {
    //mydatas..
  const { smallHeading, bigHeading, btnText, paragraph } = HeroData;
  return (
    <>
      <section
        className=" grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b
         from-slate-900 via-black lg:pt-20 lg:px-16 pt-5 to-purple-950
        w-full h-[100%] mt-[5rem] sm:px-10 md:px-5 px-5"
      >
        <Fade direction="left">
        <div className=" h-[auto w-full]">
          <h1 className=" text-cyan-600 text-xl lg:text-xl font-medium">
            {smallHeading}
          </h1>
          <h1
            className=" font-Monessa text-4xl lg:text-7xl pt-5 leading-normal
            font-normal text-white"
          >
            {bigHeading}
          </h1>
          <h1 className="text-white font-Roboto lg:font-medium lg:text-2xl text-xl py-4">
            {paragraph}
          </h1>
          <button
            className=" bg-cyan-500 px-4 py-4 w-[230px] my-5
           hover:bg-cyan-300 duration-200 transition-all rounded-md text-black font-medium"
          >
            {btnText}
          </button>
        </div>

        </Fade>
       
       <Fade direction="right">
       <div className=" flex items-center justify-center  lg:items-start lg:justify-start  w-full">
          <img
            src={HeroImage}
            alt="Robot_picture"
            className=" w-[300px] align-middle sm:w-[80%] md:w-[90%] lg:w-auto "
          />
        </div>
       </Fade>
      </section>
    </>
  );
}

export default Hero;
