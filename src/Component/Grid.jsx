import React from "react";
import Image1 from "../assets/tool1.png";
import Image2 from "../assets/tool2.png";
import Image3 from "../assets/tool3.png";
import { Fade } from "react-awesome-reveal";

function Grids() {
  const Grid = [
    {
      gridImage: Image1,
      title1: "Internal Reflector",
      title2: "Used During total internal reflection",
      styles: true,
    },
    {
      gridImage: Image2,
      title1: " Spatter",
      title2: " Used to manage wear and tear",
      styles2: true,
    },
    {
      gridImage: Image3,
      title1: "Air Decolorizer",
      title2: "Used to decolorise the atmosphare",
      styles3: true,
    },
  ];

  return (
    <div>
     <Fade>
     <div className=" grid lg:grid-cols-3  grid-cols-2 grid-rows-2 gap-2 py-10 lg:gap-5 h-auto w-full px-3 lg:px-16">
        {Grid.map((grids, index) => (
          <div
            key={index}
            className={`
         bg-slate-900 relative group w-[100%]
          ${grids.styles && "row-span-2 lg:h-[450px] h-[300px] w-[100%]"}
          ${grids.styles3 && "lg:h-[400px] h-[250px] w-[100%]"}
           ${grids.styles2 && "lg:h-[380px] h-[250px] w-[100%]"} flex items-center`}
          >
            <img
              src={grids.gridImage}
              alt="images.png"
              className="object-contain "
            />
            <div
              className=" absolute  invisible duration-200 transition-all group-hover:visible
            text-white bg-[rgba(0,0,0,0.3)] flex items-center px-1 flex-col justify-center
            bottom-0 w-full  h-full"
            >
              <h1 className=" text-center font-semibold text-xl font-Roboto capitalize">
                {grids.title1}
              </h1>
              <h1 className=" text-center text-white font-Verdana py-2 font-medium">
                {grids.title2}
              </h1>
            </div>
          </div>
        ))}
      </div>
     </Fade>
    </div>
  );
}

export default Grids;
