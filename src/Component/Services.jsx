import React from "react";
import { GiMicroscope } from "react-icons/gi";
import { MdOutlinePhonelink } from "react-icons/md";
import { GiStaticGuard, GiHealthNormal } from "react-icons/gi";
import { SiMediamarkt } from "react-icons/si";
import Bgimage from "../assets/Machine2.png";
import { Fade, Zoom } from "react-awesome-reveal";

function Services() {
  const Cards = [
    { icon: <GiMicroscope />, heading: "    Automotive and Subcontractors" },
    { icon: <MdOutlinePhonelink />, heading: "Technology and Science" },
    { icon: <GiStaticGuard />, heading: "Education and Knowledge" },
    { icon: <SiMediamarkt />, heading: "Swift like an eagle" },
    { icon: <GiHealthNormal />, heading: "Health care asuured",   margin:true, },
  ];
  return (
    <>
      <section  className=" bg-[rgba(0,0,0,0.93)] w-full ">
        <p id="service" className=" pt-12"></p>
       <Fade >
       <h1 className=" text-3xl lg:text-6xl text-center py-6 text-white font-Monessa font-medium">
          Services
        </h1>
        <p className=" text-center text-sky-500 text-lg">WHAT WE OFFER</p>
        <h1 className=" text-center text-white pb-4 text-2xl">
          We are intelligence in action.
        </h1>
       </Fade>
        <section
          style={{
            backgroundImage: `url(${Bgimage})`,
            backgroundBlendMode: "soft-light",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 py-16 bg-[rgba(0,0,0,0.8)] lg:pt-20 lg:px-16 pt-5 
        w-full h-[auto]  sm:px-10 md:px-5 px-5`}
        >
          {Cards.map((card, index) => (
           <Zoom key={index}>
             <div    
              className={` bg-[rgb(0,0,0)] w-[100%] group  sm:w-[80%] md:w-[100%] lg:w-[100%] mx-auto h-[280px] duration-200 hover:ring-2 hover:translate-y-[-1rem]
              ring-sky-600 text-center px-2 pt-5 ${
                card.margin && " md:ml-[50%] lg:m-0"
              } text-white rounded-lg shadow-lg flex flex-col  items-center`}
            >
              <span className=" text-6xl group-hover:text-red-500 text-sky-500 pb-3">{card.icon}</span>
              <h1 className=" text-2xl font-Verdana">{card.heading}</h1>
              <p className=" text-lg py-3 px-3">
                Metus nunc nec ridiculus aenean maximus integer platea letius ex
                magna
              </p>
            </div>
           </Zoom>
          ))}
        </section>
      </section>
    </>
  );
}

export default Services;
