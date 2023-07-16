import React from "react";
import Image1 from "../assets/machines.jpg";
import Image2 from "../assets/Machine2.png";
import Image3 from "../assets/Shake.jpg";
import { Zoom } from "react-awesome-reveal";

function Features() {
  const Cards = [
    {
      image: Image1,
      heading: "3 Cobot Success Stories in Electronics Manufacturing",
      btnText: "UNIVERSAL",
    },
    {
      image: Image2,
      heading: "Boost Your Cobot Safety Know-How with These Digital Resources",
      btnText: "UNIVERSAL",
    },
    {
      image: Image3,
      heading: "Self-Driving Vehicle Success is Tied to Machine Vision",
      btnText: "AUTOMOTIVE TECHNOLOGY",
      margin:true,
    },
  ];
  return (
    <div className=" bg-black">
      <h1 className=" text-white font-Monessa lg:pt-[7rem] pb-3 text-3xl px-6 lg:px-16 lg:text-5xl">
        Insight
      </h1>
      <section
        className={`grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-6 pt-[5rem]  bg-[rgb(0,0,0)]  lg:px-20 pb-5
    w-full h-[auto]  sm:px-10  px-3`}
      >
        {Cards.map((card, index) => (
          <Zoom>
            <div
              key={index}
              className={`w-[95%] sm:w-[80%] ${card.margin && " md:ml-[50%] lg:m-0"} mx-auto md:w-[100%] md:h-auto  shadown-10
                lg:w-[100%] lg:h-auto sm:h-[400px] rounded-xl relative bg-slate-950`}
            >
              <img
                src={card.image}
                alt=""
                className=" w-[100%]  h-[230px]  object-cover rounded-t-xl"
              />
              <div className=" px-3 pb-6">
                <h1 className=" font-Verdana text-lg text-sky-400 font-medium">
                  {card.heading}
                </h1>
                <p className=" font-Monessa text-sm pt-6 text-white">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                </p>
              </div>
              <button className=" absolute top-0 right-0 bg-sky-400 rounded-full px-5 text-black text-sm py-1 my-2 mx-2 w-auto ">
                {card.btnText}
              </button>
            </div>
          </Zoom>
        ))}
      </section>
    </div>
  );
}

export default Features;
